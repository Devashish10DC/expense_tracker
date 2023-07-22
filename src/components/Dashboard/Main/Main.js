import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  Divider,
  Button
} from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import Form from "../Main/Form/Form";
import List from "../Main/TransList/List";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "40 rem"
  },
  cartContent: {
    paddingTop: 0
  },
  divider: {
    margin: "20px 0"
  },
  btn: {
    textDecoration: "none",
    marginRight: "2rem"
  }
}));

const Main = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={20}>
      <CardHeader style={{ textAlign: "center" }} title="Expense Tracker" />
      <CardContent>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>

          <Link to="/all" style={{ textDecoration: "none" }}>
            <Button className={classes.btn} variant="outlined" color="primary">
              {" "}
              View All
            </Button>
          </Link>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
