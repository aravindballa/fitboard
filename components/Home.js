import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo';

import UserInfo from './UserInfo';
import FriendsInfo from './FriendsInfo';

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <LinearGradient style={{ height: 180 }} colors={['#8350E1', '#A970EC']} />
        <UserInfo />
        <FriendsInfo />
      </View>
    );
  }
}
