"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetingRoute = void 0;
const express_1 = require("express");
class GreetingRoute {
    static getInstance() {
        if (!GreetingRoute.Instance) {
            GreetingRoute.Instance = new GreetingRoute();
        }
        return GreetingRoute.Instance;
    }
    constructor() {
        this.router = (0, express_1.Router)();
        this.setupRoutes();
    }
    setupRoutes() {
        this.router.get("/", (req, res) => {
            res.send("Hello World");
        });
        this.router.post("/", (req, res) => {
            const { name } = req.body;
            res.send(`Hello ${name}`);
        });
    }
}
exports.GreetingRoute = GreetingRoute;
