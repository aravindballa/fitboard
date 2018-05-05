import styled from 'styled-components/native';
import { View, Text } from 'react-native';

export const CardWrap = styled.View`
  background-color: white;
  border-radius: 20px;
  box-shadow: 2px 4px 6px black;
  elevation: 6;
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin: -100px 20px 20px 20px;
`

export const UserAvatar = styled.View`
  display: flex;
  justify-content: center;
`

export const UserDetails = styled.View`
  flex: 1;
`

export const UserName = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  `

export const PushupsLabel = styled.Text`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #8350E1;
  margin-top: 30px;
  `
export const PushupsValue = styled.Text`
  text-align: center;
  font-size: 56px;
  margin: 0;
  font-weight: 100;
`