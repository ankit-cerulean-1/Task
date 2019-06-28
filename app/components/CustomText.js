
import React, {Component} from 'react';
import { Text,StyleSheet } from "react-native";
import constants from "../shared/Constants";

export default class CustomText extends Component{
    render(){
        return(
            <Text style={[styles.textStyle,this.props.style]}>
                {this.props.text}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    textStyle:{
        fontFamily: constants.fonts.regular,
        
    }
})