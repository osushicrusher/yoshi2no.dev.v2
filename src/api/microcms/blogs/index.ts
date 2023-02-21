import type { BlogsResponse } from "@/models";

export type Methods = {
  get: {
    reqHeaders: {
      "X-MICROCMS-API-KEY": string;
    };
    resBody: BlogsResponse;
  };
};
