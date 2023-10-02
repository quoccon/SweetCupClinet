import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProductList from "../component/Home/ProductList";
import Header from "../component/Home/Header";
import Category from "../component/Home/Category";
import { RefreshControl } from "react-native";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const images = [
  "https://media.istockphoto.com/id/1166328231/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-c%E1%BB%91c-c%C3%A0-ph%C3%AA-tr%E1%BA%AFng-cappuccino-n%C3%B3ng-v%E1%BB%9Bi-h%C3%ACnh-tr%C3%A1i-tim-latte-ngh%E1%BB%87-thu%E1%BA%ADt-tr%C3%AAn-b%C3%A0n-g%E1%BB%97-c%C5%A9-m%C3%A0u.jpg?s=612x612&w=0&k=20&c=zApkTiIouP-P24CeKgaR3gSk7x3hCFteJIjLMvlAr5M=",
  "https://media.istockphoto.com/id/1430447435/vi/anh/c%E1%BB%91c-b%E1%BB%8B-l%E1%BA%ADt-ng%C6%B0%E1%BB%A3c-v%C3%A0-r%E1%BA%A3i-h%E1%BA%A1t-c%C3%A0-ph%C3%AA-b%E1%BB%8B-ch%C3%A1y-tr%C3%AAn-b%C3%A0n.jpg?s=612x612&w=0&k=20&c=woxuUUU4xcnTLW7Syv3SY_ycHztxkkceXhoVnG-Sdiw=",
  "https://media.istockphoto.com/id/927414822/vi/anh/t%C3%A1ch-c%C3%A0-ph%C3%AA-v%C3%A0-h%E1%BA%A1t-c%C3%A0-ph%C3%AA-trong-bao-t%E1%BA%A3i-nh%C3%ACn-t%E1%BB%AB-tr%C3%AAn-xu%E1%BB%91ng.jpg?s=612x612&w=0&k=20&c=18j_pggsDQwyW_gShvZ9xO2dJs9l4FT8ES48CtzYE5U=",
];

const HomeScreen = () => {
  const [imgActive, setImgActive] = useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  const scrollInterval = 3000;
  const flatListRef = useRef(null);


  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide !== imgActive) {
        setImgActive(slide);
      }
    }
  };

  useEffect(() => {
    if (autoScrollEnabled) {
      const intervalId = setInterval(() => {
        flatListRef.current.scrollToIndex({
          index: (imgActive + 1) % images.length,
          animated: true,
        });
      }, scrollInterval);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [autoScrollEnabled, imgActive]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
      </View>
      <ScrollView>
        <View style={styles.wrap}>
          <FlatList
            ref={flatListRef}
            data={images}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onMomentumScrollEnd={({ nativeEvent }) => onChange(nativeEvent)}
            renderItem={({ item }) => (
              <ImageBackground
                resizeMode="stretch"
                style={styles.image}
                source={{ uri: item }}
              />
            )}
            onScrollBeginDrag={() => setAutoScrollEnabled(false)}
            onScrollEndDrag={() => setAutoScrollEnabled(true)}
          />
        </View>

        <View style={styles.dotContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                { backgroundColor: index === imgActive ? "#007BFF" : "lightgray" },
              ]}
            />
          ))}
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search here ..."
            style={styles.searchWrapper}
          />

          <TouchableOpacity>
            <Ionicons
              name="search"
              size={30}
              color="black"
              style={{ paddingRight: 20 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          <Category />
        </View>

        <View style={{ marginTop: 20 }}>
          <ProductList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  image: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "lightgray",
    margin: 4,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 15,
    height: 50,
    marginTop: 20,
    backgroundColor: "lightgray",
  },
  searchWrapper: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "lightgray",
    paddingLeft: 20,
    borderRadius: 15,
    shadowRadius: 10,
    shadowOpacity: 0.1,
    shadowColor: "#000",
  },
});

export default HomeScreen;
