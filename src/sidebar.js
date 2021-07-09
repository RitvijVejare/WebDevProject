import { Grid, Typography, Container, TextField, List } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import logo from "./images/logo.png";
import { ListItem,ListItemText,ListItemIcon } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Sidebar = () => {
    return ( 
        <React.Fragment>
            <div style={{padding:"35px 0px"}}>
                <Container>
                    <Grid container>
                        <Grid item xs={3} />
                        <Grid item xs={6} style={{display:"flex", justifyContent:"center"}}>
                            <img src={logo} height="29.6px" width="30px" alt="logo"/>
                            <Typography style={{fontSize:"20px", fontWeight:"bolder", color:"#C3C6CE"}}>Origin</Typography>
                        </Grid>
                        <Grid item xs={3} />
                    </Grid>
                </Container>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
            <TextField
                variant="outlined"
                style={{backgroundColor:"#ffffff", height:"50px", width:"250px", textDecoration:"none", border:"0px"}}
                placeholder="Search Games and More"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
                }}
            />
            </div>
            <div style={{marginTop:"5px"}}>
                <List>
                    <ListItem button>
                        <ListItemText primary="EA Play" style={{color:"#C3C6CE"}} />
                        <ListItemIcon>
                            <ArrowForwardIosIcon style={{color:"#C3C6CE"}} />
                        </ListItemIcon>
                    </ListItem>
                </List>
            </div>
        </React.Fragment>
     );
}
 
export default Sidebar;