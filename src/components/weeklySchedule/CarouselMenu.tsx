import { SetStateAction, useState } from "react";
import { StyleSheet, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Dimensions } from "react-native";
import CarouselItem from "./CarouselItem";

interface CarouselItem {
  data: Array<number>;
  onSelectWeek: (select: number) => void;
}

function CarouselMenu({ data, onSelectWeek }: CarouselItem): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);

  const width = Dimensions.get("window").width;

  const renderItem = ({
    item,
    index,
  }: {
    item: { weekNumber: string };
    index: number;
  }) => {
    const activeItemStyle = index === activeIndex ? true : false;

    return (
      <CarouselItem weekNumber={item.toString()} active={activeItemStyle} />
    );
  };

  const handleSnapToItem = (index: number) => {
    onSelectWeek(index + 1);
    setActiveIndex(index);
  };

  return (
    <View style={styles.contianer}>
      <Carousel
        data={data}
        renderItem={renderItem}
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
