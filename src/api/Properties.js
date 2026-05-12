const BASE_URL = 'http://localhost:8080/api/properties'

export async function getProperties() {
  const response = await fetch(BASE_URL)
  if (!response.ok) {
    throw new Error('Failed to fetch properties')
  }
  return response.json()
}

export async function getPropertyById(id) {
  const response = await fetch(`${BASE_URL}/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch property')
  }
  return response.json()
}