import React, { Component } from 'react';
import { View, Image, StyleSheet, Platform, Text, TouchableOpacity, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Card extends React.PureComponent {

  push1 = () => {
    this.setState({ button1: false });
    let response = fetch('http://주소/push',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              mailID: this.props.mailID
            })
    });
  };

  push2 = () => {
    this.setState({ button2: false });
    let response = fetch('http://주소/push2',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              mailID: this.props.mailID
            })
    });
  };

    state={
        button1: true,
        button2: true
    };

    render() {
        return(
            <View style={styles.container}>
                    <View style={styles.view1}>
                      <View>
                        <Text style={styles.when}>
                          {this.props.timeletter}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.when}>
                          의 Me에게
                        </Text>
                      </View>
                    </View>

                    <ScrollView>
                      <View style={styles.view2}>
                        <Text style={styles.contents}>
                          {this.props.contents}
                        </Text>
                      </View>
                    </ScrollView>

                    <View style={styles.view3}>
                      <TouchableOpacity onPress={() => {this.push1();}}>
                        <Text style={this.state.button1 ? styles.button1 : styles.button11}> 토닥토닥 </Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => {this.push2();}}>
                        <Text style={this.state.button2 ? styles.button2 : styles.button22}> 아자아자 </Text>
                      </TouchableOpacity>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e8ece5',
        borderRadius: 10,
        borderColor: '#4f5458',
        width: wp('97%'),
        height: hp('42%'),
        justifyContent: 'center',
        marginTop: hp('3%'),
        // ↑ 카드(card)의 아래 테두리선(borderBottom)이 보이도록 marginTop을 설정
        ...Platform.select({
            ios: {
                shadowColor:"rgb(50, 50, 50)",
                shadowOpacity: 0.3,
                shadowRadius: 5,
                shadowOffset:{
                    height: 3,
                    width: 2
                }
            },
            android: {
                elevation: 2
            }
        })
    },
    view1: {
        width: wp('97%'),
        height: hp('7%'),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: hp('1%')
    },
    when: {
        fontFamily: 'JejuMyeongjo',
        color: '#a4a5a0',
        textAlign: 'center',
        fontSize: wp('6%'),
        marginBottom: wp('6%')
    },
    view2: {
        width: wp('97%'),
        height: hp('29%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    contents: {
        fontFamily: 'JejuMyeongjo',
        color: '#4f5458',
        textAlign: 'center',
        fontSize: wp('5%'),
        marginBottom: wp('5%'),
        textAlign: 'center'
    },
    view3:{
        width: wp('97%'),
        height: hp('6%'),
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button1: {
      fontFamily: 'JejuMyeongjo',
      color: '#b3c5cf',
      fontSize: wp('5%'),
      marginBottom: wp('5%'),
      textAlign: 'center',
    },
    button11: {
      fontFamily: 'JejuMyeongjo',
      color: '#6a7b8b',
      fontSize: wp('5%'),
      marginBottom: wp('5%'),
      textAlign: 'center',
    },
    button2: {
      fontFamily: 'JejuMyeongjo',
      color: '#b3c5cf',
      fontSize: wp('5%'),
      marginBottom: wp('5%'),
      textAlign: 'center',
    },
    button22: {
      fontFamily: 'JejuMyeongjo',
      color: '#6a7b8b',
      fontSize: wp('5%'),
      marginBottom: wp('5%'),
      textAlign: 'center',
    },
});

export default withNavigation(Card);
