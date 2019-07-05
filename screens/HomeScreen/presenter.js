import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Easing, FlatList, Platform} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
/* ↑ yarn add(sudo npm install --save) react-native-modal: @7.0.2 */
import { Header } from 'react-navigation';

class HomeScreen extends React.Component {

    render(){

        return(
            <View style={styles.container}>
              <View style={styles.contents0}/>
              <View style={styles.contents1}>
                  <View style={{flex: 1}}>
                    <Text style={styles.when1}>
                      From.Me
                    </Text>
                  </View>
              </View>
              <View style={styles.contents2}>
                <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('Comment');}} >
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                          source={require('../../assets/images/tome.png')}
                          style={{width: wp('23%') , height: wp('23%')}}
                        />
                        <Text style={{ fontFamily: 'JejuMyeongjo', color: '#bcb4b2', fontSize: wp('5%'), textAlign: 'center', marginTop: hp('2%')}}>
                          To Me
                        </Text>
                    </View>
                </TouchableOpacity>
              </View>
              <View style={styles.contents3}>
                <View style={styles.contents4}>
                  <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('Question');}} >
                      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                          <Image
                            source={require('../../assets/images/post.png')}
                            style={{width: wp('23%') , height: wp('23%')}}
                          />
                          <Text style={{ fontFamily: 'JejuMyeongjo', color: '#bcb4b2', fontSize: wp('5%'), textAlign: 'center', marginTop: hp('2%')}}>
                            From Me
                          </Text>
                      </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.contents4}>
                  <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('Question2');}} >
                      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                          <Image
                            source={require('../../assets/images/share.png')}
                            style={{width: wp('23%') , height: wp('23%')}}
                            />
                          <Text style={{ fontFamily: 'JejuMyeongjo', color: '#bcb4b2', fontSize: wp('5%'), textAlign: 'center', marginTop: hp('2%')}}>
                            From Others
                          </Text>
                      </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8ece5',
    },
    contents0:{
        flex: 2,
        height: hp('2%'),
        width: wp('100%'),
    },
    contents1:{
        flex: 6,
        height: hp('6%'),
        width: wp('100%'),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: hp('4%'),
    },
    contents2: {
        flex: 46,
        height: hp('46%'),
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    contents3: {
        flex: 46,
        height: hp('46%'),
        width: wp('100%'),
        flexDirection: 'row',
    },
    contents4:{
        flex: 1,
        height: hp('46%'),
        width: wp('50%'),
        alignItems: 'center',
    },
    button:{
        height: hp('30%'),
        width: wp('30%'),
    },
    when1: {
        fontFamily: 'JejuMyeongjo',
        color: '#bcb4b2',
        textAlign: 'center',
        fontSize: wp('5%'),
        marginBottom: wp('5%')
    },
});

export default HomeScreen;
