import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import noteRoute from "./note/noteRoute";

const app = express();
app.use(globalErrorHandler);
app.use("/api/notes", noteRoute);
export default app;
