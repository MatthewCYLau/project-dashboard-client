export interface AddSkillBody {
  name: string;
}

interface Skill {
  _id: string;
  name: string;
}

export type SkillsList = Skill[];
