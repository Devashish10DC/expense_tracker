// //this will  take previous state and action and then perform action according to it
import {database } from '../firebase'
import {useAuth} from './AuthContext';



const ContextReducer = (state,action) => {
    
        switch(action.type) {
    

    case 'ADD_TRANSACTION':

      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }

    case 'DELETE_TRANSACTION':
           
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
       case 'GET_TRANSACTIONS':
        
          
           return {
                 ...state,
                   loading: false,
             transactions: [...action.payload]
            
           }
       case 'FETCH_TRANSACTIONS':
        
        
           return {
                 ...state,
                   loading: false,
             transactions: [...action.payload]
            
           }
                 

    default:
      return state;
  }


}

export default ContextReducer



//       const {CurrentUser} = useAuth();
// //      let transactions;
//      switch (action.type) {
//          case 'ADD_TRANSACTION':
//                return {
//             ...state,
//             transactions: [action.payload, ...state.transactions]
//           }
//             //  const TransactionDetails = action.payload;
//             //  transactions =  [action.payload, ...state]
              
          
//             //   database.users.doc(CurrentUser.uid).collection('transactions').add({

//             //       ...transactions,
//             //        userId:CurrentUser.uid,
//             //   })
              
//               // return transactions;
      

//          case 'DELETE_TRANSACTION':

//             return {
//            ...state,
//              transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
//            }
// //              transactions = state.filter((t) => t.id != action.payload)  //this higher order function will remove the id matching id passed to be delted
// //               //we have used here state because we set the state to be transaction    
// //           //     try {            
// //           //     database.users
// //           //    .doc(CurrentUser.uid)
// //           //    .collection('transactions')
// //           //     .doc()
// //           //     .delete()
// //           //     .then( ()=>{
// //           //          console.log('bhai ne bola krneka toh karneka')
// //           //     })
// //           //     } catch (err) {
// //           //          console.log(err)
// //           //          console.log('not done ')
// //           //     }
//             // return transactions;



//           case 'GET_TRANSACTIONS':
//           console.log(action.payload)
//            return {
//                  ...state,
//              transactions: action.payload
//            }

           
//        default:
//           return state;
          
//      }



