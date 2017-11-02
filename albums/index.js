//place code here fore iOS
//import library to helpp craete compoennet
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// create component be careful it can only have ONE element
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

//render to device
AppRegistry.registerComponent('albums', () => App);
