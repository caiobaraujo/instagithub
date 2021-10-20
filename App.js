import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function InstaCard({ user }) {
  const [liked, setLikeState] = useState(false);
  return (
    <View>
      <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center' }}>
        <Image
          style={{
            marginRight: 15,
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
          source={require(`./assets/${user}.jpg`)}
        />
        <Text>{user}</Text>
      </View>

      <Image
        style={{
          width: '100%',
          height: 350,
        }}
        source={require(`./assets/${user}.jpg`)}
      />

      <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center' }}>
        <TouchableOpacity onPress={() => setLikeState(!liked)}>
          {liked && <AntDesign name="hearto" size={24} color="black" />}
          {!liked && <AntDesign name="heart" size={24} color="black" />}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {['user01', 'user02', 'user03', 'user04'].map((user) => {
          return <InstaCard key={user} user={user} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

    paddingTop: 10,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
