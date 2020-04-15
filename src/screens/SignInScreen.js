import React, { Component } from "react";
import { 
  View, 
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import {TextInput, HelperText} from "react-native-paper";
import FooterButton from '../components/FooterButton';
import styles from "../../assets/style/Styles";
import { AuthContext } from "../Context";

export const SignInScreen = ({ navigation }) => {
    const { signIn } = React.useContext(AuthContext);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [emailErrorMsg, setEmailErrorMsg] = React.useState('');
    const [passwordErrorMsg, setPasswordErrorMsg] = React.useState('');
    const emailRegExp = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
    let isValidation = true;
    
    const textValidation = ()=> {
        if(email === ''){
            setEmailErrorMsg('Email을 입력해주세요.');
            isValidation = false;
        }else if(!emailRegExp.test(email)){
            setEmailErrorMsg('Email형식에 맞지 않습니다.');
            isValidation = false;
        }
        if(password === ''){
            setPasswordErrorMsg('Password를 입력해주세요.');
            isValidation = false;
        }
        if(isValidation) signIn();
    }

    return (
        <View style={styles.signInContainer}>
            <Image
                style={styles.icon}
                source={require('../../assets/img/icon96.png')}
            />
            <Text style={styles.welcomText}>
                환영합니다
            </Text>
            <TextInput
                style={styles.textInputButton}
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCorrect={false}
            />
            <HelperText
                type="error"
                visible={email && emailRegExp.test(email) ? false : true}
            >
                {emailErrorMsg}
            </HelperText>
            <TextInput
                style={styles.textInputButton}
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCorrect={false}
                secureTextEntry={true}
            />
            <HelperText
                type="error"
                visible={password ? false : true}
            >
                {passwordErrorMsg}
            </HelperText>
            <View style={{width: 288, alignItems: 'center'}}>
                <FooterButton
                    style={styles.signInButton}
                    title="로그인"
                    onPress={() => textValidation()}
                />
            </View>
            <Text style={styles.noAccountText}>계정이 없으신가요?</Text>
            <TouchableOpacity
                onPress={() => navigation.push('CreateAccount')}
            >
                <Text 
                    style={styles.makeAccountText}
                >계정 만들기
                </Text>
            </TouchableOpacity>
        </View>
    );
  }