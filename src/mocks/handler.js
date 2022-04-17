import { rest } from "msw";

const mockPosts = (function makePostData() {
  const result = [];

  for (let i = 0; i < 100; i++) {
    result.push({
      id: i,
      title: `title${i}`,
      writer: `writer${i}`,
      content: `${i} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem libero tempore excepturi. Inventore, dolor aut modi, velit repellat quos ad minima similique, voluptatum deleniti ipsam. Blanditiis est eum similique deserunt?`,
      sympathies: parseInt(Math.random() * (i + 5)),
      comments: parseInt(Math.random() * (i + 1)),
    });
  }

  return result;
})();

export const handler = [
  rest.get("/contents", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockPosts));
  }),
  rest.post("/login", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(req.body));
  }),
];
