import { useMutation } from "@tanstack/react-query"

import useAuthStore from "../Store/useAuth"
import { siginRequest } from "@/api/Auth";


export const useSignin = ()=>{
    const {setAuth} =useAuthStore();
    const {isPending,isSuccess,error,mutateAsync:siginMutation}=useMutation({
        mutationFn:siginRequest,
        onSuccess:(response)=>{
         console.log('Sigin Successfully',response);
         console.log('User is ',response.data);
         console.log('Token is ',response.token);
         //save user and token in localstorage
         localStorage.setItem('token',response.token);
         localStorage.setItem('user',JSON.stringify(response.user));

         //update the zustand store
         setAuth({
            user:response.user,
            token:response.token
            
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