import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentScreen from "./presenter";
import { Notifications, Permissions } from "expo";
import { Keyboard } from 'react-native';

class Container extends Component {

    askPermissions = async () => {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        return false;
      }
      return true;
    };

    scheduleNotification = async () => {
      let notificationId = Notifications.scheduleLocalNotificationAsync(
        {
          title: "From.Me",
          body: "과거로부터 편지가 도착했습니다."
        },
        {
          repeat: "year",
          time: new Date().getTime() + this.state.time
        }
      );
    };

    state={
        commentContents: '',
        visibleModal: false,
        visibleModal2: false,
        contents: '',
        time: 0,
        timeletter: '',
        now : ''
    };

    render() {
        return (
          <CommentScreen
            {...this.props}
            {...this.state}
            send={this._send}
            comment={this._comment}
            selectTime={this._selectTime}
            closeModal={this._closeModal}
            closeModal2={this._closeModal2}
            sendToMe={this._sendToMe}
            share={this._share}
            time1={this._time1}
            time2={this._time2}
            time3={this._time3}
            time4={this._time4}
            time5={this._time5}
            time6={this._time6}
            time7={this._time7}
            time8={this._time8}
            />
        );
    }

    _send = () => {
      Keyboard.dismiss;
      if(this.state.now != 0){
        this.state.now.setHours(this.state.now.getHours()+9);
      }
      if(this.state.contents == ''){
        this.setState({
          contents : '(공백)'
        });
      }
      this.setState({
        visibleModal2 : !this.state.visibleModal2,
      });
    };

    _selectTime = () => {
      Keyboard.dismiss;
      this.askPermissions();
      this.setState({
        visibleModal : !this.state.visibleModal,
        now : new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(), new Date().getMinutes())
      });
    };

    _comment = (text) => {
      this.setState({ contents: text });
    };

    _closeModal = () => {
      this.setState({ visibleModal : !this.state.visibleModal });
    };

    _closeModal2 = () => {
      this.setState({ visibleModal2 : !this.state.visibleModal2 });
    };

    _sendToMe = () => {
        this.scheduleNotification()
        .then(data => {
          let response = fetch('http://주소/mail',{
                  method: 'POST',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    userCode: this.props.userProfile.userCode,
                    contents: this.state.contents,
                    share: 0,
                    time: this.state.now,
                    timeletter: this.state.timeletter
                  })
          });
        });
        this.setState({ visibleModal2 : !this.state.visibleModal2 });
        this.props.navigation.goBack();
        Keyboard.dismiss;
    };

    _share = () => {
        this.scheduleNotification()
        .then(data => {
          let response = fetch('http://주소/mail',{
                  method: 'POST',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    userCode: this.props.userProfile.userCode,
                    contents: this.state.contents,
                    share: 1,
                    time: this.state.now,
                    timeletter: this.state.timeletter
                  })
          });

        });
        this.setState({ visibleModal2 : !this.state.visibleModal2 });
        this.props.navigation.goBack();
        Keyboard.dismiss;
    };

    _time1 = () => {
      this.state.now.setMinutes(this.state.now.getMinutes()+10);
      this.setState({
        time: 600000,
        timeletter: '10분 후',
        visibleModal : !this.state.visibleModal,
        now: this.state.now
      });
    };

    _time2 = () => {
      this.state.now.setMinutes(this.state.now.getMinutes()+30);
      this.setState({
        time: 1800000,
        timeletter: '30분 후',
        visibleModal : !this.state.visibleModal,
      });
    };

    _time3 = () => {
      this.state.now.setHours(this.state.now.getHours()+1);
      this.setState({
        time: 3600000,
        timeletter: '1시간 후',
        visibleModal : !this.state.visibleModal,
      });
    };

    _time4 = () => {
      this.state.now.setHours(this.state.now.getHours()+3);
      this.setState({
        time: 10800000,
        timeletter: '3시간 후',
        visibleModal : !this.state.visibleModal,
      });
    };

    _time5 = () => {
      this.state.now.setDate(this.state.now.getDate()+1);
      this.setState({
        time: 86400000,
        timeletter: '1일 후',
        visibleModal : !this.state.visibleModal,
       });
    };

    _time6 = () => {
      this.state.now.setDate(this.state.now.getDate()+3);
      this.setState({
        time: 259200000,
        timeletter: '3일 후',
        visibleModal : !this.state.visibleModal,
       });
    };

    _time7 = () => {
      this.state.now.setDate(this.state.now.getDate()+7);
      this.setState({
        time: 604800000,
        timeletter: '1주일 후',
        visibleModal : !this.state.visibleModal,
       });
    };

    _time8 = () => {
      this.state.now.setDate(this.state.now.getDate()+21);
      this.setState({
        time: 1814400000,
        timeletter: '3주일 후',
        visibleModal : !this.state.visibleModal,
      });
    };
}

export default Container;
