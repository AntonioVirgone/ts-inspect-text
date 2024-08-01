import express from "express";
import { setupSwagger } from './swagger';
import routes from "./routes";

const app = express();
const port = 3000;
app.use(express.json());
app.use(routes);
setupSwagger(app);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`API documentation is available at http://localhost:${port}/api-docs`);
});
