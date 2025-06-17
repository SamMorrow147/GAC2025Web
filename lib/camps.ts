import fs from 'fs'
import path from 'path'

export interface Location {
  id: string
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

function getCampLocationsData() {
  const filePath = path.join(process.cwd(), 'content', 'camps', 'camp-locations.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileContents)
}

export async function getCampLocations(): Promise<CampData> {
  const filePath = path.join(process.cwd(), 'content', 'camps', 'locations.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileContents)
}

export async function getStates(): Promise<State[]> {
  const data = getCampLocationsData()
  const states: State[] = Object.entries(data.camps).map(([key, state]: [string, any]) => ({
    name: state.name,
    abbreviation: key,
    locations: state.locations.map((location: any) => ({
      name: location.name,
      city: location.city,
      state: location.state,
      description: location.fullAddress || '',
      programs: [], // You can map sessions or other info if needed
      contact: {
        phone: '',
        email: '',
        address: location.fullAddress || ''
      }
    }))
  }))
  return states
}

export async function getLocation(stateAbbr: string, locationSlug: string): Promise<Location | null> {
  const state = await getStates().then(states => states.find(s => s.abbreviation.toLowerCase() === stateAbbr.toLowerCase()))
  if (!state) return null

  const location = state.locations.find(
    l => l.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === locationSlug
  )
  
  return location || null
}

export async function getStateByAbbreviation(abbreviation: string): Promise<State | null> {
  const data = getCampLocationsData()
  const state: any = data.camps[abbreviation.toLowerCase()]
  if (!state) return null
  return {
    name: state.name,
    abbreviation: abbreviation.toLowerCase(),
    locations: state.locations.map((location: any) => ({
      id: location.id,
      name: location.name,
      city: location.city,
      state: location.state,
      description: location.fullAddress || '',
      programs: [],
      contact: {
        phone: '',
        email: '',
        address: location.fullAddress || ''
      }
    }))
  }
} 