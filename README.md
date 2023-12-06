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


    


   
