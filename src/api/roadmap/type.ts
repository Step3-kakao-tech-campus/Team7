import type { Step, IdName, CommonResponse, Creator, StepWithReferences, Roadmap } from '@/api/type';

// 요청

export interface PostRoadmapsRequest {
  name: string;
  description: string | null;
  isPublic: boolean;
  isRecruit?: boolean;
  category?: 'individual' | 'group';
}

export interface PostReferencesRequest {
  category: 'web' | 'youtube';
  link: string;
  roadmapId: number;
  stepId: number;
}

export interface PostStepsRequest {
  roadmapId: number;
  title: string;
  description: string | null;
  dueDate: Date | null;
}

// 응답

export interface GetRoadmapsMyResponse extends CommonResponse {
  result: {
    categories: IdName[];
    roadmaps: { tilys: Roadmap[]; groups: Roadmap[] };
  };
}

export interface GetRoadmapsResponse extends CommonResponse {
  result: { categoty: 'tily' | 'group'; hasNext: boolean; roadmaps: Roadmap[] };
}

export interface GetRoadmapsByIdResponse extends CommonResponse {
  result: GetRoadmapsByIdResult;
}

export interface GetRoadmapsByIdResult {
  creator?: Omit<Creator, 'id'>;
  category: 'tily' | 'group';
  name: string;
  description: string;
  isPublic: boolean;
  isRecruit: boolean;
  myRole?: 'master' | 'manager' | 'member' | 'none';
  recentTilId?: number | null;
  recentStepId?: number | null;
  code: string;
  steps: StepWithReferences[];
}

export interface GetRoadmapGroupApplyResponse extends CommonResponse {
  result: {
    users: ApplyMember[];
    myRole: Role;
  };
}

export interface GetRoadmapStepsResponse {
  success: boolean;
  message: string;
  result: RoadmapStepsResult;
}

export interface GetRoadmapStepReferenceResponse extends CommonResponse {
  result: {
    id: number;
    description: string;
    youtubes: Youtube[];
    webs: Web[];
  };
}

export interface GetRoadmapGroupMemberResponse extends CommonResponse {
  result: {
    users: Member[];
    myRole: Role;
  };
}

export interface RoadmapStepsResult {
  steps: Step[];
  progress: number;
  myRole: string;
}

export interface Youtube {
  id: number;
  link: string;
}

export interface Web {
  id: number;
  link: string;
}

export interface References {
  id: number;
  link: string;
}

export interface References {
  youtube: Youtube[];
  web: Web[];
}

export interface PostRoadmapsByIdResponse {
  success: boolean;
  message: string;
  result: null;
}

export interface Member {
  id: number;
  name: string;
  image: string;
  role: Exclude<Role, null>;
}

export type Role = keyof typeof roleStatus | null;

export const roleStatus = {
  master: '마스터',
  manager: '매니저',
  member: '멤버',
} as const;

export interface ApplyMember {
  id: number;
  name: string;
  image: string;
  date: string;
  content: string;
}
