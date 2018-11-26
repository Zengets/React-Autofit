/**
 * Created by kurosaki on 2018/11/26.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    icon: {
        margin: theme.spacing.unit * 2,
    },
    iconHover: {
        margin: theme.spacing.unit * 2,
        '&:hover': {
            color: red[800],
        },
    },
});

function LayoutForm(props) {
    const { classes } = props;

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
            <div>
                <Icon className={classes.icon}>add_circle</Icon>
                <Icon className={classes.icon} color="primary">
                    add_circle
                </Icon>
                <Icon className={classes.icon} color="secondary">
                    add_circle
                </Icon>
                <Icon className={classes.icon} color="action">
                    add_circle
                </Icon>
                <Icon className={classes.iconHover} color="error" style={{ fontSize: 30 }}>
                    add_circle
                </Icon>
                <Icon className={classes.icon} color="disabled" fontSize="large">
                    add_circle
                </Icon>
            </div>
            <Typography>
                <a href="https://github.com/google/material-design-icons/edit/master/iconfont/codepoints" target="view_window">
                    打开字体图标库
                </a>
            </Typography>
        </Grid>
    );
}

LayoutForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LayoutForm);