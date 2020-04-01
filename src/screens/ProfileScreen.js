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

export const ProfileScreen = () => {
    const { signOut } = React.useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Button title="로그아웃" onPress={() => signOut()} />
        </View>
    );
}