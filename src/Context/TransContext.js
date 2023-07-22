import React,{useContext,useReducer,useEffect,useState} from 'react'
import ContextReducer from './ContextReducer'
import {database } from '../firebase'
import {useAuth} from './AuthContext';

const InitialState =  {

     transactions:[],
     loading: true,
}

 export const TransContext = React.createContext(InitialState);



export function useTrans(){

     return useContext(TransContext);
}


export  function TransProvider({children})  {

     var search;
     let res = [];
     let arr = [];
     const [state, dispatch] = useReducer(ContextReducer, InitialState)
     const [Spells,SetSpells] = useState('')
       const {CurrentUser} = useAuth();    
       
       




     //action creators
     async function DeleteTransaction(id){

        
          try {
                    const snapshot =  await database.users
                                    .doc(CurrentUser.uid)
                                    .collection('transactions')
                                     .doc(id)
                                     .delete()
                                     .then(() => {
                                          console.log("!deleted Sucesfullly")
                                     })
                    
                     } catch (err) {
                               console.log(err)
                    
                     }
        
   
                dispatch({type : 'DELETE_TRANSACTION',
                  payload:id,
          })
     }
     
     async function SearchTransaction(id){

          try {
                    SetSpells(await database.users
                                    .doc(CurrentUser.uid)
                                    .collection('transactions')
                                     .doc(id)
                                     .get());
            
                  
          } catch (err) {
               
               console.log(err.message)
          }
     }
    
      async function UpdateTransaction(transaction,id){

              try{
                 const snapshot = await database.users.doc(CurrentUser.uid)
                                     .collection('transactions')
                                     .doc(id)
                                     .get()
                    snapshot.ref.update(transaction);
                
           }catch(err){

                console.log(err.message)
           }
        
      }
   

      async function AddTransaction(transaction,id){
           try{                                                                                   
                await database.users.doc(CurrentUser.uid).collection('transactions').doc(id).set ({

                   ...transaction,
                   userId:CurrentUser.uid,
               })
            dispatch({
                 type:'ADD_TRANSACTION',
                 payload:transaction,
           })
           }catch(err){

                console.log(err.message)
           }

     }


     async function  FetchTransaction(id){
        
           try{
                await database.users
                .doc(CurrentUser.uid)
                .collection('transactions')
                .where("userId", "==",CurrentUser.uid)
                .get()
                .then((snapshot) => {              
                 snapshot.docs.forEach(doc => {

                          res.push(doc.data())
                    
                 })              
               })
                dispatch({
                type:'GET_TRANSACTIONS',
                payload:res,
             })
           }catch(err){

                console.log(err.message)
           }

     }
 

     
   
     const balance = state.transactions.reduce((acc,currval) => currval.type === 'Expense'? acc - currval.amount : acc + currval.amount,0);
     const value={
          DeleteTransaction,AddTransaction, UpdateTransaction, transactions: state.transactions,balance,FetchTransaction,SearchTransaction,Spells
     }
    
    return (
        <TransContext.Provider value={value}>
             {children}
        </TransContext.Provider>
    )
}

export default TransContext

