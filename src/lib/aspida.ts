import aspida, { FetchConfig } from "@aspida/fetch";
import microcmsApi from "@/api/microcms/$api";

const fetchConfig: FetchConfig = {
  credentials: "include",
  throwHttpErrors: true, // throw an error on 4xx/5xx, default is false
};

const aspidaClient = aspida(fetch, fetchConfig);

export const client = {
  microcms: microcmsApi(aspidaClient),
};
