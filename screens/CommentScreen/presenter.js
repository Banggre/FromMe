import React from 'react';
import { Button, ImageBackground, View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Platform, ScrollView, Keyboard } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Header, withNavigation } from 'react-navigation';
import Modal from 'react-native-modal';

class CommentScreen extends React.Component{

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
                  <View style={{flex: 3}}>
                    <Text style={styles.when1}>
                      To. Me
                    </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <TouchableOpacity onPress={this.props.send}>
                      <Text style={styles.when1}>
                        send
                      </Text>
                    </TouchableOpacity>
                  </View>
              </View>
              <View style={styles.contents2}>
                {this.props.time === 0 ?
                  <View style={{flex: 1}}>
                    <TouchableOpacity
                      onPress={this.props.selectTime}>
                      <Text style={styles.when2}>
                        얼마 후의 당신에게 전해드릴까요?
                      </Text>
                    </TouchableOpacity>
                  </View>
                  :<View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View>
                      <Text style={styles.when2}>
                        {this.props.timeletter}
                      </Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={this.props.selectTime}>
                        <Text style={styles.when2}>
                          의 당신에게 전해드릴까요?
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                }
              </View>
              <View style={styles.contents3}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Modal
                      isVisible={this.props.visibleModal}
                      avoidKeyboard={true}
                      onBackdropPress={this.props.closeModal}>
                      <View style={styles.modal}>
                          <TouchableOpacity onPress={this.props.time1} style={styles.timeSelectButton}>
                              <Text style={styles.textButton}>10분 후</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={this.props.time2} style={styles.timeSelectButton}>
                              <Text style={styles.textButton}>30분 후</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={this.props.time3} style={styles.timeSelectButton}>
                              <Text style={styles.textButton}>1시간 후</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={this.props.time4} style={styles.timeSelectButton}>
                              <Text style={styles.textButton}>3시간 후</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={this.props.time5} style={styles.timeSelectButton}>
                              <Text style={styles.textButton}>1일 후</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={this.props.time6} style={styles.timeSelectButton}>
                              <Text style={styles.textButton}>3일 후</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={this.props.time7} style={styles.timeSelectButton}>
                              <Text style={styles.textButton}>1주일 후</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={this.props.time8} style={styles.timeSelectButton}>
                              <Text style={styles.textButton}>3주일 후</Text>
                          </TouchableOpacity>
                      </View>
                  </Modal>
                </View>

                <View>
                  <Modal
                      isVisible={this.props.visibleModal2}
                      avoidKeyboard={true}
                      onBackdropPress={this.props.closeModal2}>
                      <View style={styles.modal2}>
                          <View style={{flex: 1, marginTop: hp('8%')}}>
                            <TouchableOpacity
                              onPress={this.props.share}>
                              <Text style={styles.when3}>
                                To Others
                              </Text>
                            </TouchableOpacity>
                          </View>
                          <View style={{flex: 1}}>
                            <TouchableOpacity
                              onPress={this.props.sendToMe}>
                              <Text style={styles.when3}>
                                To Me
                              </Text>
                            </TouchableOpacity>
                          </View>
                      </View>
                  </Modal>
                </View>


                <ScrollView style={styles.submitContents}>
                    <TextInput
                        style={styles.textInput1}
                        placeholder={'미래의 당신에게 알려주세요.'}
                        returnKeyType={'done'}
                        maxLength={2000}
                        multiline={true}
                        onChangeText={this.props.comment}
                        autoCorrect={false}
                        value={this.props.contents}/>
                </ScrollView>
              </View>

              <View style={styles.contents4}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e8ece5',
    },
    contents0:{
      flex: 2,
      height: hp('2%'),
      width: wp('100%'),
      backgroundColor: '#e8ece5',
    },
    contents1:{
      flex: 6,
      height: hp('6%'),
      width: wp('100%'),
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: hp('4%'),
      backgroundColor: '#e8ece5',
    },
    contents2:{
      flex: 9,
      backgroundColor: '#e8ece5',
      height: hp('9%'),
      width: wp('100%'),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    contents3:{
      flex: 80,
      backgroundColor: '#e8ece5',
      height: hp('80%'),
      width: wp('100%'),
    },
    contents4:{
      flex: 3,
      height: hp('3%'),
      width: wp('100%'),
    },
    modal:{
      flex: 1,
      backgroundColor: '#a0a19d',
      borderRadius: 10,
      borderColor: '#4f5458',
      width: wp('90%'),
      height: hp('90%'),
      justifyContent: 'center',
      alignItems: 'center',
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
    modal2:{
      backgroundColor: '#a0a19d',
      borderRadius: 10,
      borderColor: '#4f5458',
      width: wp('90%'),
      height: hp('30%'),
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
    timeSelectButton:{
      backgroundColor: '#4f5458',
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'rgba(0, 0, 0, 0.1)',
      height: hp('10%'),
      width: wp('80%'),
      marginTop: hp('1%')
    },
    textButton:{
      justifyContent: 'center',
      fontFamily: 'JejuMyeongjo',
      color: 'white',
      fontSize: wp('8%')
    },
    submitContents:{
      flex: 1,
      padding: 15,
      backgroundColor: '#e8ece5'
    },
    textInput1:{
      marginTop: 10,
      fontFamily: 'JejuMyeongjo',
      fontSize: 15,
      color: '#4f5458',
    },
    when: {
        fontFamily: 'JejuMyeongjo',
        color: '#bcb4b2',
        textAlign: 'center',
        fontSize: wp('5%'),
        marginBottom: wp('5%')
    },
    when1: {
        fontFamily: 'JejuMyeongjo',
        color: '#bcb4b2',
        textAlign: 'center',
        fontSize: wp('5%'),
        marginBottom: wp('5%')
    },
    when2: {
        fontFamily: 'JejuMyeongjo',
        color: '#bcb4b2',
        textAlign: 'center',
        fontSize: wp('4%'),
        marginBottom: wp('4%')
    },
    when3: {
        fontFamily: 'JejuMyeongjo',
        color: '#4f5458',
        textAlign: 'center',
        fontSize: wp('7%'),
        marginBottom: wp('7%')
    },
});

export default CommentScreen;
