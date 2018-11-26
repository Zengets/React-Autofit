/**
 * Created by kurosaki on 2018/11/26.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';
import withWidth from '@material-ui/core/withWidth';
import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit,
        [theme.breakpoints.down('sm')]: {
            backgroundColor: theme.palette.secondary.main,
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: theme.palette.primary.main,
        },
        [theme.breakpoints.up('lg')]: {
            backgroundColor: green[400],
        },
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        justifyContent:"space-around",
        borderRadius:12

    },
});

function LayoutbRreakpoints(props) {
    const { classes,match } = props;
    let state = {
        arr:['xs','sm','md','lg','xl']
    }
    let showArr = (str)=>{
        let newarr = [];
        state.arr.map((item)=>{
            if(item==str){

            }else{
                newarr.push(item)
            }
        })
        return newarr
    }

    return (
        <div className={classes.root}>
            <Typography variant="subtitle1">
                {match.params.key+  " | "  +props.width}
            </Typography>

            <Hidden only={showArr("xs")}>
                <img style={{display:"block",width:"48%",height:"auto",margin:"12px auto",borderRadius:12}} src="./assets/images/tts0.jpg" alt=""/>
            </Hidden>
            <Hidden only={showArr("sm")}>
                <img style={{display:"block",width:"48%",height:"auto",margin:"12px auto",borderRadius:12}} src="./assets/images/tts1.jpg" alt=""/>
            </Hidden>
            <Hidden only={showArr("md")}>
                <img style={{display:"block",width:"48%",height:"auto",margin:"12px auto",borderRadius:12}} src="./assets/images/tts2.jpg" alt=""/>
            </Hidden>
            <Hidden only={showArr("lg")}>
                <img style={{display:"block",width:"48%",height:"auto",margin:"12px auto",borderRadius:12}} src="./assets/images/tts3.jpg" alt=""/>
            </Hidden>
            <Hidden only={showArr("xl")}>
                <img style={{display:"block",width:"48%",height:"auto",margin:"12px auto",borderRadius:12}} src="./assets/images/tts4.jpg" alt=""/>
            </Hidden>


            <Typography variant="subtitle1">{'down(sm): red'}</Typography>
            <Typography variant="subtitle1">{'up(md): blue'}</Typography>
            <Typography variant="subtitle1">{'up(lg): green'}</Typography>
        </div>
    );
}

LayoutbRreakpoints.propTypes = {
    classes: PropTypes.object.isRequired,
};
LayoutbRreakpoints = withWidth()(LayoutbRreakpoints);
export default withStyles(styles)(LayoutbRreakpoints);