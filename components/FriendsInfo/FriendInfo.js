import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';
import {Avatar} from 'react-native-elements';

const Wrap = styled.View`
  padding: 15px 20px;
  display: flex;
  flex-direction: row;
  border-color: #d4d4d4;
  border-top-width: 1px;
`

const FriendName = styled.Text`
  flex: 1;
  padding: 5px;
  font-size: 20px;
  margin-left: 18px;
  text-align-vertical: center;
`

const FriendScore = styled.Text`
  width: 80px;
  font-size: 36px;
  text-align-vertical: center;
  text-align: right;
`

export default class FriendInfo extends React.Component {
    render() {
      const {username, avatarUrl, score} = this.props;

      return (
        <TouchableHighlight onPress={() => {}} underlayColor="#eee">
          <Wrap>
            <Avatar
              medium
              rounded
              source={{
                uri: avatarUrl
              }}
            />
            <FriendName>{username}</FriendName>
            <FriendScore>{score}</FriendScore>
          </Wrap>
        </TouchableHighlight>
      );
    }
  }