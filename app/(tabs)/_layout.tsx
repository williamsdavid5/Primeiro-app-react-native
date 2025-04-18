import { Tabs } from 'expo-router'

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                title: 'Gerar senha',
                headerShown: false,
                tabBarIcon: () => null
            }} />

            <Tabs.Screen name="passwords" options={{ title: 'Senhas salvas', tabBarIcon: () => null }} />
        </Tabs>
    )
}