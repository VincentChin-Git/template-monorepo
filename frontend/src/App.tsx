import { ConfigProvider, theme } from "antd";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

import Route from "./router/Route";
import store from "./store";

import "./App.css";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <ConfigProvider
          theme={{
            algorithm: theme.defaultAlgorithm,
          }}
        >
          <Route />
        </ConfigProvider>
      </Provider>
      <Toaster />
    </>
  );
};

export default App;
