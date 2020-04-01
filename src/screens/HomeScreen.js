import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
} from "react-native";
import FooterButton from '../components/FooterButton';
import styles from "../../assets/style/Styles";

export const HomeScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text>카테고리</Text>
        <TouchableOpacity
            title="축구"
            onPress={() => navigation.push("Details", { name: "축구" })}
        />
        <TouchableOpacity
            title="야구"
            onPress={() =>navigation.push("Details", { name: "야구" })}
        />
        <FlatList
          data={[
            {key: '축구'},
            {key: '야구'},
            {key: '농구'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
    </View>
)