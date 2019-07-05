import React from 'react';
import { Button,ImageBackground, View, Text, Image, StyleSheet, TouchableOpacity, Easing, FlatList, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Card from '../../components/Card(QuestionScreen)';
import { withNavigation } from 'react-navigation';

class QuestionScreen extends React.Component{

  render() {
      return(
          <View style={styles.container}>
            <View style={styles.contents0}></View>
            <View style={styles.contents1}>
              <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home');}}>
                  <Text style={styles.when1}>
                    back
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.when1}>
                  From. Me
                </Text>
              </View>
              <View style={{flex: 1}}/>
            </View>

            <View style={styles.contents2}>
                <FlatList
                    data={this.props.answerCard}
                    renderItem={({item}) => {
                        return(<Card {...item}/>);
                    }}
                    refreshing={this.props.isFetching}
                    onRefresh={this.props.refresh}
                    onEndReachedThreshold={1}
                    onEndReached={this.props.onEndReached}
                    keyExtractor={this.props.keyExtractor}
                    contentContainerStyle={{alignItems: 'center'}}
                />
            </View>
            <View style={styles.contents3}></View>

          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a0a19d',
    justifyContent: 'center',
    alignItems: 'center'
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
    marginTop: hp('4%')
  },
  contents2:{
    flex: 89,
    height: hp('89%'),
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  contents3:{
    flex: 3,
    height: hp('3%'),
    width: wp('100%'),
  },
  when1: {
      fontFamily: 'JejuMyeongjo',
      color: '#e8ece5',
      textAlign: 'center',
      fontSize: wp('5%'),
      marginBottom: wp('5%')
  },
  when: {
      fontFamily: 'JejuMyeongjo',
      color: '#bcb4b2',
      textAlign: 'center',
      fontSize: wp('5%'),
      marginBottom: wp('5%')
  },
});

export default QuestionScreen;
