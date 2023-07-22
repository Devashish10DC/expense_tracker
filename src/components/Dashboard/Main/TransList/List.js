import React,{useContext,useEffect} from 'react'
import { List as TransList,ListItem,ListItemAvatar,ListItemText,Avatar,ListItemSecondaryAction,IconButton,Slide} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import {Delete ,MoneyOff} from '@material-ui/icons';
import { useTrans }  from '../../../../Context/TransContext';
import { useAuth}  from '../../../../Context/AuthContext';



const useStyles = makeStyles((theme) => ({

     avatarIncome: {
    color: '#fff',
    backgroundColor: '#00FF00',
  },
  avatarExpense: {
  
    backgroundColor: '#ff0000',
  },
  list: {
    maxHeight: '145px',
    overflow: 'auto',
  },
}))

const List = () => {

     const classes = useStyles();
     const {CurrentUser} = useAuth();

      const {DeleteTransaction,transactions,FetchTransaction,Trans}  = useTrans();
    
    useEffect(() => {

     FetchTransaction(CurrentUser.uid);
      
    }, [])
     

     const handle=(id) => {
      
        
        DeleteTransaction(id)

     }
     return (
         <TransList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.category} secondary={transaction.description} />
            <ListItemText secondary={`$${transaction.amount}`}/>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handle(transaction.id)}> 
                <Delete/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </TransList>
    )
}

export default List
