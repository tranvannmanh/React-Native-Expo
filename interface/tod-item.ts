export type Priority = 'high' | 'medium' | 'low'

export type Label = {
  color: string
  title: string
  value: string
  id: string | number
}

export type TodItem = {
  title: string
  description?: string
  dueDate?: Date
  priority?: Priority
  label?: Label
}