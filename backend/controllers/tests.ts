import { generateRes, generateResError } from "@packages/utils";
import type { Context } from "koa";

import * as TestService from "../services/tests";
// import { ITest } from "@packages/types";

export const testGet = async (ctx: Context) => {
  const { ...data }: any = ctx.request.query;
  console.log(data);

  try {
    const res = await TestService.testGet();
    generateRes(ctx, res);
  } catch (error) {
    const msg = (error as any as Error).message;
    generateResError(ctx, msg || undefined);
  }
};

export const testPost = async (ctx: Context) => {
  const data = ctx.body;
  console.log(data);

  try {
    const res = await TestService.testPost();
    generateRes(ctx, res);
  } catch (error) {
    const msg = (error as any as Error).message;
    generateResError(ctx, msg || undefined);
  }
};
