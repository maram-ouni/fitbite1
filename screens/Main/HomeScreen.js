import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Svg, Circle, G, LinearGradient, Stop, Defs } from 'react-native-svg';
import { Ionicons, Feather } from '@expo/vector-icons';
import { LinearGradient as RNLinearGradient } from 'expo-linear-gradient';
import { COLORS, getGradientColors, getMealColor } from '../../styles/colors';
import Header from './Header';

const CircularProgress = ({ percentage }) => {
    const size = 200;
    const strokeWidth = 15;
    const center = size / 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const progressStrokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <View style={styles.progressContainer}>
            <Svg width={size} height={size}>
                <Defs>
                    <LinearGradient id="progressGradient" x1="0" y1="0" x2="1" y2="0">
                        <Stop offset="0" stopColor={COLORS.gradients.circular.progress[0]} />
                        <Stop offset="1" stopColor={COLORS.gradients.circular.progress[1]} />
                    </LinearGradient>
                </Defs>
                <G rotation="-90" origin={center}>
                    <Circle
                        stroke={COLORS.gradients.circular.background}
                        fill="none"
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                    />
                    <Circle
                        stroke="url(#progressGradient)"
                        fill="none"
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${circumference} ${circumference}`}
                        strokeDashoffset={progressStrokeDashoffset}
                        strokeLinecap="round"
                    />
                </G>
            </Svg>
            <View style={styles.progressContent}>
                <Text style={styles.caloriesText}>1645</Text>
                <Text style={styles.caloriesLabel}>Kcal eaten</Text>
                <View style={styles.dots}>
                    <View style={[styles.dot, styles.activeDot]} />
                    <View style={styles.dot} />
                </View>
            </View>
        </View>
    );
};

const MealItem = ({ title, calories, recommended, items, isExpanded, onToggle }) => (
    <View style={[styles.mealItem, { borderLeftColor: title === 'Breakfast' || title === 'Dinner' ? '#006A6A' : '#FF8E6E' }]}>
        <TouchableOpacity style={styles.mealHeader} onPress={onToggle}>
            <View style={styles.mealContent}>
                <View style={styles.mealTitleContainer}>
                    <Text style={[styles.mealTitle, { color: title === 'Breakfast' || title === 'Dinner' ? '#006A6A' : '#FF8E6E' }]}>
                        {title}
                    </Text>
                    {calories && <Text style={styles.mealCalories}>{calories} Kcal</Text>}
                </View>
                <Text style={styles.recommendedText}>Recommended {recommended} Kcal</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
                <Feather name="plus" size={24} color="#006A6A" />
            </TouchableOpacity>
        </TouchableOpacity>
        {isExpanded && items && (
            <View style={styles.mealItems}>
                {items.map((item, index) => (
                    <View key={index} style={styles.mealItemRow}>
                        <Text style={styles.itemText}>{item.name} {item.quantity}</Text>
                        <Text style={styles.itemCalories}>{item.calories} Kcal</Text>
                    </View>
                ))}
            </View>
        )}
    </View>
);

const HomeScreen = ({ navigation }) => {
    const [expandedMeal, setExpandedMeal] = useState('Breakfast');

    const breakfastItems = [
        { name: 'Coffe with milk', quantity: '100 g', calories: 56 },
        { name: 'Sandwich', quantity: '100 g', calories: 250 },
        { name: 'Walnuts', quantity: '20 g', calories: 100 },
    ];

    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.header}>
                    <Header
                        date="2 May, Monday"
                        onMorePress={() => console.log('More button pressed')}
                        navigation={navigation} // Pass navigation prop
                    />
                </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >

                <CircularProgress percentage={75} />

                <Text style={styles.goalText}>2181</Text>
                <Text style={styles.goalLabel}>Kcal Goal</Text>

                <View style={styles.mealsContainer}>
                    <View style={styles.mealsHeader}>
                        <Text style={styles.mealsTitle}>Daily meals</Text>
                        <View style={styles.expandButton}>
                            <Feather name="chevron-down" size={24} color="#fff" />
                        </View>
                    </View>

                    <MealItem
                        title="Breakfast"
                        calories={306}
                        recommended={447}
                        items={breakfastItems}
                        isExpanded={expandedMeal === 'Breakfast'}
                        onToggle={() => setExpandedMeal(expandedMeal === 'Breakfast' ? null : 'Breakfast')}
                    />
                    <MealItem
                        title="Lunch"
                        recommended={547}
                        isExpanded={expandedMeal === 'Lunch'}
                        onToggle={() => setExpandedMeal(expandedMeal === 'Lunch' ? null : 'Lunch')}
                    />
                    <MealItem
                        title="Dinner"
                        recommended={547}
                        isExpanded={expandedMeal === 'Dinner'}
                        onToggle={() => setExpandedMeal(expandedMeal === 'Dinner' ? null : 'Dinner')}
                    />
                    <MealItem
                        title="Snack"
                        recommended={547}
                        isExpanded={expandedMeal === 'Snack'}
                        onToggle={() => setExpandedMeal(expandedMeal === 'Snack' ? null : 'Snack')}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.ui.cardBackground,
    },
    scrollContent: {
        flexGrow: 1,
    },
    header: {
        marginTop:15,
        
      },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateText: {
        marginLeft: 8,
        fontSize: 16,
        color: COLORS.text.dark,
    },
    progressContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressContent: {
        position: 'absolute',
        alignItems: 'center',
    },
    caloriesText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: COLORS.text.primary,
    },
    caloriesLabel: {
        fontSize: 14,
        color: COLORS.text.primary,
        marginTop: 4,
    },
    dots: {
        flexDirection: 'row',
        marginTop: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: COLORS.ui.dot.inactive,
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: COLORS.ui.dot.active,
    },
    goalText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: COLORS.text.dark,
    },
    goalLabel: {
        fontSize: 14,
        color: COLORS.text.light,
        textAlign: 'center',
        marginTop: 4,
    },
    mealsContainer: {
        marginTop: 20,
        backgroundColor: COLORS.primary.light,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    mealItem: {
        backgroundColor: COLORS.ui.cardBackground,
        borderRadius: 16,
        marginBottom: 15,
        borderLeftWidth: 4,
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    mealHeader: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    mealContent: {
        flex: 1,
    },
    mealTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    mealTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginRight: 8,
    },
    mealCalories: {
        fontSize: 14,
        color: '#666',
    },
    recommendedText: {
        fontSize: 12,
        color: '#999',
    },
    addButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#E8F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 16,
    },
    mealItems: {
        padding: 15,
        backgroundColor: '#fff',
    },
    mealItemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    itemText: {
        fontSize: 14,
        color: '#666',
    },
    itemCalories: {
        fontSize: 14,
        color: '#666',
    },
});

export default HomeScreen;