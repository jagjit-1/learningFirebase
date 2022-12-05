import { View, Text, Button } from 'react-native'
import React from 'react'

const Authentication = ({ navigation }) => {
    return (
        <View>
            <View>
                <Button onPress={() => navigation.navigate("Login")} title='Login' />
                <Button onPress={() => navigation.navigate("SignUp")} title='Sign up' />
            </View>
        </View>
    )
}

export default Authentication