import { rest } from 'msw';
import {
  getRoadmapsResponse,
  updateFixture,
  getRoadmapStepsResponse,
  updateGetRoadmapGroupMemberResponseFixture,
  getRoadmapStepReferenceResponse,
  postRoadmapsResponse,
  getRoadmapGroupMemberResponse,
  updateGetRoadmapStepsResponseFixture,
  getRoadmapGroupApplyResponse,
  postRoadmapsGroupsParticipateResponse,
} from '@/mocks/fixtures/roadmap';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const roadmapHandler = [
  rest.get(`${BASE_URL}/roadmaps/my`, (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(getRoadmapsResponse));
    } catch (error) {
      return res(
        ctx.status(400),
        ctx.json({
          success: false,
          message: '서버에서 에러가 났어요',
          result: null,
        }),
      );
    }
  }),

  rest.get(`${BASE_URL}/roadmaps/:id/steps`, (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(getRoadmapStepsResponse));
    } catch (error) {
      return res(
        ctx.status(400),
        ctx.json({
          success: false,
          message: '서버에서 에러가 났어요',
          result: null,
        }),
      );
    }
  }),

  rest.get(`${BASE_URL}/roadmaps/:roadmapId/steps/:stepId/references`, (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(getRoadmapStepReferenceResponse));
    } catch (error) {
      return res(
        ctx.status(400),
        ctx.json({
          success: false,
          message: '서버에서 에러가 났어요',
          result: null,
        }),
      );
    }
  }),

  rest.post(`${BASE_URL}/roadmaps/individual`, (req, res, ctx) => {
    const {
      body: { name },
    } = req;

    try {
      updateFixture(name);
      return res(ctx.status(200), ctx.json(getRoadmapsResponse));
    } catch (error) {
      return res(
        ctx.status(400),
        ctx.json({
          success: false,
          message: '서버에서 에러가 났어요',
          result: null,
        }),
      );
    }
  }),

  rest.post(`${BASE_URL}/roadmaps/individual/:id/steps`, (req, res, ctx) => {
    const {
      body: { title },
    } = req;

    try {
      updateGetRoadmapStepsResponseFixture(title);
      return res(ctx.status(200), ctx.json(getRoadmapStepsResponse));
    } catch (error) {
      return res(
        ctx.status(400),
        ctx.json({
          success: false,
          message: '서버에서 에러가 났어요',
          result: null,
        }),
      );
    }
  }),

  rest.post(`${BASE_URL}/roadmaps`, (req, res, ctx) => {
    return res(ctx.json(postRoadmapsResponse));
  }),

  rest.get(`${BASE_URL}/roadmaps/groups/:roadmapId/members`, (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(getRoadmapGroupMemberResponse));
    } catch (error) {
      return res(
        ctx.status(400),
        ctx.json({
          success: false,
          message: '서버에서 에러가 났어요',
          result: null,
        }),
      );
    }
  }),

  rest.patch(`${BASE_URL}/roadmaps/groups/:roadmapId/members/:userId`, (req, res, ctx) => {
    const {
      body: { role },
      params: { userId },
    } = req;

    try {
      updateGetRoadmapGroupMemberResponseFixture(Number(userId), role);
      return res(ctx.status(200), ctx.json(getRoadmapGroupMemberResponse));
    } catch (error) {
      return res(
        ctx.status(400),
        ctx.json({
          success: false,
          message: '서버에서 에러가 났어요',
          result: null,
        }),
      );
    }
  }),

  rest.get(`${BASE_URL}/roadmaps/groups/:roadmapId/members/apply`, (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(getRoadmapGroupApplyResponse));
    } catch (error) {
      return res(
        ctx.status(400),
        ctx.json({
          success: false,
          message: '서버에서 에러가 났어요',
          result: null,
        }),
      );
    }
  }),

  rest.post(`${BASE_URL}/roadmaps/groups/participate`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(postRoadmapsGroupsParticipateResponse));
  }),
];
