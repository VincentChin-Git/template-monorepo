import { model, Schema } from "mongoose";

import { ITest } from "@packages/types";

const TestSchema = new Schema<ITest>(
  {
    testkey: { type: String },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

export const TestModel = model<ITest>("tests", TestSchema);
