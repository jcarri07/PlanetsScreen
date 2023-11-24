import { View, Text, Image, ScrollView } from 'react-native';
import {colors, fontSizes, paddingHorizontal, images, MAX_WIDTH} from '../constants';
import React from 'react'

const iconSize = 25;
const paddingParagraph = 10;
const bottomPlanet = 5;

interface CardProps {
  image?: string;
  title: string;
  description: string;
};

export default function Card({image, title, description}: CardProps) {
  return (
    <View style={{justifyContent: 'space-between', aligItems: 'center', paddingHorizontal: paddingHorizontal.small, maxWidth: MAX_WIDTH}}>
      <View style={{flexDirection: 'row', alignItems: 'space-between' , marginTop: paddingHorizontal.small, backgroundColor: colors.grayLight, height: 180, width: '100%', borderRadius: iconSize}}>
          <View style={{ width: '58%', paddingHorizontal: paddingHorizontal.small, paddingTop: paddingHorizontal.small}}>
            <Text style={{color: colors.secondary, fontWeight: 'bold', fontSize: fontSizes.large}}>{title}</Text>
            <View style={{paddingTop: paddingParagraph}}>
              <Text style={{textAlign: 'justify', color: colors.secondary, fontSize: fontSizes.medium}}>{description}</Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', height: '100%', width: '42%'}}>
            <Image source={{ uri: image}} resizeMode='cover' style={{width: 154, height: 153, borderRadius: '50%', borderColor: colors.tertiary, borderWidth: 1}} />
          </View>
        </View>
      </View>
  )
}