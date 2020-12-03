import React from 'react';
import {StyleSheet} from 'react-native';
import {BottomNavigation, Text} from 'react-native-paper';
import {observer} from 'mobx-react';
import {observable, action} from 'mobx';

import AppTheme from '../../theme';

@observer
class MainScreen extends React.Component {
  @observable nTabIndex = 0;
  @action setTabIndex = (index) => {
    this.nTabIndex = index;

    console.log(this.nTabIndex);
  }

  // BottomNavigation 목록
  ArrSceneRoute = [
    {
      key: 'artistList',
      title: '음악가',
      icon: 'account-music',
    },
    {
      key: 'venueList',
      title: '공연장',
      icon: 'ticket',
    },
    {
      key: 'eventList',
      title: '공연날짜',
      icon: 'calendar-range',
    },
  ];

  constructor(props) {
		super(props);
  }

  ArtistListView = () => {
    return <Text>ArtistListView</Text>;
  }

  VenueListView = () => {
    return <Text>VenueListView</Text>;
  }

  EventListView = () => {
    return <Text>EventListView</Text>;
  }

  renderScene = BottomNavigation.SceneMap({
    artistList: this.ArtistListView,
    venueList: this.VenueListView,
    eventList: this.EventListView,
  });

  render() {
    return (
      <>
        <BottomNavigation
          navigationState={{index: this.nTabIndex, routes: this.ArrSceneRoute}}
          onIndexChange={this.setTabIndex}
          renderScene={this.renderScene}
        />
      </>
    );
  }
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
