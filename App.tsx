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
