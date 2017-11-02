import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
       // console.log('compoememt will mount in AlbulList');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
          //  response => console.log(response)
    }

    renderAlbums() {
       return this.state.albums.map(album => 
       <AlbumDetail key={album.title} album={album} /> 
       // I can call the prop as I want , like record insead of album
        );
    }
    
    render() {
        console.log(this.state);

       return (
             <ScrollView> 
                {this.renderAlbums()} 
             </ScrollView>
       ); 
    }
}

export default AlbumList;
