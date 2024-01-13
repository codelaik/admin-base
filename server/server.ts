import Express from "express";

const app = Express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`[Server]: Server is running at http://localhost:${port}`);
});
