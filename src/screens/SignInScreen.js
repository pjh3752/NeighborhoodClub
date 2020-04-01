import React, { Component } from "react";
import { 
  View, 
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import FooterButton from '../components/FooterButton';
import styles from "../../assets/style/Styles";
import { AuthContext } from "../Context";

export const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { signIn } = React.useContext(AuthContext);
    return(
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
                value={email}
                onChangeText={setEmail}
                placeholder="이메일"
                autoCorrect={false}
            />
            <TextInput
                style={styles.textInputButton}
                value={password}
                onChangeText={setPassword}
                placeholder="패스워드"
                autoCorrect={false}
                secureTextEntry={true}
            />
            <View style={{width: 288, alignItems: 'center'}}>
                <FooterButton
                    style={styles.signInButton}
                    title="로그인"
                    onPress={() => signIn()}
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