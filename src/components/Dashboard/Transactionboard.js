import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Info from '../Dashboard/Info';
import Main from '../Dashboard/Main/Main';
import Form from '../Dashboard/Main/Form/Form';
import UpdateForm from '../Dashboard/Main/Form/UpdateForm';
import Box from '@material-ui/core/Box';
import { PushToTalkButton,PushToTalkButtonContainer,ErrorPanel} from '@speechly/react-ui'
import FullList from '../Dashboard/Main/TransList/FullList';
import {Card} from "@material-ui/core";
import Header from '../Header';




const useStyles = makeStyles((theme) => ({
     
       desktop: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(4),
      Padding:20,
    },
  },
}));

const Dashboard = () => {

     const classes = useStyles();
    
    return (

        <div>
          <Header></Header>
         <Grid className={classes.grid} container spacing={0} alignItems="center"  spacing={2} justify="center" style={{ height:'100vh' ,width:'100%'}}>
             
             <Grid item xs={12} sm={4} >
              <FullList/>
           </Grid>
            
            <Grid item xs={12} sm={3}>
          
              <UpdateForm/>
    
             </Grid>

         </Grid>
        </div>
       
    )
}

export default Dashboard 
