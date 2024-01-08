import { configureStore } from "@reduxjs/toolkit";

import sliceTest from "./sliceTest";

const store = configureStore({
  reducer: { sliceTest },
});

export default store;
