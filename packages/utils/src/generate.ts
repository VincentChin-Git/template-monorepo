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

export const generateRandomNumber = (digits: number) => {
  let result = "";
  if (digits <= 0) return result;
  for (let index = 0; index < digits; index++) {
    result += Math.floor(Math.random() * 10);
  }
  return result;
};
