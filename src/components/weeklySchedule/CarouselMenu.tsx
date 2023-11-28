import { SetStateAction, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Dimensions } from "react-native";
import CarouselItem, { CarouselWeekItem } from "./CarouselItem";

interface CarouselItem {
  data: Array<number>;
  onSelectWeek: (select: number) => void;
}
/**
 * CarouselMenu 컴포넌트
 * @description 캐러셀 메뉴 아이템 리스트를 관리하는 컨테이너
 */
function CarouselMenu({ data, onSelectWeek }: CarouselItem) {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const carouselRef = useRef<any>(null);

  const width = Dimensions.get("window").width;

  /**
   * @fuction handleSnapToItem
   * @param index
   * @description 캐러셀이 스크롤 될때 마다 인덱스값을 받아 화면 css를 업데이트
   */
  const handleSnapToItem = (index: number) => {
    onSelectWeek(index + 1);
    setActiveIndex(index + 1);
  };

  /**
   * @function onSnapToItem
   * @param index
   * @description 캐러셀 아이템을 클릭하여 인덱스를 알아낸 다음 캐러셀아이템 포커스
   */
  const onSnapToItem = (index: number) => {
    carouselRef.current?.snapToItem(Number(index) - 1);
  };

  /**
   * @function renderItem
   * @param param0
   * @description 스크롤될때마다 activeItemStyle 적용
   */
  const renderItem = ({ item }: { item: any }) => {
    const activeItemStyle = item === activeIndex ? true : false;

    return (
      <CarouselItem
        weekNumber={item.toString()}
        active={activeItemStyle}
        onClickIndex={onSnapToItem}
      />
    );
  };

  return (
    <View style={styles.contianer}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={width} // 캐러셀의 전체 너비
        itemWidth={width / 5.5} // 각 슬라이드의 너비
        layout="default" // 레이아웃 모드 ("default", "stack", "tinder")
        loop={false} // 무한 루프 활성화
        inactiveSlideScale={1}
        onScrollIndexChanged={handleSnapToItem}
        vertical={false} // 이 부분이 추가되었습니다.
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
