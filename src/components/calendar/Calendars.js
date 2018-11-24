// react-native-calendars doc: https://github.com/wix/react-native-calendars
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {
  Calendar,
  CalendarList,
  Agenda
} from 'react-native-calendars';

export default class Calendars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: Date()
    };
  }

  render() {
    const calendars = (
      <CalendarList
        current={this.state.current}
      // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => { console.log('selected day', day); }}
      // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => { console.log('selected day', day); }}
      // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat="yyyy MM"
      // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => { console.log('month changed', month); }}
      // Hide month navigation arrows. Default = false
      // Do not show days of other months in month page. Default = false
      // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
      // day from another month that is visible in calendar page. Default = false

      // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
      // Hide day names. Default = false
        hideDayNames
      // Show week numbers to the left. Default = false
      // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={substractMonth => substractMonth()}
      // Handler which gets executed when press arrow icon left. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
        horizontal={true}
        pagingEnabled={true}
      />
    );

    return (
      <View>
        {calendars}
      </View>
    );
  }
}
