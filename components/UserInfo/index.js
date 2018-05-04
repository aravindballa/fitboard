import React from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';
import {Avatar} from 'react-native-elements';

import {
  CardWrap,
  UserAvatar,
  UserDetails,
  UserName,
  PushupsLabel,
  PushupsValue
} from './styles'
export default class UserInfo extends React.Component {
  state = {
    username: 'Aravind Balla',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
    pushups: 0
  }

  render() {
    return (
      <CardWrap>
        <UserAvatar>
          <Avatar
            large
            rounded
            source={{
              uri: this.state.avatarUrl
            }}
          />
        </UserAvatar>
        <UserDetails>
          <UserName>{this.state.username}</UserName>
          <View>
            <PushupsLabel>PUSHUPS</PushupsLabel>
            <PushupsValue>80</PushupsValue>
          </View>
        </UserDetails>
      </CardWrap>
    )
  }
}