import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const images = [
  'https://media.istockphoto.com/id/1166328231/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-c%E1%BB%91c-c%C3%A0-ph%C3%AA-tr%E1%BA%AFng-cappuccino-n%C3%B3ng-v%E1%BB%9Bi-h%C3%ACnh-tr%C3%A1i-tim-latte-ngh%E1%BB%87-thu%E1%BA%ADt-tr%C3%AAn-b%C3%A0n-g%E1%BB%97-c%C5%A9-m%C3%A0u.jpg?s=612x612&w=0&k=20&c=zApkTiIouP-P24CeKgaR3gSk7x3hCFteJIjLMvlAr5M=',
  'https://media.istockphoto.com/id/1430447435/vi/anh/c%E1%BB%91c-b%E1%BB%8B-l%E1%BA%ADt-ng%C6%B0%E1%BB%A3c-v%C3%A0-r%E1%BA%A3i-h%E1%BA%A1t-c%C3%A0-ph%C3%AA-b%E1%BB%8B-ch%C3%A1y-tr%C3%AAn-b%C3%A0n.jpg?s=612x612&w=0&k=20&c=woxuUUU4xcnTLW7Syv3SY_ycHztxkkceXhoVnG-Sdiw=',
  'https://media.istockphoto.com/id/927414822/vi/anh/t%C3%A1ch-c%C3%A0-ph%C3%AA-v%C3%A0-h%E1%BA%A1t-c%C3%A0-ph%C3%AA-trong-bao-t%E1%BA%A3i-nh%C3%ACn-t%E1%BB%AB-tr%C3%AAn-xu%E1%BB%91ng.jpg?s=612x612&w=0&k=20&c=18j_pggsDQwyW_gShvZ9xO2dJs9l4FT8ES48CtzYE5U='
]

const SlideShow = () => {
  const [imgActive, setImgActive] = useState(0);

  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide !== imgActive) {
        setImgActive(slide);
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({ nativeEvent }) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}>

          {images.map((e, index) =>
            <ImageBackground
              key={e}
              resizeMode="stretch"
              style={styles.image}
              source={{ uri: e }}
            />
          )}

        </ScrollView>

        <View style={styles.wrapDot}>
          {images.map((e, index) =>
            <Text
              key={e}
              style={imgActive === index ? styles.dotActive : styles.dot}>
              ●
            </Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  
  },
  image: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  wrapDot: {
    flexDirection: 'row',
    alignItems: 'center', // Add this line
    alignSelf: 'center',
    bottom: 0,
   
  },
  dotActive: {
    margin: 3,
    color: 'black',
  },
  dot: {
    margin: 3,
    color: 'white',
  }
})

export default SlideShow;
