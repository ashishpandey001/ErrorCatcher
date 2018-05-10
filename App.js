import React, { Component } from 'react';
import {
  Alert,
  Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const errorHandler = (err) => {
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}

ErrorUtils.setGlobalHandler(errorHandler);

type Props = {};
export default class App extends Component<Props> {

  causeAppCrashViaCustomError = () => {
    throw new Error('custom error');
  }

  causeAppCrashViaMissingFunction = () => {
    this.abraCadabra();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title='Cause Crash Via Custom Error'
          color='#000'
          onPress={this.causeAppCrashViaCustomError}
        />
        <Button
          title='Cause Crash Via Missing Function'
          color='#000'
          onPress={this.causeAppCrashViaMissingFunction} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
