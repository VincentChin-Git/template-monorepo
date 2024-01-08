import request from "./_request";

const prefix = "/tests";

const get = async (payload: any) => {
  return request.get(prefix + "/get", payload);
};

const post = async (payload: any) => {
  return request.get(prefix + "/post", payload);
};

const testApi = {
  get,
  post,
};

export default testApi;
