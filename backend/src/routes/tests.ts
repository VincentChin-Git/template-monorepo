import Router from "koa-router";

import { routePrefix } from "./prefix";
import * as Controller from "../controllers/tests";

const v1 = new Router({ prefix: routePrefix });

v1.get("/tests/get", Controller.testGet);
v1.post("/tests/post", Controller.testPost);

export default [v1];
