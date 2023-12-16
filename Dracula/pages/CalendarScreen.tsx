import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import styles, {colors} from './Styles';
import TopWave from '../components/TopWave'
import CustomText from '../components/CustomText'
import Svg, {Path} from 'react-native-svg'
import {Calendar} from "react-native-calendars"


const CalendarScreen = ({navigation}) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const customStyles = StyleSheet.create({
        header: {
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingTop: 5,
            width: "100%"
        },
        headerLeft: {
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            gap: 20
        },
        container: {
          position: "relative",
          backgroundColor: colors.white,
          height: "100%",
          width: "100%",
          color: colors.black,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 90
        },
        actions: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "75%",
            flexGrow: 1,
            gap: 10
        }
      })

  return (
  <View style={styles.body}>
          <View style={styles.mainContainer}>
              <View style={customStyles.header}>
                <View style={customStyles.headerLeft}>
                    <Svg height="16" width="14" viewBox="0 0 448 512">
                        <Path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                    </Svg>
                  <Image source={require('./../assets/logo.png')} style={{...styles.logo, width: 40, height: 40}}/>
                </View>
              </View>
              <View style={customStyles.container}>
                <TopWave/>
                <View style={customStyles.actions}>
                    <View>
                        <CustomText style={{textAlign: "center"}}>When did your period <CustomText style={styles.highlight}>first appear</CustomText> this month?</CustomText>
                    </View>
                    <Calendar
                        value={selectedDate}
                        onDayPress={day => setSelectedDate(day.dateString)}
                        markedDates={{
                            [selectedDate]: {selected: true}
                        }}
                        style={{
                            width: "100%"
                        }}
                        theme={{
                          backgroundColor: colors.white,
                          calendarBackground: colors.white,
                          textSectionTitleColor: colors.primary,
                          selectedDayBackgroundColor: colors.primary,
                          selectedDayTextColor: colors.white,
                          todayTextColor: colors.primary,
                          dayTextColor: colors.black,
                          textDisabledColor: "gray",
                          dotColor: colors.primary,
                          selectedDotColor: colors.white,
                          arrowColor: colors.primary,
                          disabledArrowColor: "gray",
                          monthTextColor: colors.primary,
                          indicatorColor: colors.primary
                        }}
                      />
                      <View style={{marginTop: 20, width: "100%"}}>
                        <CustomText style={{...styles.highlight, textAlign: "center"}}>{new Date(selectedDate).toDateString()}</CustomText>
                        <Pressable style={{...styles.button, backgroundColor: colors.primary, width: "100%"}} onPress={() => navigation.navigate("Question1")}>
                          <CustomText style={{color: colors.white}}>Confirm</CustomText>
                        </Pressable>
                      </View>
                </View>
              </View>
          </View>
        </View>

  );
};

export default CalendarScreen;