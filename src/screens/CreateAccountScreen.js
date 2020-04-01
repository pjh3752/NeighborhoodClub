import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Button,
    Image,
} from "react-native";
import FooterButton from '../components/FooterButton';
import styles from "../../assets/style/Styles";
import { AuthContext } from "../Context";

export const CreateAccountScreen = () => {
    const { signUp } = React.useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text>Create Account Screen</Text>
            <Button title="Sign Up" onPress={() => signUp()} />
        </View>
    );
}