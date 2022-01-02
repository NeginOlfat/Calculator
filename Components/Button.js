import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;


const Button = ({ onPress, text, size, theme}) =>{
    const buttonStyle = [Styles.button];
    const buttonText = [Styles.text];

    if (size === 'double'){
        buttonStyle.push(Styles.doubleButton)
    }

    if (theme === 'secondary'){
        buttonStyle.push(Styles.secondaryButton);
        buttonText.push(Styles.textSecondary)
    }else if (theme === 'third'){
        buttonStyle.push(Styles.thirdButton);
    }

    return(
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}
        >
            <Text style={buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    text: {
        color: "#fff",
        fontSize: 30
    },
    textSecondary: {
        color: "#060606"
    },
    button: {
        backgroundColor: "#333333",
        flex: 1,
        height: Math.floor(buttonWidth - 10),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Math.floor(buttonWidth),
        margin: 5
    },
    doubleButton: {
        width: screen.width / 2 - 10,
        flex: 0,
        alignItems: "flex-start",
        paddingLeft: 40
    },
    secondaryButton: {
        backgroundColor: "#a6a6a6"
    },
    thirdButton: {
        backgroundColor: "#f09a36"
    }
})

export default Button
