import React, { useState } from 'react';
import {View, Text} from 'react-native'
import {colors} from '../pages/Styles'

const CustomText = (props) => {
    return (
        <Text style={{fontFamily: "FiraSans-Regular", fontSize: 18, color: colors.black, ...props.style}}>{props.children}</Text>
    );
}

export default CustomText;

