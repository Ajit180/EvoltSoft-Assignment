import User from "../schema/userSchema.js";


export const findUserbyEmail = async(email)=>{
    try {
        const user = await User.findOne({email});
        return user;
        
    } catch (error) {
        console.log("Error in finding the email",error);
    }
};

export const findAllUsers = async()=>{

    try {
        const user = await User.find();
        return user;
        
    } catch (error) {
        console.log("Error in finding alluser",error)
    }
}

export const createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
