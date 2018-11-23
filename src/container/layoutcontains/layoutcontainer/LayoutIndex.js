/**
 * Created by kurosaki on 2018/11/23.
 */
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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'block',
    }
});

class LayoutIndex extends React.Component {
    render() {
        const { classes, theme } = this.props;
        return (
            <div className={classes.root}>
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
                    elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                    hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
                    velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
                    Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
                    viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
                    Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
                    at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
                    ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus
                    sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
                    In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique
                    sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo
                    viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
                    ultrices sagittis orci a.
                </Typography>
            </div>
        );
    }
}

LayoutIndex.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(LayoutIndex);