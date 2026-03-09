export interface Automation {
  id: number;
  name: string;
  description: string | null;
  isActive: boolean;
  createdAt: string;
  lastRunStatus?: "SUCCESS" | "FAILED" | "PARTIAL" | null;
  lastRunAt?: string | null;
}

export interface AutomationDetails {
  id: number;
  name: string;
  description: string | null;
  isActive: boolean;
  createdAt: string;
}

export interface Run {
  id: number;
  automationId: number;
  status: "SUCCESS" | "FAILED" | "PARTIAL";
  startedAt: string;
  finishedAt: string | null;
  durationMs: number | null;
  summary: string | null;
  errorMessage: string | null;
}

export interface ClosedPosition {
  id: number;
  runId: number;
  title: string;
  requisition: string | null;
  location: string | null;
  postedDate: string | null;
  closedDate: string | null;
  applicationsCount: number;
}