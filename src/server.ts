import Fastify from "fastify";
import cors from "@fastify/cors";

import { AppRoutes } from "./routes";

const app = Fastify();

const PORT = 3333;

app.register(cors);
app.register(AppRoutes);

app.listen({
  port: PORT,
}).then(() => console.log(`SERVER RUNNING ON ${PORT}`));