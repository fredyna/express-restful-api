import {ResponseError} from "../error/response-error.js";
import * as result from "winston";

const errorMiddleware = (err, req, res, next) => {
    if(!err){
        next();
        return
    }

    if (err instanceof ResponseError) {
        res.status(err.status).json({
            errors: err.message
        }).end();
    }  else {
        res.status(500).json({
            errors: err.message
        }).end();
    }
}

export {
    errorMiddleware
}