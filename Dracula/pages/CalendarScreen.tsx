import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import styles, {colors} from './Styles';
import TopWave from '../components/TopWave'
import CustomText from '../components/CustomText'
import Svg, {Path} from 'react-native-svg'
import {Calendar} from "react-native-calendars"
import {useStorage} from '../hooks/useStorage'
import Header from '../components/Header'


const CalendarScreen = ({navigation}) => {
    const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString('en-CA'));

     const [currentUser] = useStorage('DRACULA@current-user', '')
     const [cycles, setCycles, refreshCycles] = useStorage('DRACULA@cycles', {})
     const currentUserLC = currentUser.toLowerCase();

     let userCycles = cycles[currentUserLC] || []
     let lastCycle = userCycles.length > 0 ? userCycles[userCycles.length-1] : []
     if (lastCycle.length === 1) navigation.navigate('Profile')

     useEffect(() => {
         const unsubscribe = navigation.addListener('focus', () => refreshCycles());
         return unsubscribe;
       }, [navigation]);

     useEffect(() => {
         userCycles = cycles[currentUserLC] || []
         lastCycle = userCycles.length > 0 ? userCycles[userCycles.length-1] : []
     }, [cycles]);


    const confirmDate = () => {
        userCycles.push([selectedDate])
        cycles[currentUserLC] = userCycles;
        setCycles(cycles)
        navigation.navigate("Profile")
    }

    function transformPeriodsToMarkedDates(periods) {

        const fakePeriods = [
            [new Date('2023-11-10'), new Date('2023-11-15')],
            [new Date('2023-10-12'), new Date('2023-10-17')]
        ];

        periods = [...fakePeriods, ...periods];

      const markedDates = {};

      periods.forEach(([startDate, endDate]) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        // Loop through the days in the period
        for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
          const formattedDate = date.toISOString().split('T')[0];

          if (date.getTime() === start.getTime()) {
            // If it's the starting day
            markedDates[formattedDate] = {
              selected: true,
              startingDay: true,
              color: colors.secondary,
              disableTouchEvent: true
            };
          } else if (date.getTime() === end.getTime()) {
            // If it's the ending day
            markedDates[formattedDate] = {
              selected: true,
              endingDay: true,
              color: colors.secondary,
              disableTouchEvent: true
            };
          } else {
            // If it's a middle day
            markedDates[formattedDate] = {
              selected: true,
              color: colors.secondary,
              disableTouchEvent: true
            };
          }
        }
      });

      return markedDates;
    }


    const customStyles = StyleSheet.create({
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
              <Header/>
              <View style={customStyles.container}>
                <TopWave/>
                <View style={customStyles.actions}>
                    <View>
                        <CustomText style={{textAlign: "center"}}>When did your period <CustomText style={styles.highlight}>first appear</CustomText> this month?</CustomText>
                    </View>
                    <Calendar
                        value={selectedDate}
                        onDayPress={day => setSelectedDate(day.dateString)}
                        maxDate={new Date().toLocaleDateString('en-CA')}
                        markingType={'period'}
                        markedDates={{
                            [selectedDate]: {selected: true, startingDay: true, endingDay:true, color: colors.primary},
                            ...transformPeriodsToMarkedDates(userCycles)
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
                        <Pressable style={{...styles.button, backgroundColor: colors.primary, width: "100%"}} onPress={() => confirmDate()}>
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