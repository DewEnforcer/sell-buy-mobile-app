import { useEffect } from "react";
import * as Notifications from 'expo-notifications';
import * as Permissions from "expo-permissions";
import expoPushTokensApi from "../api/expoPushTokens";

export default function useNotifications(notificationsListener) {
    const registerForPushNotifications = async () => {
        const status = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        if (!status.granted) return;

        try {
            const pushToken = await Notifications.getExpoPushTokenAsync();
            expoPushTokensApi.register(pushToken);
        } catch (error) {
            console.log("Error getting a pushtoken", error);   
        }

    }

    useEffect(() => {
        registerForPushNotifications();

        if (!notificationsListener) return;
        Notifications.addNotificationReceivedListener(notificationsListener);
    }, [])
}