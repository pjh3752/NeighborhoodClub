import React, {Component} from 'react';
import { 
    Text, 
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';

export default class FooterButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={styles.button}
              onPress={this.props.onPress}>
                <Text style={styles.title}>{this.props.title}</Text>
              </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 47,
        backgroundColor: '#4285F4',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 3,
    },
    title: {
        color: 'white',
        fontSize: 15,
    },
})