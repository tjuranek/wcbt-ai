import express from "express";
import { env } from "./env";
import { router } from "./router";

const app = express();

app.use(express.json());
app.use("/api", router);

app.listen(env.PORT);
