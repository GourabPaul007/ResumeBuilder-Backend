import { Details } from "../interfaces/Details";
import { ResumeBuildData } from "../interfaces/ResumeBuildData";

export interface Resume {
  resumeId: string;
  resumeData: ResumeBuildData;
}

export const resumes: Array<Resume> = [];

export function addResume(id: string, data: ResumeBuildData) {
  resumes.push({ resumeId: id, resumeData: data });
}

export function deleteResumeById(id: string) {
  for (let i = 0; i < resumes.length; i++) {
    if (resumes[i].resumeId === id) {
      resumes.splice(i, 1);
    }
  }
}

export function findResumeById(id: string): Resume | undefined {
  for (let i = 0; i < resumes.length; i++) {
    if (resumes[i].resumeId === id) {
      console.log("found resume: ", resumes[i]);
      return resumes[i];
    }
  }
}
