import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react';
import auth from '../config';
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handlePress = () => {
        signInWithEmailAndPassword(auth, email, password).then((res) => {
            console.log(res)
            console.log("signed in !!!")
        })
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', marginLeft: 50, marginRight: 50 }}>
            <View style={{ paddingBottom: 30 }}>
                <Text>Email</Text>
                <TextInput value={email} onChangeText={text => setEmail(text)} style={{ padding: 0, borderColor: 'lightblue', borderWidth: 2 }} />
            </View>
            <View style={{ paddingBottom: 30 }}>
                <Text>Password</Text>
                <TextInput value={password} onChangeText={text => setPassword(text)} style={{ padding: 0, borderColor: 'lightblue', borderWidth: 2 }} />
            </View>
            <View>
                <Button onPress={handlePress} title='Login' />
            </View>

        </View>
    )
}

export default Login