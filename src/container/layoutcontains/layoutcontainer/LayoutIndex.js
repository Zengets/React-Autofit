/**
 * Created by kurosaki on 2018/11/23.
 */
/**
 * Created by kurosaki on 2018/11/22.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'block',
    }
});

class LayoutIndex extends React.Component {

    render() {
        const { classes, theme } = this.props;
        const renderDom = (img)=>{
            return(
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            style={{height:280}}
                            image={img}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                            <Typography component="p">
                                Lizards are a widespread group of squamate reptiles
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            )

        }

        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        {
                            renderDom('./assets/images/tts0.jpg')
                        }
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        {
                            renderDom('./assets/images/tts1.jpg')
                        }
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {
                            renderDom('./assets/images/tts2.jpg')
                        }
                    </Grid>


                    <Grid item xs={12} sm={4}>
                        {
                            renderDom('./assets/images/tts3.jpg')
                        }
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        {
                            renderDom('./assets/images/tts4.jpg')
                        }
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {
                            renderDom('./assets/images/tts5.jpg')
                        }
                    </Grid>



                    <Grid item xs={6} sm={3}>
                        {
                            renderDom('./assets/images/tts6.jpg')
                        }
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        {
                            renderDom('./assets/images/tts7.jpg')
                        }
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        {
                            renderDom('./assets/images/tts8.jpg')
                        }
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        {
                            renderDom('./assets/images/tts9.jpg')
                        }
                    </Grid>
                </Grid>
            </div>
        );
    }
}

LayoutIndex.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(LayoutIndex);