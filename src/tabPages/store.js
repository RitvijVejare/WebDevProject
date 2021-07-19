// import { Typography } from '@material-ui/core';
import React from 'react';
import eaPlayImg from '../images/eaPlayImg.jpg';
import storeImg from '../images/store.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
      width: 1330,
      marginLeft: 320,
    },
    bullet: {
        
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,

    },
    pos: {
      marginBottom: 12,
    },
  });

const Store = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return ( 
    <>
    <Card key={0} className={classes.root}>
        <CardContent>
          <img src={storeImg}></img>
          <CardActions>
            <card style={{width: "450px"}}></card>
            <Button size="large" style={{width: "200px", background: "#f56c2d", color: "#FFFFFF"}}>Buy Now!</Button>
            <card style={{width: "10px"}}></card>
            <Button size="large" style={{background: "#e8f4ea"}}>Continue to Origin</Button>

        </CardActions>  
        </CardContent>
        
    </Card>
      </>
    );
}
 
export default Store;