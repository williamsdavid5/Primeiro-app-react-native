import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hooks/useStorage'
import { PasswordItem } from '../../components/ui/PassordItem'

export default function Passwords() {
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem("@pass")
            setListPasswords(passwords)
        }

        loadPasswords();
    }, [focused])

    async function handleDeletePassword(item) {
        const passwords = removeItem("@pass", item)
        setListPasswords(passwords)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList
                    data={listPasswords}
                    keyExtractor={({ item }) => String(item)}
                    renderItem={({ item }) => <PasswordItem data={item} removePassword={() => handleDeletePassword(item)} />}
                    style={{ flex: 1, paddingTop: 14 }}
                >
                </FlatList>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: "white",
        fontWeight: 'bold'
    },
    header: {
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14
    },
    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14
    }
})