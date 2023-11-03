import type { CommonResponse, UserHistory, User, Alarm } from '@/api/type';

// User + Alarm 요청

export interface PatchAlarmRequest {
  alarms: Pick<Alarm, 'id'>[];
}

// User + Alarm 응답

export interface GetUsersResponse extends CommonResponse {
  result: User;
}

export interface GetAlarmsResponse extends CommonResponse {
  result: {
    alarms: Alarm[];
  };
}

// getUserHistory
export interface GetUserHistoryResponse {
  success: boolean;
  message: string;
  result: {
    gardens: UserHistory[];
  };
}

// deleteUser
export interface DeleteUserResponse extends CommonResponse {}

// patchUserPassword
export interface PatchUserPasswordRequest {
  curPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

export interface PatchUserPasswordResponse extends CommonResponse {
  result: null;
}
