import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';

const Header = styled.View`
    height: 200px;
    background-color: linear-gradient(180deg, #8350E1 0%, #A970EC 100%, rgba(169, 112, 236, 0) 100%, rgba(169, 112, 236, 0) 100%, #A970EC 100%);
`
const SText = styled.Text`
    color: red;
`

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header>
            <SText>Open up App.js to start working on your app!</SText>
        </Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
