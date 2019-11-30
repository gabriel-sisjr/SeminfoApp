import React, { useState } from 'react';
import { SafeAreaView, Text, Image, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import gitLogo from '../../shared/images/github.jpeg'

export default function Home({ navigation }) {
  const [user, setUser] = useState('')

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={{
        width: '70%',
        height: '100%',
        marginTop: '-40%',
        marginBottom: '-50%'
      }}
        resizeMode="contain"
        source={gitLogo} />
      <View style={{ alignSelf: 'stretch', paddingHorizontal: '15%', marginTop: '2%' }}>
        {/* <Text style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 20,
          color: '#444',
          marginBottom: '2%',
        }}>Repositorio</Text> */}
        <TextInput style={{
          borderWidth: 1,
          borderColor: '#ddd',
          paddingHorizontal: '7%',
          fontSize: 20,
          color: '#444',
          height: '15s%',
          marginBottom: '5%',
          borderRadius: 2
        }}
          placeholder="Buscar repositórios..."
          value={user}
          onChangeText={setUser} />
        <TouchableOpacity
          style={{
            height: '35%',
            backgroundColor: '#0290bf',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 2,
            marginBottom: '2%'
          }}
          onPress={() => {
            navigation.navigate('Repos', { user });
            setUser('');
          }}
        >
          <Text
            style={{
              color: '#FFF',
              fontWeight: 'bold',
              fontSize: 20
            }}
          >
            Buscar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
