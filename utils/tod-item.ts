import { Priority } from "@/interface/tod-item"

export function displayPriority(value?: Priority) {
  if (value === 'high') {
    return 'High'
  }
  if (value === 'medium') {
    return 'Medium'
  }
  return 'Low'
}