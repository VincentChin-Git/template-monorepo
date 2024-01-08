import { z } from "zod";

const parsed = { SERVICE_URL: import.meta.env.VITE_BASE_URL };

/** make sure info in .env file is correct, need to validate  */
const Validation = z
  .object({
    // server
    SERVICE_URL: z.string(),
  })
  .strict();

Validation.parse(parsed);

const EnvConfig = {
  // server
  serviceUrl: parsed["SERVICE_URL"],
};

export default EnvConfig;
