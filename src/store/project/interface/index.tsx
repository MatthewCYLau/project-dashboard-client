import { ProjectSkill } from "../../projectSkill/interface";

export interface Project {
  name: string;
  _id: string;
  created_by: string;
  sector: string;
  project_skills: ProjectSkill[];
}

export interface ProjectRequest {
  name: string;
  sector: string;
}

export interface ProjectResponse {
  project_id: string;
}
