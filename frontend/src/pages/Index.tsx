import { generateRandomNumber } from "@packages/utils";
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
    console.log("test packages:", generateRandomNumber(6));
  }, []);

  return <div>This is Index / Root, do any initalisation here.</div>;
};

export default Index;
