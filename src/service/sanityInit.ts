import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  useCdn: false,
  apiVersion: "2023-07-19",
  token: process.env.REACT_APP_SANITY_SECRET_TOKEN,
  ignoreBrowserTokenWarning: true,
});
