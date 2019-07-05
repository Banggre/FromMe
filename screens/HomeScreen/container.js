import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeScreen from './presenter';

class Container extends React.Component {
    /*static propTypes = {
        userInfo: PropTypes.object.isRequired,
        userProfile: PropTypes.object.isRequired,
        askCard: PropTypes.array.isRequired,
        setAskCard: PropTypes.func.isRequired,
        addAskCard: PropTypes.func.isRequired,
        setLogOut: PropTypes.func.isRequired
    };*/

    state = {
        isFetching: false,
        visibleModal: false, //for modal screen(for asking)
        askContents: '',
        curTime: '',
        currentAskCode: ''
    };

    /* ↓ 활용해서 코드 수정할 것 고려 必
    componentWillReceiveProps = (nextProps) => {
        if(nextProps.feed) {
            this.setState({
                isFetching: false
            });
        }
    }; */

    render() {
        console.log('container render(HomeScreen)');

        return (
            <HomeScreen
                {...this.props}
                {...this.state}

            />
        );
    }

}

export default Container;
