import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { COLORS } from '../../styles/colors';

const Header = ({ date, onMorePress, navigation }) => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        weekday: 'long',
    });

    const handleCalendarPress = () => {
        // Navigate to GroceryListScreen when calendar icon is pressed
        navigation.navigate('GroceryList');
    };

    return (
        <View style={styles.header}>
            {/* Calendar Icon */}
            <TouchableOpacity
                style={styles.iconWrapper}
                onPress={handleCalendarPress}
            >
                <Ionicons name="calendar" size={20} color={COLORS.primary.dark} />
            </TouchableOpacity>

            {/* Date Text */}
            <Text style={styles.dateText}>{formattedDate}</Text>

            {/* More Options Icon */}
            <TouchableOpacity style={styles.iconWrapper} onPress={onMorePress}>
                <Feather name="more-horizontal" size={20} color={COLORS.primary.dark} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 10,
        paddingBottom: 20,
    },
    iconWrapper: {
        width: 36,
        height: 36,
        borderRadius: 13,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    dateText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333333',
        textAlign: 'center',
        flex: 1,
    },
});

export default Header;