import { Grid, Typography, Container, TextField, List, Box, Tabs, Tab } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import logo from "./images/logo.png";
import { ListItem,ListItemText,ListItemIcon } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Deals from './tabPages/deals';
import EaPlay from './tabPages/eaplay';
import Store from './tabPages/store';
import BrowseGames from './tabPages/browse';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`vertical-tabpanel-${index}`}
          aria-labelledby={`vertical-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box p={3}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    };
    
    function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
    tabs: {
        display:"flex",
        justifyContent:"flex-start",
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    tabPanel:{
        color:"#C3C6CE"
    }
}));

const Sidebar = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return ( 
        <React.Fragment>
            <Grid container>
                <Grid item xs={3} style={{backgroundColor:"#1E2C26E6"}}>
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
                    <div style={{marginTop:"30px"}}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                    >
                        <Tab className={classes.tabPanel} label="EA Play" {...a11yProps(0)} />
                        <Tab className={classes.tabPanel} label="Store" {...a11yProps(1)} />
                        <Tab className={classes.tabPanel} label="Browse Games" {...a11yProps(2)} />
                        <Tab className={classes.tabPanel} label="Deals" {...a11yProps(3)} />
                    </Tabs>
                    
                        {/* <List>
                            <ListItem button>
                                <ListItemText primary="EA Play" style={{color:"#C3C6CE"}} />
                                <ListItemIcon>
                                    <ArrowForwardIosIcon style={{color:"#C3C6CE"}} />
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="EA Play" style={{color:"#C3C6CE"}} />
                                <ListItemIcon>
                                    <ArrowForwardIosIcon style={{color:"#C3C6CE"}} />
                                </ListItemIcon>
                            </ListItem>
                        </List> */}
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <TabPanel value={value} index={0}>
                        <EaPlay />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Store />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <BrowseGames />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Deals />
                    </TabPanel>
                </Grid>
            </Grid>
        </React.Fragment>
     );
}

export default Sidebar;