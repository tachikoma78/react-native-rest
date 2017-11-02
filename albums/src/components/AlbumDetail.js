import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, 
            artist, 
            thumbnail_image,
            image,
            url 
           } = album;
    const { infoContentStyle, 
        thumbNailStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle } = styles;
    
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbNailStyle} 
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={infoContentStyle}>
                    <Text style={headerTextStyle}> {title} </Text>
                    <Text> {artist} </Text>
                </View>            
            </CardSection>

            <CardSection>
                <Image 
                    style={imageStyle} 
                    source={{ uri: image }} 
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    <Text>Buy album</Text>
                </Button>
            </CardSection>
        </Card>

    );
};

const styles = {
    infoContentStyle: {
         flexDirection: 'column',
         justifyContent: 'space-around'
    },
    headerTextStyle: {
         fontSize: 18
    },
    thumbNailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1, // trick to have the image covering full width
        width: 0
    }
};

export default AlbumDetail;

