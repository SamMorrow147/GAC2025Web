const fs = require('fs');
const path = require('path');
const csvPath = path.join(__dirname, 'content/camps/2025 Summer Camp List by date copy.csv');
const jsonPath = path.join(__dirname, 'content/camps/camp-locations.json');

function normalize(str) {
  return (str || '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .replace(/center|arena|rink|complex|ice|sports|skating|memorial|house|forum|village|den|athletic|university|regional|seawolf|sport|the|\(.*?\)/g, '')
    .trim();
}

function parseCSV(data) {
  const lines = data.split('\n').filter(l => l.trim() && !l.startsWith('Table 1') && !l.startsWith('Dates,'));
  const sessions = [];
  for (const line of lines) {
    const parts = line.split(',');
    if (parts.length < 6) continue;
    let [dates, campNumber, arenaName, price, cityState, campType, times, ages, soldOut] = parts;
    if (!arenaName) continue;
    let city = '', state = '';
    if (cityState) {
      let match = cityState.match(/([A-Za-z .'-]+)[, ]+([A-Z]{2})/);
      if (match) {
        city = match[1].trim();
        state = match[2].trim();
      } else {
        city = cityState.trim();
      }
    }
    sessions.push({
      dates, campNumber, arenaName, price, city, state, campType, times, ages, soldOut: (soldOut || '').toLowerCase().includes('sold')
    });
  }
  return sessions;
}

function getAllLocations(json) {
  const locations = [];
  for (const stateKey in json.camps) {
    for (const loc of json.camps[stateKey].locations) {
      locations.push({
        ...loc,
        state: loc.state || json.camps[stateKey].abbreviation || stateKey.toUpperCase(),
        stateKey
      });
    }
  }
  return locations;
}

function findMatch(session, locations) {
  const normArena = normalize(session.arenaName);
  const normCity = normalize(session.city);
  const normState = (session.state || '').toUpperCase();
  return locations.find(loc => {
    return (
      normalize(loc.name).includes(normArena) ||
      normArena.includes(normalize(loc.name))
    ) && (
      !normCity || normalize(loc.city).includes(normCity) || normCity.includes(normalize(loc.city))
    ) && (
      !normState || (loc.state && loc.state.toUpperCase() === normState)
    );
  });
}

const csvData = fs.readFileSync(csvPath, 'utf8');
const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const sessions = parseCSV(csvData);
const locations = getAllLocations(jsonData);

const unmatched = [];
for (const session of sessions) {
  if (!findMatch(session, locations)) {
    unmatched.push(session);
  }
}

if (unmatched.length) {
  console.log('Unmatched sessions:');
  unmatched.forEach(s => {
    console.log(
      `Camp #: ${s.campNumber}, Arena: ${s.arenaName}, City: ${s.city}, State: ${s.state}, Dates: ${s.dates}`
    );
  });
} else {
  console.log('All sessions matched!');
} 