import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PostAddIcon from '@material-ui/icons/PostAdd';
import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Divider,
  List,
  Drawer,
  Box,
  Hidden,
  ListItem,
  makeStyles,
  TextField,
  useTheme,
  Grid
} from '@material-ui/core';

const drawerWidth = 275;

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  searchField: {
    width: '90%',
    margin: '.5rem 0 .5rem 5%'
  },
  drawerHeader: {
    margin: '.5rem 0'
  }
}));

function AppDrawer(props) {
  const { container } = props;
  const theme = useTheme();
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <div>
      <Grid className={classes.drawerHeader} container item alignItems="center" justify="space-between">
        <Grid container item justify="center" xs>
          <Link to="/new">
            <PostAddIcon fontSize="large" style={{ marginTop: '5px', color: 'black' }} />
          </Link>
          <Grid item>
            <Typography component="div">
              <Box fontSize={18}>
                Not-ater
              </Box>
            </Typography>
            <Typography component="div">
              <Box fontSize={12}>
                Note taker
              </Box>
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs>
          <Typography>
            Dark Mode
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <TextField className={classes.searchField} label="Search notes" variant="outlined" />
      <List>
        <ListItem>
          Note results
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Take some notes
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
}

export default AppDrawer;
