import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { red } from '@material-ui/core/colors';
import { Link } from "react-router-dom";
import Home from '@material-ui/icons/Home';
import Badge from '@material-ui/core/Badge';
// import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CallTwoTone from '@material-ui/icons/CallTwoTone'
import { withStyles } from '@material-ui/core/styles';
import Person from '@material-ui/icons/Person'
import Email from '@material-ui/icons/Email';
import Create from '@material-ui/icons/Create';
import PermContactCalendar from '@material-ui/icons/PermContactCalendar'
import ExitToApp from '@material-ui/icons/ExitToApp'
const drawerWidth = 240;

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        background: "#C5430C",
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {

        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),

    },
    hide: {
        display: 'none',
    },
    drawer: {
        background: "#C5430C",
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                // position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className='w-full'>
                        <Typography variant="h6" noWrap>
                            <div className='flex justify-between w-full items-center'>
                                <h1 className='  font-bold font-lobster text-3xl '>ShoppingApp</h1>
                                <Link to={"/Cart"}>
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={8} color="secondary">
                                            <div className='text-white'>
                                                <ShoppingCartIcon fontSize='large' />
                                            </div>
                                        </StyledBadge>
                                    </IconButton>
                                </Link>
                            </div>
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <Link to={"/Home"}>
                        <ListItem button >
                            <ListItemIcon><Home></Home></ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>

                    <Link to={"/Login"}>
                        <ListItem button >
                            <ListItemIcon><Person></Person></ListItemIcon>
                            <ListItemText primary="Login" />

                        </ListItem>
                    </Link>
                    <Link to={"/SignUp"}>
                        <ListItem button >
                            <ListItemIcon><Email></Email></ListItemIcon>
                            <ListItemText primary="Sign Up" />
                        </ListItem>
                    </Link>
                { localStorage.getItem('jwt') &&   <Link to={"/"}>
                        <ListItem button >

                            <ListItemIcon>
                                <ExitToApp></ExitToApp>
                            </ListItemIcon>
                            <ListItemText primary={"Logout"} />
                        </ListItem>
                    </Link>
                    }
                </List>
            </Drawer>

        </div>
    );
}
