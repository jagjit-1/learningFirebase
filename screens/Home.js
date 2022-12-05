import { View, Text, Keyboard, TextInput, TouchableOpacity, FlatList, Pressable, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react';
import { firebaseApp } from '../config';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Home = () => {
    const firestore = getFirestore(firebaseApp)
    const todoRef = collection(firestore, 'todos')
    const [todos, setTodos] = useState([]);
    const [addData, setAddData] = useState('');



    useEffect(() => {
        const todoRef = collection(firestore, 'todos')
        todoRef.onSnapshot(
            querySnapshot => {
                const todos = []
                querySnapshot.forEach((doc) => {
                    const { heading } = doc.data()
                    todos.push({
                        id: doc.id,
                        heading,
                    })
                })
                setTodos(todos)
            }
        )
    }, [])


    const deleteTodo = (todos) => {
        todoRef.doc(todos.id).delete().then(() => {
            alert('deleted')
        }).catch(err => console.log(err))
    }

    const addTodo = async () => {
        if (addData && addData.length > 0) {

            const data = {
                heading: addData
            }
            console.log(data)
            try {
                const res = await addDoc(todoRef, data)
                console.log(res)
            } catch (error) {
                console.log(error)
            }


        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <TextInput
                    placeholder='add a todo'
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(heading) => setAddData(heading)}
                    value={addData}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                />
                <TouchableOpacity onPress={addTodo}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
            <FlatList

                data={todos}
                numColumns={1}
                renderItem={({ item }) => {
                    <View>
                        <Pressable
                            onPress={() => console.log("navigated to details screen")}
                        >
                            <Text>{item.heading[0]}</Text>
                        </Pressable>
                    </View>
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})

export default Home