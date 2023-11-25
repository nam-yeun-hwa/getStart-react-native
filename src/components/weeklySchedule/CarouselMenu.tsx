import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Dimensions } from "react-native";
import CarouselItem from "./CarouselItem";

function CarouselMenu(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);

  const width = Dimensions.get("window").width;

  const data = [
    { step: "1" },
    { step: "2" },
    { step: "3" },
    { step: "4" },
    { step: "5" },
    { step: "6" },
    { step: "7" },
    { step: "8" },
    { step: "9" },
    { step: "10" },
    { step: "11" },
    { step: "12" },
    { step: "13" },
    { step: "14" },
    { step: "15" },
    // Add more items as needed
  ];

  const renderItem = ({ item, index }) => {
    const activeItemStyle = index === activeIndex ? true : false;

    console.log("render", item);
    return <CarouselItem step={item.step} active={activeItemStyle} />;
  };

  const handleSnapToItem = (index) => {
    setActiveIndex(index);
  };

  return (
    <View style={styles.contianer}>
      <Carousel
        data={data}
        renderItem={(item) => renderItem(item)}
        sliderWidth={width} // 캐러셀의 전체 너비
        itemWidth={width / 5.5} // 각 슬라이드의 너비
        // itemHeight={width / 4}
        layout="default" // 레이아웃 모드 ("default", "stack", "tinder")
        loop={false} // 무한 루프 활성화
        inactiveSlideScale={1}
        // onSnapToItem={handleSnapToItem}
        onScrollIndexChanged={handleSnapToItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F6F5F8",
  },
});

export default CarouselMenu;
