import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import FooterButton from '../components/FooterButton';
import styles from "../../assets/style/Styles";

export const MainScreen = ({ navigation }) => (
    <View style={styles.container}>
        <View style={{ width: '100%', height: '25%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, justifyContent: 'center' }}>메인배너</Text>
        </View>
        <FooterButton
            style={styles.signInButton}
            title="로그인"
            onPress={() => navigation.navigate('Login')}
        />
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
)