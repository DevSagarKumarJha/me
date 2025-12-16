export enum ProjectStatus {
  ACTIVE = "active",
  IN_PROGRESS = "in_progress",
  MAINTAINED = "maintained",
  ARCHIVED = "archived",
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
  live?: boolean;
  impact?: string;
  status: ProjectStatus;
}
