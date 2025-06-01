const fs = require('fs');
const path = require('path');
const csvPath = path.join(__dirname, '../content/camps/2025 Summer Camps Registration Links.xlsx - Location.csv');
const jsonPath = path.join(__dirname, '../content/camps/camp-locations.json');
const sessionLinksCsvPath = path.join(__dirname, '../content/camps/2025 Summer Camps Registration Links.xlsx - Session.csv');
const parse = require('csv-parse/sync').parse;

function normalize(str) {
  return (str || '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .replace(/center|arena|rink|complex|ice|sports|skating|memorial|house|forum|village|den|athletic|university|regional|seawolf|sport|the|community|\(.*?\)/g, '')
    .trim();
}

function parseLinksCSV(data) {
  const lines = data.split('\n').filter(l => l.trim() && !l.startsWith('Season'));
  const links = [];
  for (const line of lines) {
    // Try to match: Season, "Location, City State", URL
    const match = line.match(/^.*?,"?([^",]+(?:,[^",]+)*)"?,(https?:\/\/[^\s,]+)$/);
    if (match) {
      let location = match[1].replace(/"/g, '').trim();
      let link = match[2].trim();
      links.push({ location, link });
    } else {
      // fallback: try splitting by last comma
      const lastComma = line.lastIndexOf(',');
      if (lastComma !== -1) {
        let location = line.slice(0, lastComma).split(',').slice(1).join(',').replace(/"/g, '').trim();
        let link = line.slice(lastComma + 1).trim();
        if (link.startsWith('http')) {
          links.push({ location, link });
        }
      }
    }
  }
  return links;
}

function findLink(location, city, links) {
  const normLoc = normalize(location);
  const normCity = normalize(city);
  for (const l of links) {
    const normLinkLoc = normalize(l.location);
    if (normLoc && normLinkLoc.includes(normLoc)) return l.link;
    if (normCity && normLinkLoc.includes(normCity)) return l.link;
  }
  return null;
}

function parseSessionLinksCSV(data) {
  // Find the header line
  const lines = data.split('\n');
  const headerIndex = lines.findIndex(line => line.startsWith('Season,Session,'));
  if (headerIndex === -1) throw new Error('Session CSV header not found');
  const csvData = lines.slice(headerIndex).join('\n');
  const records = parse(csvData, { columns: true, skip_empty_lines: true });
  const sessionLinks = {};
  for (const row of records) {
    const sessionNum = (row['Session'] || '').trim();
    const link = (row['Registration link'] || '').trim();
    if (sessionNum && link) {
      sessionLinks[sessionNum] = link;
    }
  }
  return sessionLinks;
}

const linksCSV = fs.readFileSync(csvPath, 'utf8');
const links = parseLinksCSV(linksCSV);
const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Parse session registration links
const sessionLinksCsv = fs.readFileSync(sessionLinksCsvPath, 'utf8');
const sessionLinks = parseSessionLinksCSV(sessionLinksCsv);

for (const state of Object.values(json.camps)) {
  for (const loc of state.locations) {
    // Special case: Tri Town Ice Arena (Tri-Town)
    if (
      normalize(loc.name) === normalize('Tri Town Ice Arena') &&
      normalize(loc.city) === normalize('Hooksett')
    ) {
      loc.registrationUrl = 'https://campscui.active.com/orgs/GregCartersEuropeanHockeyCamp?season=3547344&location=467101';
      continue;
    }
    // Add more special cases here as needed
    const regLink = findLink(loc.name, loc.city, links);
    if (regLink) {
      loc.registrationUrl = regLink;
    } else {
      // Do not set registrationUrl if not found
      delete loc.registrationUrl;
    }
    // Set each session's registerUrl to the session-specific link if available
    if (loc.sessions) {
      for (const session of loc.sessions) {
        if (sessionLinks[session.campNumber]) {
          session.registerUrl = sessionLinks[session.campNumber];
        } else if (loc.registrationUrl) {
          session.registerUrl = loc.registrationUrl;
        } else {
          delete session.registerUrl;
        }
      }
    }
  }
}

fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2));
console.log('camp-locations.json updated with location-level registrationUrl.'); 