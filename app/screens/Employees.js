import React,{ Component } from "react";
import {View, Button, ScrollView, StatusBar} from "react-native";
import style from '../shared/CustomStyle';
import CustomText from "../components/CustomText";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default class Employees extends Component{

    render(){
        return(
            <ScrollView contentContainerStyle={{ flex: 1, }}>
                <StatusBar animated backgroundColor={Constants.colors.grey} barStyle="light-content" />
                <View style={[style.container,{ justifyContent: 'center'}]}>
                    <CustomText text = 'Employee List' style={style.titleText}></CustomText>
                    
                </View>
            </ScrollView>
        )
    }
}