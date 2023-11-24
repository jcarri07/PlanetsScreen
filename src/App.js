import React from "react";
import { Image, Pressable, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import {colors, fontSizes, paddingHorizontal, iconSize, DAY, MONTH, ICONS, PLANETS, HOME} from './constants';
import Card from './components/Card.tsx';

function App() {
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: colors.primary}}>
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: paddingHorizontal.small, paddingTop: paddingHorizontal.small}}>
            <TouchableOpacity>
              <Image source={{uri: ICONS.back}} style={{ height: iconSize, width: iconSize}} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={{uri: ICONS.paste}} style={{ height: iconSize, width: iconSize}} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.title}>{HOME.title}</Text>
          </View>
          <View style={styles.contain}>
            <Text style={styles.textDate}>{`${MONTH}, ${DAY}TH`}</Text>
          </View>
        </View>
        <View>
          <Text style={{fontSize: fontSizes.medium, color: colors.secondary, textAlign: 'justify', paddingHorizontal: paddingHorizontal.small, paddingTop: paddingHorizontal.small}}>{HOME.description}</Text>
        </View>
        {PLANETS.map((planet, index) => (
          <View key={index}>
            <Card title={planet.name} description={planet.description} image={planet.image} />
          </View>
        ))}
      </View>
    </ScrollView>
    <View style={{flex: 1}} />
      <Text style={{color: colors.tertiary, fontSize: fontSizes.small}}>Creado por jcarri07</Text>
    <View style={{paddingBottom: 5}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 800,
  },
  header: {
    height: 50
  },
  contain: {
    justifyContent: 'flex-end',
    height: 34
  },

  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: paddingHorizontal.small,
    paddingHorizontal: paddingHorizontal.small
  },

  textDate: {
    fontSize: fontSizes.medium,
    color: colors.tertiary,
    fontWeight: 'bold'
  },

  title: {
    color: colors.secondary,
    fontWeight: '600',
    fontSize: fontSizes.xxl
  }
});

export default App;
