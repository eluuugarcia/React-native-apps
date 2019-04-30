//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Final extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                title="Sumar"
                onPress={this.props.sumar}
                />
                <Button
                title="Restar"
                onPress={this.props.restar}
                />
    
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4285f4',
    },
});

//make this component available to the app
export default Final;
