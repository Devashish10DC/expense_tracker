import React from 'react'
import {Card,CardHeader,CardContent,Typography} from '@material-ui/core';
import {Doughnut} from 'react-chartjs-2';
import {makeStyles } from '@material-ui/core';
import  useTransactions from  '../../Context/useTransaction';


const useStyles = makeStyles({

    income: {

    height:'41rem',
     width:'25rem'
  },
  expense: {
     height:'41rem',
     width:'25rem'
  },
})


const Info = ({title,subheader}) => {

        const classes = useStyles(); 
        
        const {total,chartData} = useTransactions(title)
        

    return (
          <Card className={title === 'Income' ? classes.income : classes.expense}  elevation={20}>
           <CardHeader title={title} subheader={subheader} />
         <CardContent>
          <Typography variant="h5">{total} Rs</Typography>
          <Doughnut data={chartData} />
         </CardContent>
            
        </Card>
    )
}

export default Info
