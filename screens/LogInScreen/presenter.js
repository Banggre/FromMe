import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class LogInScreen extends React.Component {

    render() {
        // console.log(this.props);
        // console.log(this.state);
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <ImageBackground
                    source={require('../../assets/splash.png')}
                    style={{width: '100%', height: '100%'}} resizeMode={'cover'}>
                    <View style={styles.logo}/>
                    <View style={styles.login}>
                        <TouchableOpacity onPress={this.props.kakaoLogIn}>
                            {/* ↑ parent 컴포넌트의 _handleKakaoLogIn을 child 컴포넌트에게 주니깐,
                            handleKakaoLogIn의 실행이 parent 단에서 돌아가더라! */}
                            <Image
                                source={require('../../assets/images/kakao_login(x4).png')}
                                style={{width: wp('60%'), height: hp('10%')}}
                                resizeMode={'contain'}
                            />
                          </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    login: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

export default LogInScreen;
