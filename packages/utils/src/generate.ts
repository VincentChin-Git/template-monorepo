import type { Context } from "koa";

export const generateResError = (
  ctx: Context,
  msg: string = "Please try again later",
  code: string = "999999"
) => {
  ctx.status = 400;
  ctx.body = { errCode: code, errMessage: msg };
};

export const generateRes = (ctx: Context, data: any, code: number = 200) => {
  ctx.status = 200;
  ctx.body = { data, code, success: true };
};

export const generateResPaging = (
  ctx: Context,
  data: any,
  count: number,
  code: number = 200
) => {
  ctx.status = 200;
  ctx.body = { data, code, count, success: true };
};
