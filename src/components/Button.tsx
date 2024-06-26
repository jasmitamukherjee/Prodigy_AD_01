import { StyleSheet, View,TouchableOpacity,Text } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '@/src/context/ThemeContext'
import {Styles} from '../styles/GlobalStyles'

interface ButtonProps {
    onPress : () => void;
    title: string;
    isYellow?: boolean;
    isGray?: boolean;


}

export default function Button({title,onPress,isYellow,isGray} : ButtonProps){
    const theme = useContext(ThemeContext);
    return(
        <TouchableOpacity 
        style={
            isYellow
            ? Styles.btnYellow
            : isGray
            ? Styles.btnGray
            : theme === 'light'
            ?Styles.btnLight
            :Styles.btnDark

        }
        onPress={onPress}
        >
            <Text
            style={
                isYellow || isGray
                ? Styles.smallTextLight
                : theme === 'dark'
                ? Styles.smallTextLight
                : Styles.smallTextDark
            }
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}