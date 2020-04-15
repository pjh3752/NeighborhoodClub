import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import {HelperText} from 'react-native-paper';

export const CustomHelperText = ({props}) => {
    return (
        <View style={styles.signInContainer}>

            <HelperText
            type="error"
            ref={helperEmail}
            visible={props.visible}
            ></HelperText>
        </View>
    );
}