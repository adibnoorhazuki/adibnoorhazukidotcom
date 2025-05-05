import type { Company } from "./company";
import type { Project } from "./project";

export interface Experience {
  position: string
  duration: string
  company: Company
  projects: Pick<Project, 'name' | 'duration'>[]
}
