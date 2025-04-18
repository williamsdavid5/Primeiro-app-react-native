import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                title: '',
                headerShown: false,
                tabBarIcon: () => <Entypo name="home" size={24} color="black" />
            }} />

            <Tabs.Screen name="passwords" options={{
                title: '',
                headerShown: false,
                tabBarIcon: () => <Entypo name="lock" size={24} color="black" />
            }} />
        </Tabs>
    )
}