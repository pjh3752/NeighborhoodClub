import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    signInContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    icon: {
        width: 60,
        height: 60,
        marginBottom: 3,
    },
    iconText: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 70,
    },
    welcomText: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 23,
    },
    textInputButton: {
        width: 288,
        height: 50,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderWidth: 0.3,
        borderRadius: 2,
        paddingVertical: 10,
    },
    signInButton: {
        width: '110%',
        height: 50,
    },
    noAccountText: {
        marginTop: 30,
        fontSize: 12,
        color: '#5B5A5A',
    },
    makeAccountText: {
        fontSize: 12,
        color: '#9013FE',
    }

});

