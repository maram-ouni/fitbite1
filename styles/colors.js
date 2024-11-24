export const COLORS = {
    // Primary colors
    primary: {
        dark: '#006D77',    // Dark teal
        main: '#83C5BE',    // Medium teal
        light: '#EDF6F9',   // Light blue/gray
    },

    // Secondary colors
    secondary: {
        light: '#F9F6EB',   // Light cream
        main: '#FFDDD2',    // Light pink
        dark: '#E29578'     // Coral
    },

    // Gradients
    gradients: {
        circular: {
            background: '#EDF6F9',
            progress: ['#FFDDD2', '#E29578']
        },
        background: {
            colors: ['#FFFFFF', '#EDF6F9'],
            locations: [0, 1]
        }
    },

    // Meal types
    mealTypes: {
        breakfast: '#006D77',
        lunch: '#E29578',
        dinner: '#006D77',
        snack: '#E29578'
    },

    // Text colors
    text: {
        primary: '#006D77',
        secondary: '#83C5BE',
        dark: '#000000',
        light: '#666666'
    },

    // UI elements
    ui: {
        cardBackground: '#FFFFFF',
        addButton: '#EDF6F9',
        divider: '#EDF6F9',
        dot: {
            active: '#006D77',
            inactive: '#D9D9D9'
        }
    }
};

export const getGradientColors = (type) => {
    switch (type) {
        case 'circular':
            return COLORS.gradients.circular.progress;
        case 'background':
            return COLORS.gradients.background.colors;
        default:
            return [];
    }
};

export const getMealColor = (mealType) => {
    return COLORS.mealTypes[mealType.toLowerCase()] || COLORS.primary.dark;
};

export const colors = {
    gradientStart: '#016D77', // Top color of the gradient
    gradientEnd: '#83C4BE',   // Bottom color of the gradient
    background: '#EDF6F9',
    progress: ['#FFDDD2', '#E29578'],
    backgroundColor: ['#FFFFFF', '#EDF6F9'],
  };