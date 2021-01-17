import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

//Custom button to show information about the recipe
const customButton = props => {
    const content = (
        <View style = {[styles.button, { backgroundColor: props.color }]}>
            <View style = {[styles.top_layer]}>
                <Image source = {{uri: props.source}} style={styles.image}></Image>
                <Text style = {styles.title}>{props.title}</Text>
            </View>
            <Text style = {styles.text}>{props.text}</Text>
        </View>
    )
    return <TouchableOpacity activeOpacity = {0.8} onPress={props.onPress}>{content}</TouchableOpacity>
}


const styles = StyleSheet.create({
    button: {
        padding: 16,
        width: width - 20,
        alignItems: 'center',
        marginBottom: '3%',
        marginTop: '3%',
        flexDirection: 'column',
        borderRadius: 15,
        borderColor: '#DC7633',
        borderWidth: 3,
    },
    top_layer: {
        padding: 16,
        width: width - 20,
        alignItems: 'center',
        marginBottom: '4%',
        marginTop: '4%',
        flexDirection: 'row',
    },
    text: {
        color: 'black',
        fontSize: 20,
    },
    title: {
        color: 'black',
        width: '50%',
        fontSize: 25,
        marginLeft: '4%',
        alignSelf: 'center',
    },
    image: {
        width: width * .4,
        height: height * .15,
        alignSelf: 'center',
        borderRadius: 10
    }
});

export default customButton;
