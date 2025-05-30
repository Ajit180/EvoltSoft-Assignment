import { checkIfUserExists } from "../service/userService.js";
import { verifyJWT } from "../utils/common/jwt.js";

export const isAuthenticated =async(req,res,next)=>{
    
    const token = req.headers["x-access-token"];

    if(!token){
        return res.status(400).json({
            succuss:false,
            message:"token is requrired"
        })
    }

    try {

        const response = verifyJWT(token);

        const doesUserexists = await checkIfUserExists(response.email);

        if(!doesUserexists){
            return res.status(404).json({
                succuss:false,
                message:"User not found"
            })
        }

        req.user = response; 
       
        next();

        
    } catch (error) {
        
    }
}