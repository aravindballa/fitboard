import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo';

import UserInfo from './UserInfo';

const Container = styled.View`
  padding: 0 20px;
  margin-top: -100px;
`

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <LinearGradient
          style={{ height: 200 }}
          colors={['#8350E1', '#A970EC']}
        />
        <Container>
          <UserInfo />
          <Text>Open up App.js to start working on your app!</Text>
        </Container>
      </View>
    );
  }
}
