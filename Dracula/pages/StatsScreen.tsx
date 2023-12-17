import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, Pressable, ScrollView, SafeAreaView } from 'react-native';
import styles, {colors} from './Styles';
import TopWave from '../components/TopWave'
import CustomText from '../components/CustomText'
import Svg, {Path} from 'react-native-svg'
import {Calendar} from "react-native-calendars"
import {useStorage} from '../hooks/useStorage'
import Header from '../components/Header'

const StatsScreen = ({navigation}) => {
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
          paddingTop: 90,
          paddingBottom: 30
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
           <SafeAreaView style={styles.mainContainer}>
          <ScrollView >
              <Header/>
              <View style={customStyles.container}>
                <TopWave/>
                <View style={customStyles.actions}>
                    <View>
                        <CustomText style={{textAlign: "center"}}>Ever wondered about the connection between your <CustomText style={styles.highlight}>period</CustomText> and your <CustomText style={styles.highlight}>health</CustomText>?</CustomText>
                        <CustomText style={{textAlign: "center", fontFamily: "FiraSans-Light"}}>Let's explore the answers together, <CustomText style={styles.highlight}>{currentUser}</CustomText>!</CustomText>
                    </View>

                    <CustomText style={{textAlign: "center", fontFamily: "FiraSans-Medium", paddingTop: 50}}>Check the calendar of your menstrual cycles</CustomText>
                    <Calendar
                        maxDate={new Date().toLocaleDateString('en-CA')}
                        markingType={'period'}
                        markedDates={{
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
                </View>
              </View>
          </ScrollView>
          </SafeAreaView>
        </View>

  );
};

export default StatsScreen;