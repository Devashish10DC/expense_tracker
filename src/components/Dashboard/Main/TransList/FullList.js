import React,{useContext,useEffect} from 'react'
import { List as TransList,ListItem,ListItemAvatar,ListItemText,Avatar,ListItemSecondaryAction,IconButton,Slide} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import {Delete ,MoneyOff,Edit} from '@material-ui/icons';
import { useTrans }  from '../../../../Context/TransContext';
import { useAuth}  from '../../../../Context/AuthContext';
import {Grid,Card,CardContent,Typography,Divider,Button }from "@material-ui/core";
import { Link } from "react-router-dom";
import Form from '../Form/Form'


const useStyles = makeStyles((theme) => ({

     grid: {
    '& > *': {
      marginLeft: theme.spacing(10),
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(15),
      
    },
  },
    avatarIncome: {
    color: '#fff',
    backgroundColor: '#00FF00',
  },
  avatarExpense: {
  
    backgroundColor: '#ff0000',
  },
  list: {
    maxHeight: '80vh',
    maxWidth: '80vw',
    overflow: 'auto',

  },
}))

const FullList = () => {

     const classes = useStyles();
     const {CurrentUser} = useAuth();

      const {DeleteTransaction,transactions,SearchTransaction,FetchTransaction,UpdateTransaction}  = useTrans();
    
    useEffect(() => {

     FetchTransaction(CurrentUser.uid);
    
    }, [])
     

     const handle=(id) => {
      
        
        DeleteTransaction(id)

     }
     
     const update=(id) => {
      
        
        SearchTransaction(id)
        
     }

     return (
                    
                   <Card className={classes.root}  elevation={20}>
                   <Typography variant="h7">
                      Click on the Pen and then enter the update values
                     </Typography>
                   <Link to="/" style={{ textDecoration: 'none'}}>
                   <Button className = {classes.btn}  color="primary" > ← Back To Tracker</Button>
                     </Link>
                     
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
                                <IconButton edge="end" aria-label="update" onClick={() => update(transaction.id)} > 
                                    <Edit/>
                                </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                                    </Slide>
                                    ))}
                            </TransList>
                             </Card>
                   
    )
}

export default FullList
