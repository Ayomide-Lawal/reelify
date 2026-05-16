import { Router, type IRouter } from "express";
import healthRouter from "./health";
import authRouter from "./auth";
import projectsRouter from "./projects";
import processingRouter from "./processing";
import exportsRouter from "./exports";
import billingRouter from "./billing";
import dashboardRouter from "./dashboard";

const router: IRouter = Router();

router.use(healthRouter);
router.use(authRouter);
router.use(projectsRouter);
router.use(processingRouter);
router.use(exportsRouter);
router.use(billingRouter);
router.use(dashboardRouter);

export default router;
