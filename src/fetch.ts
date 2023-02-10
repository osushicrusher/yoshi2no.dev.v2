export const fetchBlogs = async () => {
  const data = await fetch(import.meta.env.MICROCMS_API_URL + "blogs", {
    headers: {
      "X-MICROCMS-API-KEY": import.meta.env.MICROCMS_API_KEY,
    },
  }).then((r) => r.json());

  return data.contents;
};
