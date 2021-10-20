import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function InstaGithubCard({ githubUser }) {
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
          source={{
            uri: `https://github.com/${githubUser}.png`,
          }}
        />
        <Text>{githubUser}</Text>
      </View>

      <Image
        style={{
          width: '100%',
          height: 350,
        }}
        source={{
          uri: `https://github.com/${githubUser}.png`,
        }}
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
        {['omariosouto', 'vweberfroes', 'gabrielfroes', 'peas'].map(
          (githubUser) => {
            return <InstaGithubCard key={githubUser} githubUser={githubUser} />;
          }
        )}
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
