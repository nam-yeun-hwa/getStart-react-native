/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

//TODO:
//type 정리
//애니메이션 컴포넌트 범위 체크해보기
//맨마지막 id값의 인덱스가 0일 경우 메뉴의 길이가 14로 줄어듬
//좌우 스크롤시 컴포넌트 애니메이션 초기값에 의한 잔상이 남음
//carouseMenu에서 ref의 current 값의 인덱스 값을 참조하여 css 참조하는 것을 체크해볼 것
import 'react-native-gesture-handler';
import 'react-native-reanimated';

import WeeklySchedule from './src/pages/WeeklySchedule';

function App() {
  return (
    <>
      <WeeklySchedule />
    </>
  );
}

export default App;
