export interface Skill {
  type: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  icon?: string;
  rating: number;
}

export interface Language {
  name: string;
  proficiencies: Proficiency;
}

interface Proficiency {
  spoken: string;
  written: string;
}
