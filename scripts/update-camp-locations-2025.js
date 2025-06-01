const fs = require('fs');
const path = require('path');
const parse = require('csv-parse/sync').parse;
const csvPath = path.join(__dirname, '../content/camps/2025 Summer Camp List by date copy.csv');
const jsonPath = path.join(__dirname, '../content/camps/camp-locations.json');

const STATE_ABBR_TO_NAME = {
  'AK': 'Alaska',
  'CT': 'Connecticut',
  'IL': 'Illinois',
  'MA': 'Massachusetts',
  'MI': 'Michigan',
  'MO': 'Missouri',
  'NH': 'New Hampshire',
  'NJ': 'New Jersey',
  'NY': 'New York',
  'PA': 'Pennsylvania',
  'RI': 'Rhode Island',
  'VT': 'Vermont',
  'VA': 'Virginia',
};

function normalize(str) {
  return (str || '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .replace(/center|arena|rink|complex|ice|sports|skating|memorial|house|forum|village|den|athletic|university|regional|seawolf|sport|the|community|\(.*?\)/g, '')
    .trim();
}

function parseCSV(data) {
  // Find the header line
  const lines = data.split('\n');
  const headerIndex = lines.findIndex(line => line.startsWith('Dates,Camp # '));
  if (headerIndex === -1) throw new Error('CSV header not found');
  const csvData = lines.slice(headerIndex).join('\n');
  // Use csv-parse to handle quoted fields and commas
  const records = parse(csvData, { columns: true, skip_empty_lines: true });
  const sessions = [];
  for (const row of records) {
    // Columns: Dates, Camp # '25, Arena Name, Camp Cost 25, City / Town / State, Camp Description, Times, Ages, Sold Out
    let dates = row['Dates'] || '';
    let campNumber = row["Camp # '25"] || '';
    let arenaName = row['Arena Name'] || '';
    let price = row['Camp Cost 25'] || '';
    let cityState = row['City / Town / State'] || '';
    let campType = row['Camp Description'] || '';
    let times = row['Times'] || '';
    let ages = row['Ages'] || '';
    let soldOut = (row['Sold Out'] || '').toLowerCase().includes('sold');
    // Parse city and state
    let city = '', state = '';
    let match = cityState.match(/([A-Za-z .'-]+)[, ]+([A-Z]{2})/);
    if (match) {
      city = match[1].trim();
      state = match[2].trim();
    } else {
      city = cityState.trim();
    }
    // Parse dates
    let startDate = '', endDate = '';
    if (dates && dates.includes('-')) {
      let [start, end] = dates.split('-');
      startDate = start.trim();
      endDate = end.trim();
    } else {
      startDate = dates;
      endDate = dates;
    }
    sessions.push({
      startDate,
      endDate,
      campNumber: campNumber.trim(),
      campType: campType.trim(),
      price: price.trim(),
      times: times.trim(),
      ages: ages.trim(),
      soldOut,
      arenaName: arenaName.trim(),
      city: city.replace(/"/g, '').trim(),
      state: state.trim()
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

function findLocation(session, locations) {
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

function buildNewJson(sessions, oldJson) {
  const newCamps = {};
  const allLocations = getAllLocations(oldJson);
  for (const session of sessions) {
    let loc = findLocation(session, allLocations);
    // If not found, add Tim Hortons IcePlex as a new location under NY
    if (!loc && normalize(session.arenaName) === normalize('Tim Hortons IcePlex')) {
      loc = {
        id: 'tim-hortons-iceplex',
        name: 'Tim Hortons IcePlex',
        city: 'Rochester',
        state: 'NY',
        fullAddress: 'Tim Hortons IcePlex, Rochester, NY',
        stateKey: 'new-york',
        sessions: []
      };
    }
    // If still not found, create a new state/location if state is valid
    if (!loc && session.state && STATE_ABBR_TO_NAME[session.state]) {
      const stateKey = STATE_ABBR_TO_NAME[session.state].toLowerCase().replace(/ /g, '-');
      loc = {
        id: normalize(session.arenaName) + '-' + normalize(session.city),
        name: session.arenaName,
        city: session.city,
        state: session.state,
        fullAddress: `${session.arenaName}, ${session.city}, ${session.state}`,
        stateKey,
        sessions: []
      };
    }
    if (!loc) continue;
    if (!newCamps[loc.stateKey]) {
      newCamps[loc.stateKey] = {
        name: STATE_ABBR_TO_NAME[loc.state] || oldJson.camps[loc.stateKey]?.name || loc.stateKey,
        locations: []
      };
    }
    let existingLoc = newCamps[loc.stateKey].locations.find(l => normalize(l.name) === normalize(loc.name) && normalize(l.city) === normalize(loc.city));
    if (!existingLoc) {
      existingLoc = {
        id: loc.id || '',
        name: loc.name,
        city: loc.city,
        state: loc.state,
        fullAddress: loc.fullAddress || `${loc.name}, ${loc.city}, ${loc.state}`,
        sessions: []
      };
      newCamps[loc.stateKey].locations.push(existingLoc);
    }
    existingLoc.sessions.push({
      startDate: session.startDate,
      endDate: session.endDate,
      campNumber: session.campNumber,
      campType: session.campType,
      price: session.price,
      times: session.times,
      ages: session.ages,
      soldOut: session.soldOut,
      itineraryUrl: '#',
      registerUrl: '#'
    });
  }
  return { camps: newCamps };
}

const csvData = fs.readFileSync(csvPath, 'utf8');
const oldJson = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const sessions = parseCSV(csvData);
const newJson = buildNewJson(sessions, oldJson);
fs.writeFileSync(jsonPath, JSON.stringify(newJson, null, 2));
console.log('camp-locations.json updated with only 2025 session locations, including new states if needed.'); 