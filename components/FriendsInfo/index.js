import React from 'react';
import { View } from 'react-native';

import FriendInfo from './FriendInfo';

export default class FriendsInfo extends React.Component {
    render() {
        return (
            <View>
                <FriendInfo
                    username="Krishna Teja"
                    avatarUrl="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                    score="100"
                />
                <FriendInfo
                    username="Lokesh"
                    avatarUrl="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                    score="75"
                />
                <FriendInfo
                    username="Raghava"
                    avatarUrl="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                    score="1"
                />
            </View>
        );
    }
}