import {Router}  from express;
import AuthController from "../controller/AuthController";
 const router = Router();
 router.use("/api" ,AuthRoutes);

 export default router;