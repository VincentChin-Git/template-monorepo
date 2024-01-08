import EnvConfig from "../config";

const Index = () => {
  return (
    <div>
      This is Index / Root, do any initalisation here. {EnvConfig.serviceUrl}
    </div>
  );
};

export default Index;
