import {Text} from 'react-native-paper';
import React from 'react';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from './src/screen/main-screen';

enableScreens();

const Stack = createStackNavigator();

class App extends React.Component {
  // 메인 네비게이션의 화면 컴포넌트 목록
  MainScreen(props) {
    return <MainScreen {...props} />;
  }

  ArtistScreen(props) {
    return <Text>ArtistScreen</Text>;
  }

  VenueScreen(props) {
    return <Text>VenueScreen</Text>;
  }

  EventScreen(props) {
    return <Text>EventScreen</Text>;
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {/* depth: 1 */}
          <Stack.Screen name="Main View" component={this.MainScreen} />
          {/* depth: 2 */}
          <Stack.Screen name="Artist View" component={this.ArtistScreen} />
          <Stack.Screen name="Venue View" component={this.VenueScreen} />
          <Stack.Screen name="Event View" component={this.EventScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
