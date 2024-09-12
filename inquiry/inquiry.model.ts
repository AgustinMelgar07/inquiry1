export interface Data {
  id: number
  name: string
  lastName: string
  phone: string | null
  email: string
  desc: string
  createdAt: string
}

export interface AnswerData {
  response: string | null
}

export interface CreateData {
  name: string
  lastName: string
  phone?: string
  email: string
  desc: string
  createdAt: string
}

export interface CreateBody {
  name: string
  lastname: string
  phone?: string
  email: string
  description: string
  created_at: string
}
