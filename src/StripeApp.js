import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';





const StripeApp = () => {
    return (
        <View style={styles.container}>
            <TextInput
                autoCapitalize='none'

            />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }

})




export default StripeApp;
