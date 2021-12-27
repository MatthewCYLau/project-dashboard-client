import { ProjectSkill } from "../../projectSkill/interface";

export interface Project {
  name: string;
  _id: string;
  project_skills: ProjectSkill[];
}

export interface AddProjectRequest {
  name: string;
}

export interface AddProjectResponse {
  project_id: string;
}
