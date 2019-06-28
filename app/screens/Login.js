import React,{ Component } from "react";
import {View, Button, ScrollView, StatusBar} from "react-native";
import style from '../shared/CustomStyle';
import CustomText from "../components/CustomText";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default class Login extends Component{
    constructor(){
        super()
        state={
        }
    }
    render(){
        return(
            <ScrollView contentContainerStyle={{ flex: 1, }}>
                    <StatusBar animated backgroundColor={Constants.colors.grey} barStyle="light-content" />
                    <View style={[style.container,{ justifyContent: 'center'}]}>
                        <CustomText text = 'Login' style={style.titleText}></CustomText>
                        <CustomInput placeholder='Enter Username' onTextChanged = {(data)=>{this.setState({username:data,})}}/>
                        <CustomInput placeholder='Enter Password' onTextChanged = {(data)=>{this.setState({password:data,})}}/>
                    
                        <CustomButton title='LOGIN NOW' onButtonPressed={()=>{this.performLogin()}}/>
                    </View>

                </ScrollView>
        )
    }
    
}