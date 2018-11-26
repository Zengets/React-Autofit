/**
 * Created by kurosaki on 2018/11/22.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Srouter} from '../../config'
import {NavLink} from 'react-router-dom'
import Icon from '@material-ui/core/Icon';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    avatar: {
        width:44,
        height:44,
        backgroundColor: theme.palette.secondary.main,
    },
});

class Layout extends React.Component {
    state = {
        mobileOpen: false,
        NavRouter:[
                {
                    name:'Layout',
                    router:"/demo/index",
                    icon:"3d_rotation"
                },
                {
                    name:'Icons',
                    router:"/demo/icons",
                    icon:"ac_unit"
                },
                {
                    name:'Breakpoints',
                    router:"/demo/Breakpoints/MrTAO",
                    icon:"access_alarm"
                },
                {
                    name:'Drafts',
                    router:"/demo/star",
                    icon:"album"
                }
        ]

    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes, theme } = this.props,
               { NavRouter } = this.state;

        const drawer = (
            <div>
                <div className={classes.toolbar} style={{display:"flex",alignItems:"center",paddingLeft:18,borderTop:`${theme.palette.primary.main} solid 4px`,boxSizing:'border-box'}}>
                    <Avatar className={classes.avatar} src="./assets/images/tst.jpg">
                    </Avatar>
                    <Typography variant="h6">
                         &nbsp; h6.User
                    </Typography>
                </div>
                <Divider />
                <List>
                    {
                        NavRouter.map((item, index) => (
                        <NavLink key={item.name} to={item.router} activeClassName="selected">
                            <ListItem button>
                                <ListItemIcon>
                                    <Icon className={classes.icon} color="action">
                                        {item.icon}
                                    </Icon>
                                </ListItemIcon>
                                <ListItemText style={{padding:0}} primary={item.name} />
                            </ListItem>
                        </NavLink>
                    ))
                    }
                </List>
                <Divider />

            </div>
        );

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Responsive drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    {/* The implementation can be swap with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                paper: classes.drawerPaper,
              }}
                            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                paper: classes.drawerPaper,
              }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar} />

                         <Srouter></Srouter>
                </main>
            </div>
        );
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Layout);