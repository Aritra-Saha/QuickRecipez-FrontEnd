import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const info = ["Calories", "Total Fat", "Sugar", "Sodium", "Protein", "Saturated Fat", "Carbohydrate"]
const sign = ["", "%", "%", "%", "%", "%", "%"]

// Shows details about recipe including ingredients, steps, and nutrition facts
export default class DetailedRecipes extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const viewStyles = [
      styles.container,
      { backgroundColor: '#faebd7' }
    ];
    const textStyles = {
      color: 'black',
      fontSize: 20,
      width: width * .9,
      textAlign: "left",
      alignSelf: "flex-start",
      marginLeft: width * .05
    };
    const ingStyles = {
      color: 'black',
      fontSize: 20,
      width: width * .9,
      marginLeft: width * .05,
    };
    
    return (
      <ScrollView style={{backgroundColor: '#faebd7'}}>
        <View style={viewStyles}>
          <Text style={styles.nameText}>{this.props.route.params.name}</Text>
          <Image source = {{uri: this.props.route.params.image}} style={styles.image} />
          <Text style={textStyles}>
          {"\n"}<Text style={{fontWeight: "bold", textDecorationLine: "underline", color: "#DC7633"}}>Description</Text> {"\n"}{this.props.route.params.description}{"\n"}
          </Text>
          <Text style={textStyles}>
          <Text style={{fontWeight: "bold", textDecorationLine: "underline", color: "#DC7633"}}>Ingredients</Text>
          </Text>
            {this.props.route.params.ingredients.map((item, i) => (
              <Text key = {i}>
                <View style = {textStyles}>
                  <Text style = {ingStyles}><Text style={{color: "#DC7633", fontWeight: 'bold'}}>{'\u2022' + " "}</Text>{item}</Text>
                </View>
              </Text>
        ))}
          <Text style={textStyles}>
            {"\n"}<Text style={{fontWeight: "bold", textDecorationLine: "underline", color: "#DC7633"}}>Steps</Text>
          </Text>
          {this.props.route.params.steps.map((item, i) => (
              <Text key = {i}>
                <View style = {textStyles}>
                  <Text style = {textStyles}><Text style={{color: "#DC7633"}}>{(i + 1) + ". "}</Text>{item}</Text>
                </View>
              </Text>
        ))}
          <Text style={textStyles}>
            {"\n"}<Text style={{fontWeight: "bold", textDecorationLine: "underline", color: "#DC7633"}}>Nutrition</Text>
          </Text>
          {this.props.route.params.nutrition.map((item, i) => (
            <Text key ={i}>
              <View style = {textStyles}>
                  <Text style = {textStyles}><Text style={{color: "#DC7633"}}>{info[i] + ": "}</Text>{item}{sign[i]}</Text>
                </View>
            </Text>
        ))}
        <Text>{"\n"}</Text>
        <TouchableOpacity
          style={styles.back}
          title = "Go to Camera"
          onPress = {() => this.props.navigation.popToTop()}>
            <Text style={styles.buttonText}>Go to Camera</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    color: '#DC7633',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: "center",
    marginTop: 10
  },
  image: {
    width: width * .7,
    height: height * .3,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10
  },
  back: {
    width: width * .5,
    height: height * .07,
    backgroundColor: '#DC7633',
    borderRadius: 20,
    marginBottom: height * .05,
    justifyContent: "center"

  },
  buttonText: {
    color: "white",
    alignSelf: "center",
    fontSize: 25,
    fontWeight: 'bold'
  }
});