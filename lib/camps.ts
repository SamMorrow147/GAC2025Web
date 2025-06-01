import fs from 'fs'
import path from 'path'

export interface Location {
  name: string
  city: string
  state: string
  description: string
  programs: string[]
  contact: {
    phone: string
    email: string
    address: string
  }
}

export interface State {
  name: string
  abbreviation: string
  locations: Location[]
}

export interface CampData {
  states: State[]
}

// Sample data - in a real application, this would come from a database or CMS
const states: State[] = [
  {
    name: 'Alaska',
    abbreviation: 'AK',
    locations: [
      {
        name: 'UAA Seawolf Sports Complex',
        city: 'Eagle River',
        state: 'Alaska',
        description: 'State-of-the-art facility featuring Olympic-sized ice rinks and training areas.',
        programs: ['Summer Camp', 'Skills Clinic', '3-on-3 League'],
        contact: {
          phone: '(907) 555-0123',
          email: 'eagleriver@gregcarterhockey.com',
          address: '123 Hockey Way, Eagle River, AK 99577'
        }
      },
      {
        name: 'McDonald Center',
        city: 'Eagle River',
        state: 'Alaska',
        description: 'Modern facility with multiple ice surfaces and training rooms.',
        programs: ['Winter Camp', 'Goalie Clinic', 'Spring League'],
        contact: {
          phone: '(907) 555-0124',
          email: 'mcdonald@gregcarterhockey.com',
          address: '456 Ice Road, Eagle River, AK 99577'
        }
      }
    ]
  },
  {
    name: 'Massachusetts',
    abbreviation: 'MA',
    locations: [
      {
        name: 'Canton Ice House',
        city: 'Canton',
        state: 'Massachusetts',
        description: 'Premier hockey training facility in the Boston area.',
        programs: ['Elite Camp', 'Skills Development', 'Summer League'],
        contact: {
          phone: '(781) 555-0123',
          email: 'canton@gregcarterhockey.com',
          address: '789 Hockey Lane, Canton, MA 02021'
        }
      },
      {
        name: 'New England Sports Center',
        city: 'Marlborough',
        state: 'Massachusetts',
        description: 'World-class facility with multiple ice surfaces and training areas.',
        programs: ['Winter Camp', 'Skills Clinic', '3-on-3 League'],
        contact: {
          phone: '(508) 555-0123',
          email: 'nesc@gregcarterhockey.com',
          address: '123 Sports Way, Marlborough, MA 01752'
        }
      }
    ]
  }
]

export async function getCampLocations(): Promise<CampData> {
  const filePath = path.join(process.cwd(), 'content', 'camps', 'locations.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileContents)
}

export async function getStates(): Promise<State[]> {
  // In a real application, this would fetch from a database or CMS
  return states
}

export async function getLocation(stateAbbr: string, locationSlug: string): Promise<Location | null> {
  const state = states.find(s => s.abbreviation.toLowerCase() === stateAbbr.toLowerCase())
  if (!state) return null

  const location = state.locations.find(
    l => l.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === locationSlug
  )
  
  return location || null
}

export async function getStateByAbbreviation(abbreviation: string): Promise<State | null> {
  return states.find(s => s.abbreviation.toLowerCase() === abbreviation.toLowerCase()) || null
} 