import { HTTPError } from "@aspida/fetch";
import { BlogSchema } from "@/models/Blog";
import { ErrorResponseSchema } from "@/models/ErrorResponse";
import { client } from "@/lib/aspida";

export const getBlogs = async () => {
  try {
    const res = await client.blogs.$get();
    return BlogSchema.parse(res);
  } catch (e) {
    if (e instanceof HTTPError) {
      ErrorResponseSchema.parse(await e.response.json());
    }
    throw e;
  }
};

export default getBlogs;
