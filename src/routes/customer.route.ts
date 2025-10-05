import { Router,Request,Response } from "express";

export class CustomerRoute{
    private static Instance: CustomerRoute;
    public router:Router;
    
    public static getInstance():CustomerRoute{
        if(!CustomerRoute.Instance){
                CustomerRoute.Instance = new CustomerRoute();

        }

        return CustomerRoute.Instance;
    }
    private constructor(){
        this.router = Router();
        this.setupRoutes();
    }

    private setupRoutes(){
        this.router.get("/", (req:Request, res:Response) => {
            res.send("Hello World Customer ");
        });

        this.router.post("/", (req:Request, res:Response) => {
            const { name } = req.body;
            res.send(`Hello ${name}`);
        });
    }
}

