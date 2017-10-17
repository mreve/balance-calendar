import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import Icon from 'react-native-vector-icons/Entypo';

import AppView from './AppView';
import DateUtils from './utils/DateUtils';
import HomeHeader from './HomeHeader';
import SquaresList from './SquaresList';

const { width, height } = Dimensions.get('window');
const CAROUSEL_SIZE = 7;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    const today = new Date();
    const selectedPage = Math.floor(CAROUSEL_SIZE / 2);
    const datesOnPages = DateUtils.getSurroundingDates(
      CAROUSEL_SIZE,
      today,
      selectedPage,
    );
    console.log(datesOnPages);
    this.state = {
      selectedDate: today,
      selectedPage: selectedPage,
      datesOnPages: datesOnPages,
    };
    this.onCarouselScroll = this.onCarouselScroll.bind(this);
  }

  render() {
    const navigation = this.props.navigation;
    const carouselElements = this.state.datesOnPages.map(
      function(date) {
        return (
          <SquaresList
            selectedDate={date}
            navigation={navigation}
            key={date}
          />
        );
      },
    );

    return (
      <AppView>
        <ScrollView>
          <View style={styles.container}>
            <HomeHeader
              month={DateUtils.getFullMonth(this.state.selectedDate)}
              selectedDate={this.state.selectedDate}
            />
            <Carousel
              delay={2000}
              style={styles.squaresList}
              autoplay={false}
              pageInfo={false}
              onAnimateNextPage={(pageID) => this.onCarouselScroll(pageID)}
              currentPage={this.state.selectedPage}
            >
              {carouselElements}

            </Carousel>
          </View>
        </ScrollView>
      </AppView>
    );
  }

  onCarouselScroll(
    pageID: number,
  ) {
    const currentPageID = this.state.selectedPage;
    const nextPageID = pageID;
    console.log('changing', currentPageID, 'to', nextPageID);

    // Unfinished scrolling
    if (currentPageID === nextPageID) {
      return;
    }

    let selectedDate;
    let datesOnPages = [...this.state.datesOnPages];
    if (
      (
        currentPageID > nextPageID &&
        !(currentPageID === CAROUSEL_SIZE - 1 && nextPageID === 0)
      ) ||
      (currentPageID === 0 && nextPageID === CAROUSEL_SIZE - 1)
    ) {
      // Swipe left
      console.log('swipe left');
      selectedDate = DateUtils.getPreviousDay(this.state.selectedDate);
      console.log('new selected date:', selectedDate);

      const latestDatePosition = nextPageID - Math.floor(CAROUSEL_SIZE / 2);
      const latestDayPageID = latestDatePosition < 0
        ? CAROUSEL_SIZE + latestDatePosition
        : latestDatePosition;
      datesOnPages[latestDayPageID] = DateUtils.getDayRelative(
        selectedDate,
        -Math.floor(CAROUSEL_SIZE / 2),
      );
    } else {
      // Swipe right
      console.log('swipe right');
      selectedDate = DateUtils.getNextDay(this.state.selectedDate);
      console.log('new selected date:', selectedDate);

      const earliestDayPosition = nextPageID + Math.floor(CAROUSEL_SIZE / 2);
      const earliestDayPageID = earliestDayPosition > CAROUSEL_SIZE - 1
        ? earliestDayPosition - CAROUSEL_SIZE
        : earliestDayPosition;
      datesOnPages[earliestDayPageID] = DateUtils.getDayRelative(
        selectedDate,
        Math.floor(CAROUSEL_SIZE / 2),
      );
    }

    console.log('old dates:', this.state.datesOnPages);
    console.log('new dates:', datesOnPages);

    this.setState({
      selectedPage: nextPageID,
      selectedDate: selectedDate,
      datesOnPages: datesOnPages,
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDEC0',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: width,
    paddingTop: 30,
  },
  squaresList: {
    width: width,
    height: (224 + 24) * 6, // Substract header
  },
});
