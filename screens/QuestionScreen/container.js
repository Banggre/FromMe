import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionScreen from './presenter';
import {  Notifications,AppLoading, Font } from 'expo';

class Container extends React.Component {
    static propTypes = {
        answerCard: PropTypes.array,
        getFeed: PropTypes.func
    };

    state={
        isFetching: false,
        currentMailID: '',
    };

    componentWillMount(){
      this.init();
    };

    render() {
        return (
            <QuestionScreen
                {...this.props}
                {...this.state}
                refresh={this._refresh}
                onEndReached={this._onEndReached}
                keyExtractor={this._keyExtractor}
            />
        );
    }

    init = async( ) => {
                    try{

                      let response = await fetch('http://주소/FetchMyMailCard', {
                          method: 'POST',
                          headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({
                              userCode: this.props.userProfile.userCode, //fetchUserCode 한 내용을 넣어야 함.
                          })
                      });
                      var json = await response.json();

                      // ↓ 답변이 존재하지 않는 경우
                      if(json.length !== 0) {
                          await this.setState({currentMailID: json.slice(-1)[0].mailID});
                      }

                       // → render_2
                      this.props.setAnswerCard(json); // → render_3
                      if(this.state.isFetching === true) {
                          this.setState({isFetching: false }); // → render_3
                      }
                      // console.log(this.state.currentAskCode);\
                    }
                    catch(error){
                      console.log('error_init(HomeScreen)');
                      if(this.state.isFetching === true) {
                          this.setState({isFetching: false });
                      }
                    }
    };

    _onEndReached = async() => {
            let response = await fetch('http://주소/FetchMyMailCard2', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userCode: this.props.userProfile.userCode, //fetchUserCode 한 내용을 넣자
                    currentMailID: this.state.currentMailID,
                })
            })
            var json = await response.json();
            await this.setState({currentMailID: json.slice(-1)[0].mailID}); // → render_1
            this.props.addAnswerCard(json); // → render_2
            // await this.setState({currentAskCode: json[0].askCode});
            // console.log(this.state.currentAskCode);

    };

    _refresh = async () => {
        await this.setState({ isFetching: true });
        this.init();
    };

    _keyExtractor = (item, index) => {
        return item.mailID.toString()
    };

}

export default Container;
