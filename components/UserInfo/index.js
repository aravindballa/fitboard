import React from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';

const CardWrap = styled.View`
  background-color: white;
  border-radius: 20px;
  box-shadow: 2px 4px 6px black;
  elevation: 6;
  display: flex;
  flex-direction: row;
  padding: 20px;
`

const UserAvatar = styled.View`
  display: flex;
  justify-content: center;
`

const UserDetails = styled.View`
  flex: 1;
`
  
const UserName = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  `
  
const PushupsLabel = styled.Text`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #8350E1;
  margin-top: 30px;
  `
const PushupsValue = styled.Text`
  text-align: center;
  font-size: 56px;
  margin: 0;
  font-weight: 100;
`

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
            <PushupsLabel>PUSHUP</PushupsLabel>
            <PushupsValue>80</PushupsValue>
          </View>
        </UserDetails>
      </CardWrap>
    )
  }
}