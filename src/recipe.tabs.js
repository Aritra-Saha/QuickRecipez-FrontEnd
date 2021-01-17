import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import CustomButton from './customButton';
var Output;

// ScrollView of custom buttons that each have information for each recipe
// including a title, description, and preparation time
export default class RecipeTabs extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const viewStyles = [
      styles.container,
      { backgroundColor: 'white', }
    ];
    const textStyles = {
      color: 'white',
      fontSize: 40
    };
    const titleStyles = {
      color: 'white',
      fontSize: 60
    };
     const { file } = this.props.route.params;
     console.log(file);
     Output = file;
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={viewStyles}>
            <Text style={textStyles}>
	            {Output.map((item, i) => (
		            <Text key={i}>
                  <CustomButton
                    source = {item.Image}
                    title = {item.Name + "\n"}
                    text = {"Prep Time: " + item.Minutes + " minutes"} 
                    color = '#faebd7' 
                    onPress = {() => this.props.navigation.navigate('Details', {
                      name: item.Name,
                      nutrition: item.Nutrition,
                      ingredients: item.Ingrediants,
                      steps: item.Steps,
                      description: item.Description,
                      image: item.Image
                    })}
                  />
		            </Text>
              ))}
	        </Text>
        </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
});