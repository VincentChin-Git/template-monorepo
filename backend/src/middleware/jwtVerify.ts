// import Jwt from "jsonwebtoken"
import type { Context, Middleware, Next } from "koa";

const JwtVerify: Middleware = async (ctx: Context, next: Next) => {
  // Do Token Verification Here
  await next();
};

export default JwtVerify;
