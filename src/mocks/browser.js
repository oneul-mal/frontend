import { setupWorker } from "msw";
import { handler } from "./hadler";

export const worker = setupWorker(...handler);
