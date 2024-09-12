export interface Data {
  id: number
  name: string
  lastName: string
  phone: string | null
  email: string
  desc: string
}

export interface ResponseData {
  id: number
  response: string | null
}

export interface CreateData {
  name: string
  lastName: string
  email: string
  desc: string
}

export interface CreateBody {
  name: string
  lastname: string
  email: string
  description: string
}
