import type { Company } from "./company";

export interface Project {
  name: string
  description: string
  image: string | null
  duration?: string
  company: Company
}
