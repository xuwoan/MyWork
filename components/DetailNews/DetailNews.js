
import React, { Component } from 'react';
import {
    View,
    Text,
    Image, TouchableOpacity,
    StyleSheet, ListView
} from 'react-native';
// import { connect } from 'react-redux';
import {
    Header, Title,
    Container,
    Body, Item, ListItem, Row, Col,
    Input, Button, Content, Card, CardItem,
    Icon, Left, Right
} from "native-base";
import { Actions } from 'react-native-router-flux';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-accordion';
import HTMLView from 'react-native-htmlview';

import Dimensions from 'Dimensions';// lấy thông tin thiết bị
const WIDTH = Dimensions.get('window').width;
export default class DetailNews extends Component {

    
    goBack() {
        Actions.pop()
    }
   
   

    render() {
        console.log(this.props.news)
        return (
            <Container>
                <Header style={{ backgroundColor: '#60819E' }}>
                    <Left >
                        <TouchableOpacity onPress={() => this.goBack()}>
                            <Image resizeMode='stretch' style={styles.image} source={require('../../images/arrow_icon.png')} />
                        </TouchableOpacity>
                    </Left>
                    <Body >
                        <Title></Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>
                <Content style={{ backgroundColor: '#DFDFDF' }}>
         
                    <HTMLView
                        value={this.props.news.content}
                    
                    />
                
                </Content>
            </Container>
        )
    }
    componentDidMount() {
      //  this.props.recruitment.job.push({})
     
        // this.setState({
        //     dataSource: this.state.dataSource.cloneWithRows(this.props.recruitment.job)

        // })
    }


}


const styles = StyleSheet.create({
    container2: {

        flex: 1,
        flexDirection: 'row',

    },
    container1: {
        margin: 5,
        height: 130,
        flexDirection: 'row'

    },
    image: {
        width: 30,
        height: 30,




    },
    logo: {

        width: 150,

    },
    text2:
    {
        color: '#2E4053',

    }
    ,
    icon: {
        width: 20
        , height: 20

    },
    container3: {
        height: 120,
        borderRadius: 10,
        borderWidth: 0.5, borderColor: '#2E4053',
        padding: 0,
        marginRight: 3,
        marginTop: 2,
        marginLeft: 3,
        marginBottom: 2,
        flexDirection: 'row',
        backgroundColor: 'white'


    },
    text1: {
        paddingLeft: 6,

        color: "#60819E",
        fontWeight: 'bold',
        fontSize: 15
    }
    ,
    itemstyle: {
        paddingLeft: 5,
        paddingRight: 5,
        height: 36,
        borderWidth: 0.5,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,



        // borderTopColor: variables.ColorGray77,
        // borderTopWidth: variables.borderWidth,
    },
    header:{
        height:40,
        flexDirection:'row',
        justifyContent: 'flex-end',
        //alignItems: 'center',
      
        


    },
    company: {
        width: WIDTH - 150 - 10,
        height: 70,
        textDecorationLine: 'underline',
        fontStyle: 'italic',
        marginLeft: 5,
        fontSize: 17,
        color: "#60819E"
    },
    title: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        marginTop: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#2E4053',
    },
    headerText1: {
        paddingTop: 5,
        textAlign: 'center',
        fontSize: 18,
        flex:0.8,
        fontWeight: 'bold',
        color: '#60819E',

    },
    headerText2: {
        paddingTop: 5,
        textAlign: 'center',
        fontSize: 18,
        flex:0.3,
        fontWeight: 'bold',
        color: '#60819E',

    },

})
const mapStateToProps = (state) => {

    return {


    }
}
// export default connect(mapStateToProps)(HomeScreen)
