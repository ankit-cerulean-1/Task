import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View } from "react-native";
import constants from "../shared/Constants";
import CustomText from './CustomText';

export default class CustomButton extends Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.onButtonPressed} underlayColor="white">
              <View style={[styles.button,this.props.buttonStyle]}>
                <CustomText style={styles.buttonText} text={this.props.title}/>
              </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
      marginTop: constants.dimensions.medium,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: constants.colors.lightgreen,
      borderRadius: constants.dimensions.small,
      
      shadowColor: 'rgba(0,0,0, .4)', // IOS
      shadowOffset: { height: 1, width: 1 }, // IOS
      shadowOpacity: 1, // IOS
      shadowRadius: 1, //IOS
      elevation: 2, // Android
    },
    buttonText: {
      padding: 10,
      color: 'white',
      fontSize: constants.dimensions.xmedium,
    },
   

  });