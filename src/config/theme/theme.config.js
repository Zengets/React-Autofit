/**
 * Created by kurosaki on 2018/8/13.
 */
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';




let w = document.body.clientWidth||document.documentElement.clientWidth
window.onresize = function(){
    w = document.body.clientWidth||document.documentElement.clientWidth
}

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),//字体
        htmlFontSize: w<321?16:w>321&&w<769?15:w>769&&w<1080?14:14,//字体大小基数，单位：rem
        fontWeightMedium: 500,//粗细
        /*以下为配置各内联元素属性*/


        h6:{//样式4
            color:"#666",
        },
        h5:{//样式3
            color:"#666"
        },
        h4:{//样式4
            color:"#666",
        },
        h3:{//样式3
            color:"#666"
        },
        h2:{//样式2
            color:"#666",
        },
        h1:{//样式1
            color:"#666",
            fontSize:"1"
        },
        subtitle1:{ //新闻提要
            color:"#fff"
        },
        subtitle2:{ //新闻提要

        },
        subheading:{
            fontWeight:'lighter',
            color:blue[800]
        },
        body1: {//正文1
            fontWeight: 500,
            color:blue[800]
        },
        body2: {//正文2
            color:blue[400]
        },
        caption:{//@copyright 说明

        },
        button: {//button 基础设置
            fontStyle: 'italic',//button style

        },
        overline:{

        }
    },
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff'
        }, // Purple and green play nicely together.
        secondary: {
            main: purple[200],
            light: '#757ce8',
            dark: '#002884',
            contrastText: '#fff'

        }, // This is just green.A700 as hex.
    },
    mixins:{
        toolbar:{
            minHeight:65
        }
    }
});


export default theme