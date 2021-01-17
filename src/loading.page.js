import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Dimensions } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { CameraType } from 'expo-camera';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class LoadingPage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const viewStyles = [
      styles.container,
      { backgroundColor: 'orange' }
    ];
    const textStyles = {
      color: 'white',
      fontSize: 40
    };

    const styles2 = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 50,
      },
    });

    const { picture } = this.props.route.params;
    console.log(picture.uri);
    const data = new FormData();
    data.append('image', {uri: picture.uri, name: 'food.jpg', type: 'image/jpg'});
    console.log(data)
    let response = fetch('https://quickrecipez.uc.r.appspot.com/addpic', {
      method: 'POST',
      headers: {
        'Content-Type' : 'multipart/form-data', 
      },
      body: data
    }).then(response => response.json())
    .then (response => {
      console.log("Success",response);
      this.props.navigation.navigate('Recipes', {file: response});
      }).catch(error => {
        console.log("Error", error);
      });


    return (
      <View style={[styles.container, styles2.horizontal]}>          
        <Text>SnapRecipez</Text>
      </View>,
      <View style={[styles.container, styles2.horizontal]}>
        <ActivityIndicator size="large" color="#DC7633" />
      </View>
    );
    /*
    if(!this.state.done){
      return (
        <View style={[styles.container, styles2.horizontal]}>          
          <Text>SnapRecipez</Text>
        </View>,
        <View style={[styles.container, styles2.horizontal]}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      );
    }
    

    if(this.state.done){
      return(
        <RecipeTabs data={file}></RecipeTabs>
      )
    }
    */
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faebd7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
});