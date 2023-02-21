import { HTTPError } from "@aspida/fetch";
import { BlogsSchema } from "@/models/Blog";
import { ErrorResponseSchema } from "@/models/ErrorResponse";
import { client } from "@/lib/aspida";

export const getBlogs = async () => {
  try {
    const res = await client.microcms.blogs.$get({
      headers: {
        "X-MICROCMS-API-KEY": import.meta.env.MICROCMS_API_KEY,
      },
    });
    return BlogsSchema.parse(res.contents);
  } catch (e) {
    if (e instanceof HTTPError) {
      ErrorResponseSchema.parse(await e.response.json());
    }
    throw e;
  }
};

export default getBlogs;
