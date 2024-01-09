import { useEffect } from "react";

import testApi from "../api/test";

const Index = () => {
  const getInfo = async () => {
    try {
      const res = await testApi.get({});
      console.log(res, "success");
    } catch (error) {
      console.error(error, "error");
    }
  };
  useEffect(() => {
    getInfo();
  }, []);

  return <div>This is Index / Root, do any initalisation here.</div>;
};

export default Index;
