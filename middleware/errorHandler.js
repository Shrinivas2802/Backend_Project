const {constants}=require("../constants");
const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode?res.statusCode:500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json(
                {title:"Validation Failed"
                ,messge:err.messge,
                stackTrace:err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.json(
                {title:"Not Found",
                messge:err.messge,
                stackTrace:err.stack
            });
        case constants.UNAUTHORIZED:
            res.json(
                {title:"Unauthorized",
                messge:err.messge,
                stackTrace:err.stack
            });
        case constants.FORBIDDEN:
            res.json(
                {title:"Forbidden",
                messge:err.messge,
                stackTrace:err.stack
            });
        case constants.SERVER_ERROR:
            res.json(
                {title:"Server Error",
                messge:err.messge,
                stackTrace:err.stack
            });
        default:
            console.log("No Error, All Good!");
            break;
    }
};
    
module.exports=errorHandler;