import React from 'react';
import { View, Text } from 'react-native';
import styles from './style'

export default function Title(){
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>ONEBITHEALTH</Text>
            <Text style={styles.textSubtitle}>Development by Gabriel Trindade</Text>
        </View>
    );
}