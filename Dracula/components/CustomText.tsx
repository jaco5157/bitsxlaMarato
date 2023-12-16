import React, { useState } from 'react';
import {View, Text} from 'react-native'


const CustomText = (props) => {
    return (
        <Text style={{fontFamily: "FiraSans-Regular", ...props.style}}>{props.children}</Text>
    );
}

export default CustomText;

