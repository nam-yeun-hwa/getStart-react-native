# 테스트 샘플

<img src="https://private-user-images.githubusercontent.com/138950568/288378399-82d671ce-f18c-4015-8c07-5c3c4331308a.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE4NTk3ODYsIm5iZiI6MTcwMTg1OTQ4NiwicGF0aCI6Ii8xMzg5NTA1NjgvMjg4Mzc4Mzk5LTgyZDY3MWNlLWYxOGMtNDAxNS04YzA3LTVjM2M0MzMxMzA4YS5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMjA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTIwNlQxMDQ0NDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05ODhjNmVlOTJiYmYzMmU4MjY4NmNmY2RkODY4MDE4N2Y1NzQzMzQyNzRiYzZhMDc0OGZhNGIzZjdkM2EwODY4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.R-spfFGrAeu4PjsIU9hlv81x1OObrMIXatmfpqTG7KY"/>


# 사용한 라이브러리 
## 1. react-native-snap-carousel </br>
   설치 후 사용 중 `viewpropstypes will be removed from react native` 버그가 발생 하였다.</br>
   현재 최신 기준 react-native-snap-carousel 버전에서는 ViewPropTypes라는 모듈이 삭제되었는데, 현재 프로젝트에 설치된 버전에서 해당 모듈을 사용해서 생기는 이슈 같았다.</br>
</br></br>
   이슈와 관련된 링크) https://github.com/meliorence/react-native-snap-carousel/issues/923</br>

   최신 베타버전을 설치하는 것으로 문제를 해결 하였다.</br>

```shell
npm install react-native-snap-carousel@4.0.0-beta.6
```
</br>
</br>




## 캐러셀 주요 속성

```shell
 <View style={styles.contianer}>
      <Carousel
        ref={carouselRef}
        data={Array.from({ length: weeklyTotal }, (i, v) => v + 1)}
        renderItem={renderItem}
        sliderWidth={width} // 캐러셀의 전체 너비
        itemWidth={width / 5.5} // 각 슬라이드의 너비
        layout="default" // 레이아웃 모드 ("default", "stack", "tinder")
        loop={false} // 무한 루프 활성화
        inactiveSlideScale={1}
        onScrollIndexChanged={handleSnapToItem}
      />
    </View>
```
</br>
</br>

**itemWidth** </br>
캐러셀의 전체 넓이를 주고 itemWidth값의 넓이를 주어 화면에 보이는 캐러셀 아이템의 수를 조정할수 있고 padding이나 margin값으로 각 아이템당 간격을 조정 하였다.

**onScrollIndexChanged** </br>
캐러셀이 스크롤 될때마다 인덱스가 변경을 감지할수 있다. 
```shell
const handleSnapToItem = (index: number) => {
  //index가 들어온다.
};
```


**renderItem**

```shell
const carouselRef = useRef<any>(null);
```
를 캐러셀에 연결 시켜 주면 캐러셀 아이템에 인덱스 값을 변경하여 focus를 줄수 있다.
```shell
carouselRef.current?.snapToItem(Number(index) - 1);
```

</br>
</br>

## 2. react-native-reanimated


이 라이브러리는 React Native의 Animated API를 확장하고 최적화하여 성능을 향상시키고 더 복잡한 애니메이션을 더 쉽게 다룰 수 있도록 해준다.
    
React Native에서는 공식적으로 Animated API를 제공해주고 있지만
Animated API thread에서 비동기적으로 UI thread와 통신을 하며 이 때 JS thread가 할일이 많아지게 되면 **프레임 드롭이 생기는 문제가 발생**하게 되는 문제를 해결하기 위해 등장한 라이브러리 이며
애니메이션 및 상호 작용의 무거운 작업들을 모두 UI thread에서 작업한다.
    
shareValue의 변경을 감지하며 useSharedValue, useAnimatedStyle, withSpring, withTiming 등의 함수들을 사용하여 애니메이션 값을 정의하고, 이를 컴포넌트 스타일에 적용한다.

react-native-reanimated은 네이티브 스레드에서 애니메이션을 처리하므로, 성능이 향상된다. 기본적인 Animated API보다 훨씬 더 부드러운 애니메이션을 제공한다.
    
react-native-reanimated에서 제공하는 애니메이션 관련 컴포넌트들 (Animated.View, Animated.Text 등)을 사용하여 애니메이션을 정의한다.



사용예제)
```shell
    import React from 'react';
    import { View, Text, StyleSheet } from 'react-native';
    import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
    
    const MyAnimatedComponent = () => {
      const translateY = useSharedValue(0);
    
      const animatedStyle = useAnimatedStyle(() => {
        return {
          transform: [{ translateY: withSpring(translateY.value) }],
        };
      });
    
      const handlePress = () => {
        translateY.value = translateY.value === 0 ? 100 : 0;
      };
    
      return (
        <View style={styles.container}>
          <Animated.View style={[styles.box, animatedStyle]} />
          <Text onPress={handlePress}>Toggle Animation</Text>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      box: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
      },
    });
    
    export default MyAnimatedComponent;
```

</br>

사용법과 기능은 React Native Animated API와 유사하지만, 성능 및 기능 면에서 뛰어난 특징을 제공한다.


## setTimeOut을 Async / Await으로 구현하기

 **Toast 컴포넌트에서 setTimeout()으로 5초뒤 Toast 컴포넌트의 positionY값을 변경하여 애니메이션 해준 것과 관련**

### setTimeOut
```shell
function testSetTimeout(callback) {
  console.log("1. Before callback");
  setTimeout(function () {
    console.log("2. callback function");
    if (typeof callback === "function") {
      callback();
    } else {
      console.log("   Callback is not func!");
    }
  }, 3000);
  console.log("3. After callback");
}

(function runA() {
  testSetTimeout(function () {
    console.log("   Call about setTimeout callback func!!");
  });
})();

//1. Before callback
//3. After callback
//2. callback function
//Call about setTimeout callback func!!
```
### Async / Await
```shell
function testPromise(callback) {
  return new Promise((resolve, reject) => {
    if (typeof callback === "function") {
      console.log("1. callback is function.");
      setTimeout(() => {
        resolve(callback);
      }, 2000);
    } else if (typeof callback === "number") {
      console.log("1. callback number is " + callback);
      setTimeout(() => {
        resolve(callback);
      }, 2000);
    } else {
      reject("1. callback is not a function, number");
    }
  });
}

async function testAsync(x) {
  var a = testPromise(20)
  var b = testPromise(30)

  return x + await a + await b
}

testAsync(50).then(result => console.log(result))

//1. callback number is 20
//2. callback number is 30
//100
```
promise와 async는 명확히 앞서 하던 일들이 끝나면 다음 일을 할 수 있도록 명시해준다.


    


   
