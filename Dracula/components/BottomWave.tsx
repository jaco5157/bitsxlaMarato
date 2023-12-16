import React, { useState } from 'react';
import Svg, {Path} from 'react-native-svg'
import {View} from 'react-native'
import {colors} from '../pages/Styles'

const style = {
    position: "absolute",
    bottom: 0,
}

const BottomWave = () => {
    return (
        <Svg style={style} viewBox="0 0 1440 320" width="720" height="160">
          <Path fill={colors.primary} fillOpacity="1" d="M0,0L34.3,5.3C68.6,11,137,21,206,64C274.3,107,343,181,411,192C480,203,549,149,617,149.3C685.7,149,754,203,823,234.7C891.4,267,960,277,1029,240C1097.1,203,1166,117,1234,90.7C1302.9,64,1371,96,1406,112L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"/>
      </Svg>

    );
}

export default BottomWave;

