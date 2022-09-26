import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import Axios from 'axios';
import {
  Button,
  NativeBaseProvider
} from 'native-base';
import axios from 'axios';
import User from './components/User';


const App = () => {
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await axios.get(`https://randomuser.me/api/`);
      const details = data.results[0];

      setDetails(details);

    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  if (!details) {
    return (

      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View>
          <User details={details} />
          <Button
            borderRadius='full'
            style={styles.button}
            onPress={fetchDetails}
          >
            <Text>New User</Text>
          </Button>
        </View>
      </View>
    </NativeBaseProvider>
  );
};


export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222831'
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 30
  }
});