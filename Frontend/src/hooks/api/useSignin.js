import { useMutation } from "@tanstack/react-query"

import useAuthStore from "../Store/useAuth"
import { siginRequest } from "@/api/Auth";


export const useSignin = ()=>{
    const {setAuth} =useAuthStore();
    const {isPending,isSuccess,error,mutateAsync:siginMutation}=useMutation({
        mutationFn:siginRequest,
        onSuccess:(response)=>{
         console.log('Sigin Successfully',response);

         const user = {
    _id: response.data._id,
    email: response.data.email,
    username: response.data.username,
    role: response.data.role,
    token:response.data.token
  };
       
         //save user and token in localstorage
         localStorage.setItem('token',response.data.token);
         localStorage.setItem('user',JSON.stringify(user));

         //update the zustand store
         setAuth({
            user:user,
            token:response.data.token
            
         });

        },

        onError:(error)=>{
           console.log('sigin Error',error.message);
        }
         
    })

    return{
        isPending,
        isSuccess,
        error,
        siginMutation
    }
}