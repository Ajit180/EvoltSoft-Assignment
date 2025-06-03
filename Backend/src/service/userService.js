import bcrypt from 'bcrypt'
import { generatejwtToken } from '../utils/common/jwt.js'
import { createUser, findUserbyEmail } from '../repository/userRepository.js'


export const signupUserService = async (userData) => {
  try {
    const newUser = await createUser(userData);
    return newUser;
  } catch (error) {
    // Handle duplicate email or username
    if (error.code === 11000 && error.keyValue) {
      throw {
        status: 400,
        message: `Duplicate field: ${Object.keys(error.keyValue).join(', ')} already exists`,
      };
    }
    throw {
      status: 500,
      message: 'Something went wrong during signup',
    };
  }
};



export const signinUserService = async(userDetails)=>{
      try {

        //1 check if there is user is a valid registred user with the email  
        const user = await findUserbyEmail(userDetails.email);

        if(!user){
            throw {
                status:404,
                message:"User not found"
            }
        }
        
        //2.Compare Password
        const isvalidpassword= bcrypt.compareSync(userDetails.password,user.password);

        if(!isvalidpassword){
            throw{
                status:401,
                message:"Invalid Password"
            }
        }

        const token = generatejwtToken({email:user.email,_id:user._id,username:user.username,role:user.role||"user"});
        
        return {
            username:user.username,
            email:user.email,
            _id:user._id,
            role:user.role,
            token:token
        }
        
      } catch (error) {
        throw error;    
      }
}


export const checkIfUserExists = async (email) => {
    try {
        const user = await findUserbyEmail(email);
        return user;
    } catch (error) {
        throw error;
    }
}