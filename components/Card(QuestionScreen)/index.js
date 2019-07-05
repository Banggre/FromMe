import React, { Component } from 'react';
import { View, Image, StyleSheet, Platform, Text, TouchableOpacity, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Modal from 'react-native-modal';

class Card extends React.PureComponent {


    componentWillMount(){
      this.when();
    };

    when = () => {
      var before = new Date(this.props.time);
      var now = new Date(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(), new Date().getMinutes()));
      before.setMonth(before.getMonth()+1);
      before.setHours(before.getHours()-9);
      now.setMonth(now.getMonth()+1);
      if(before.getFullYear() != now.getFullYear()){
        this.setState({
          time1: now.getFullYear() - before.getFullYear(),
          time2: '년 전의 Me'
         });
      }else if(before.getMonth() != now.getMonth()){
        this.setState({
          time1: now.getMonth() - before.getMonth(),
          time2: '월 전의 Me'
         });
      }else if(before.getDate() != now.getDate()){
        this.setState({
          time1: now.getDate() - before.getDate(),
          time2: '일 전의 Me'
         });
      }else if(before.getHours() != now.getHours()){
        if(now.getHours() - before.getHours() == 1 && now.getMinutes() < before.getMinutes() ){
          this.setState({
            time1: now.getMinutes() + 60 - before.getMinutes(),
            time2: '분 전의 Me'
           });
        }else{
          this.setState({
            time1: now.getHours() - before.getHours(),
            time2: '시간 전의 Me'
           });
        };
      }else if(before.getMinutes() != now.getMinutes()){
        this.setState({
          time1: now.getMinutes() - before.getMinutes(),
          time2: '분 전의 Me'
         });
      };
      if(before.getFullYear() < now.getFullYear()){
        this.setState({ yet : false });
      }else if(before.getFullYear() == now.getFullYear() && before.getMonth() < now.getMonth()){
        this.setState({ yet : false });
      }else if(before.getFullYear() == now.getFullYear() && before.getMonth() == now.getMonth() && before.getDate() < now.getDate()){
        this.setState({ yet : false });
      }else if(before.getFullYear() == now.getFullYear() && before.getMonth() == now.getMonth() && before.getDate() == now.getDate() && before.getHours() < now.getHours()){
        this.setState({ yet : false });
      }else if(before.getFullYear() == now.getFullYear() && before.getMonth() == now.getMonth() && before.getDate() == now.getDate() && before.getHours() == now.getHours()){
        if(before.getMinutes() < now.getMinutes()){
          this.setState({ yet : false });
        }
      };
    };

    closeModal = () => {
      this.setState({ visibleModal : !this.state.visibleModal });
    };

    read = () => {
      this.setState({ visibleModal : !this.state.visibleModal });
    };

    state={
        time1: '',
        time2: '',
        yet: true,
        visibleModal: false
    };

    render() {
        return(
          <View>
            {this.state.yet ? null
              :
            <TouchableOpacity
              onPress={() => {this.read()}}>
                <View style={styles.container}>
                    <View style={styles.view1}>
                            <Text style={styles.when}>
                              From.
                            </Text>
                            <Text style={styles.when}>
                              {this.state.time1}
                            </Text>
                            <Text style={styles.when}>
                              {this.state.time2}
                            </Text>
                    </View>
                </View>
            </TouchableOpacity>
            }
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Modal
                  isVisible={this.state.visibleModal}
                  avoidKeyboard={true}
                  onBackdropPress={this.closeModal}>
                  <View style={styles.modal}>
                    <ScrollView>
                      <View style={styles.contents}>
                        <Text style={styles.when2}>
                          {this.props.contents}
                        </Text>
                      </View>
                    </ScrollView>
                    {this.props.cheer != 0 || this.props.fighting !=0 ?
                      <View style={styles.like}>
                        <View>
                          <Text style={styles.when1}>
                            토닥토닥{this.props.cheer}
                          </Text>
                        </View>
                        <View>
                          <Text style={styles.when1}>
                            아자아자{this.props.fighting}
                          </Text>
                        </View>
                      </View>
                      :
                      null
                    }
                    <View style={styles.back}>
                      <TouchableOpacity
                        onPress={() => {this.closeModal()}}>
                        <Text style={styles.when}>
                          close
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
              </Modal>
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
        height: hp('10%'),
        flexDirection: 'row',
        justifyContent: 'space-around',
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
        flex: 1,
        width: wp('97%'),
        height: hp('10%'),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    when: {
        fontFamily: 'JejuMyeongjo',
        color: '#bcb4b2',
        textAlign: 'center',
        fontSize: wp('5%'),
        marginBottom: wp('5%')
    },
    modal: {
      backgroundColor: '#e8ece5',
      borderRadius: 10,
      borderColor: '#4f5458',
      width: wp('90%'),
      height: hp('40%'),
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
    contents: {
      width: wp('90%'),
      height: hp('30%'),
      justifyContent: 'center',
      alignItems: 'center',
    },
    like: {
      width: wp('90%'),
      height: hp('4%'),
      justifyContent: 'space-around',
      flexDirection: 'row',
      alignItems: 'center'
    },
    back: {
      width: wp('90%'),
      height: hp('6%'),
      justifyContent: 'center',
      alignItems: 'center',
    },
    when1: {
        fontFamily: 'JejuMyeongjo',
        color: '#bcb4b2',
        textAlign: 'center',
        fontSize: wp('3%'),
        marginBottom: wp('3%')
    },
    when2: {
        fontFamily: 'JejuMyeongjo',
        color: '#4f5458',
        textAlign: 'center',
        fontSize: wp('5%'),
        marginBottom: wp('3%')
    },
});

export default withNavigation(Card);
