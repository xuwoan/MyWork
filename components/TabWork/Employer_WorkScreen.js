
import React, { Component } from 'react';
import {
    Animated,
    Platform,
    View,
    Text,
    StatusBar,
    Image, TouchableOpacity,
    StyleSheet, ListView, ScrollView
} from 'react-native';
// import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { Container, Icon, Button, Header, Body, Title, Left, Right, Content } from 'native-base';
import Dimensions from 'Dimensions';// lấy thông tin thiết bị
const { width } = Dimensions.get('window')
import  AppConstants  from '../../constants/application.constants';
var workdata = require('../../data/data1.json')
const HEADER_MAX_HEIGHT = 40;

const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT;
export default class Employer_WorkScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

            scrollY: new Animated.Value(0),

            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
        };
        this.onScroll = this.onScroll.bind(this);
        this.gotoFilter = this.gotoFilter.bind(this);
        this.gotoQuickFilter = this.gotoQuickFilter.bind(this);
        this.gotoDetailRecruitment= this.gotoDetailRecruitment.bind(this)
        this.gotoDefault= this.gotoDefault.bind(this)
        this.offset = 0;
    }
   

    
    renderScrollViewContent() {

        return (
            <View style={{ marginTop: 45, margin: 1 }}>
                <ListView dataSource={this.state.dataSource.cloneWithRows(this.props.listrecruiment)}
                    contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
                    renderRow={(row) =>
                        <TouchableOpacity onPress={()=>this.gotoDetailRecruitment(row)}>

                            <View style={styles.container1}>

                                <Image source={{ uri: AppConstants.URL+row.image}} style={styles.photo} resizeMode='stretch' />
                                <View style={styles.columcon}>

                                   <Text style={styles.text1} numberOfLines={3}>{row.title}</Text>
                                    <Text style={styles.text2} numberOfLines={1}>{row.companyname} </Text>
                                     {/*<Text style={styles.text3} ><Text style={styles.text4} >Công Việc :</Text> {row.Work}</Text>
                                    <Text style={styles.text3} numberOfLines={1}><Text style={styles.text4} >Lương :</Text> {row.Minsalary}-{row.Maxsalary} $</Text>*/}
                                    <View style={{ flexDirection: 'row', paddingLeft: 15, marginRight: 5, }}>
                                        <Image style={{ resizeMode: 'stretch', height: 17, width: 17,marginTop:1,marginBottom:1 }} source={require('../../images/job_icon.png')}></Image>
                                        <Text style={{ paddingLeft: 5, marginRight: 5, fontSize: 12,width:width/2-50 }} numberOfLines={1} ><Text style={{ marginRight: 5, fontSize: 12, fontWeight: 'bold' }}>:</Text>{row.job}</Text>

                                    </View>
                                
                                   
                                </View>

                            </View>

                        </TouchableOpacity>
                    }
                >
                </ListView>
            </View>
        );
    }
    onScroll(event) {
        var currentOffset = event.nativeEvent.contentOffset.y;
        var direction = currentOffset > this.offset ? null : event.nativeEvent.contentOffset.y = this.state.scrollY + this.offset;
        this.offset = currentOffset;
        console.log(direction);
    }
    gotoFilter() {
        Actions.filter_screen();
    }
    gotoQuickFilter()
    {
        Actions.quickfilter_screen({typeuser:2});
    }
    gotoDetailRecruitment(info)
    {
        this.props.fetchdetailRecruiment({id:info.id})
        Actions.tab_emdetailjob();
    }
    render() {
        const headerTranslate = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -HEADER_SCROLL_DISTANCE],
            extrapolate: 'clamp',
        });





        return (

           
            <Container>
                
                {/*<Content style={{ backgroundColor: '#EDD4AC' }}>*/}

                <View style={{ flex: 1, backgroundColor: '#FDFEFE' }}>

                    <Animated.ScrollView
                        style={styles.fill}
                        scrollEventThrottle={1}

                    >

                        {this.renderScrollViewContent()}

                    </Animated.ScrollView>
                    <Animated.View
                        style={[
                            styles.header,
                            { transform: [{ translateY: headerTranslate }] },
                        ]}
                    >
                        <TouchableOpacity style={{ margin: 5, flex: 0.5 }} onPress={this.gotoQuickFilter}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                                <Image source={require('../../images/find_icon.png')} style={{ width: 22, height: 22, marginTop: 3 }} />
                                <Text style={{ fontSize: 14, color: "#2E4053", margin: 4 }}>TÌM NHANH </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ margin: 5, flex: 0.5 }} onPress={this.gotoFilter}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                                <Image source={require('../../images/filter_icon.png')} style={{ width: 22, height: 22, marginTop: 3 }} />
                                <Text style={{ fontSize: 14, color: "#2E4053", margin: 4 }}>LỌC</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ margin: 5, flex: 0.5 }} onPress={this.gotoDefault}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../images/reset_icon.png')} style={{ width: 22, height: 22, marginTop: 3 }} />
                                <Text style={{ fontSize: 14, color: "#2E4053", margin: 4 }}>MẶC ĐỊNH</Text>
                            </View>
                        </TouchableOpacity>

                    </Animated.View>
                    <View style={{ height: 50 }} />

                </View>

            </Container>

        )
    }
    componentDidMount() {
      
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(workdata)

        })
    }


}
function News(title, image, company, work, minsalary, maxsalary, department, address,deadline) {
    this.Title = title;
    this.Image = image;
    this.Company = company;
    this.Work = work;
    this.Maxsalary = maxsalary;
    this.Minsalary = minsalary;
    this.Department = department;
    this.Address = address;
    this.Deadline = deadline;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffcb05',
    },
    image: {
        width,
        backgroundColor: 'transparent',

    },
    photo: {
        marginTop: 2,
        height: 75,
        width: 135,
        resizeMode:'stretch'
    },
    columcon: {
        flex: 1,
        marginLeft:5,
        flexDirection: 'column',

    },
    container1: {
        // flex: 0.5,
        margin: 2, width: width / 2 - 6,
        borderRadius: 0,
        borderColor: "#2E4053",
        borderWidth: 0.5,
        height: 172,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'


    },
    text1: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        marginTop: 4,
        height:47,
        width:width/2-20,
        fontWeight: 'bold',
        fontSize: 13,
        color: '#2E4053',

    }
    ,
    text2: {
        paddingLeft: 15,
        fontStyle: 'italic',
        marginRight: 5,
        fontSize: 13,
        color: "#60819E"

        //  textAlign: 'right',
        //  position: 'absolute',
        // right: 0,
    }
    ,
    text3: {
        paddingLeft: 15,

        marginRight: 5,
        fontSize: 12,
        //  textAlign: 'right',
        //  position: 'absolute',
        // right: 0,
    },
    text4: {
        paddingLeft: 15,

        marginRight: 5,
        fontSize: 12,
        fontWeight: "bold",
        color: "#3D3D3D"
        //  textAlign: 'right',
        //  position: 'absolute',
        // right: 0,
    },
    slide: {
        height: 250,
        width: 500,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    wrapper: {
    },
    fill: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    header: {
        position: 'absolute',

        left: 0,
        right: 0,
        flexDirection: 'row',
        borderTopColor: "white",
        borderRightColor: "white",
        borderLeftColor: "white",

        backgroundColor: 'white',
        borderBottomColor: "#2E4053",

        borderWidth: 0.5,
        // overflow: 'hidden',
        height: HEADER_MAX_HEIGHT+5,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
    },
    bar: {
        backgroundColor: 'transparent',
        marginTop: Platform.OS === 'ios' ? 28 : 38,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    title: {
        color: 'white',
        fontSize: 18,
    },
    scrollViewContent: {
        marginTop: HEADER_MAX_HEIGHT,
    },
    row: {
        height: 40,
        margin: 16,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
    },

})
const mapStateToProps = (state) => {

    return {


    }
}
