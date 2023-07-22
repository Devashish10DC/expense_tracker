import React,{useState,useContext,useEffect} from 'react';
import {auth} from '../firebase'
import firebase from 'firebase/app';



export const AuthContext = React.createContext();


export function useAuth(){

    return useContext(AuthContext)
}


export  function AuthProvider({children})  {
     const [CurrentUser, setCurrentUser] = useState()
 
     const [loading, setLoading] = useState(true);


    
    //here we are creating the user 
     function signup(email,password){

        return auth.createUserWithEmailAndPassword(email, password);
     }


     function login(email,password){

        return auth.signInWithEmailAndPassword(email, password)
     }
 

    function logout(email,password) {

        return auth.signOut();
        
    }

    function googlesignin(){

        var provider = new firebase.auth.GoogleAuthProvider();

        return auth.signInWithPopup(provider);
    }

    function resetemail(email) {

        return auth.sendPasswordResetEmail(email);
        
    }
   

   function updatepassword(password) {
       
        return CurrentUser.updatePassword(password);
   }


   function updateemail(email) {
       
        return CurrentUser.updateemail(email);
   }




    //here we are setting the user that is he is a user now and the persistence is also done here
    //unsubscribe is for stopping it
     useEffect(() => {
         
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        })
     }, [])
    



     const value ={
         CurrentUser,
         signup,
         logout,
         login,
         resetemail,
         updatepassword,
         updateemail,
         googlesignin
     }
   
     
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthContext
