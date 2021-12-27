import { ProjectSkill } from "../../projectSkill/interface";

export interface Project {
  name: string;
  _id: string;
  project_skills: ProjectSkill[];
}

export interface ProjectRequest {
  name: string;
}

export interface ProjectResponse {
  project_id: string;
}
