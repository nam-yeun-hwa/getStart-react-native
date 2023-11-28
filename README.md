# getStart-react-native

ViewPropsTypes will be removed from React Native

이슈1>

npx react-native@latest init frontend-assignment
위 명령어로 프로젝트 생성 중 아래와 같은 버그가 발생 하여 프로젝트 이름을 아래와 같이 변경 하였습니다.

Please use a valid identifier name (alphanumeric).
Run CLI with --verbose flag for more details.

<프로젝트 명 변경>
npx react-native@latest init frontend_assignment

이슈 2>

npx react-native@latest init frontend_assignment

위 명령어로 프로젝트를 생성 후 디렉터리를 확인 해 보았습니다만…
몇 폴더가 생성 되지 않았습니다.

- vendor

이슈 3>
npm install react-native-snap-carousel 를 설치 하였으나 캐러셀이 import 되지 않았다. 그래서 검색을 하다가 VS CDED 에서 제시 하는 대로 @type 키워드를 넣어 다시 설치 해 주었다. 잘 작동되는 듯 하였다.

npm i --save-dev @types/react-native-snap-carousel

에러 viewpropstypes will be removed from react native 가 발생 하여서 해당 내용을 또 검색 하였다.

현재기준 최신 react native 버전에서 ViewPropTypes라는 모듈이 삭제되었는데, react-native-snap-carousel에서는 해당 모듈을 사용해서 생기는 이슈인 것 같습니다..!
https://github.com/meliorence/react-native-snap-carousel/issues/923https://github.com/facebook/react-native/issues/33557
현재 react-native-snap-carousel 라이브러리에서 베타버전으로 해당 에러를 수정한 버전이 올라왔네요. 아래 커맨드로 버그가 픽스된 패키지를 설치하고 다시 해보시겠어요?
npm install react-native-snap-carousel@4.0.0-beta.6

그리하여 마지막으로 아래 버전으로 설치 하였다.

npm install react-native-snap-carousel@4.0.0-beta.6

이슈 4>
react-native-reanimated 을 사용하려고 컴포넌트에 적용중에 아래와 같은 버그가 떳다.

Error: [Reanimated] `valueUnpacker` is not a worklet, js engine: hermes
LOG Running "frontend_assignment" with {"rootTag":1,"initialProps":{}}
ERROR Invariant Violation: "frontend_assignment" has not been registered. This can happen if:

- Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.
- A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called., js engine: hermes

첫번째로 캐시를 지워줬다.
npm start -- --reset-cache

그러나 다른 에러가 나타났다.

Recrawled this watch 3 times, most recently because:
MustScanSubDirs UserDroppedTo resolve, please review the information on
https://facebook.github.io/watchman/docs/troubleshooting.html#recrawl
To clear this warning, run:
`watchman watch-del '/Users/nam-yeonhwa/Desktop/assign/getStart-react-native' ; watchman watch-project '/Users/nam-yeonhwa/Desktop/assign/getStart-react-native'`
번역

이 경고는 Facebook의 Watchman 도구에서 나오는 것으로 보입니다. Watchman은 파일 시스템을 모니터링하여 변경 사항을 감지하는 데 사용되는 도구입니다. 이 경고는 Watchman이 특정 디렉토리를 여러 번 다시 스캔해야 하는 경우에 발생합니다. 이는 주로 Watchman이 디렉토리 내에서 하위 디렉토리를 스캔해야 하는 경우에 발생합니다.

Watchman 경로 재설정:

watchman watch-del '/Users/nam-yeonhwa/Desktop/assign/getStart-react-native'
watchman watch-project '/Users/nam-yeonhwa/Desktop/assign/getStart-react-native'

-     	이렇게 하면 Watchman이 해당 경로를 다시 감시하고 스캔할 수 있도록 설정됩니다.
-
- Watchman 재시작 해주고watchman shutdown-server

그런 다음 Watchman을 다시 시작합니다.

watchman watch-del-all
이렇게 하면 Watchman이 모든 감시 중인 디렉토리를 중지하고 다시 시작합니다.

이 모든 활동 후에 에러가 사라졌다.

이슈 5> App.js에 Toast 팝업을 추 가하려고 컴포넌트를 넣었는데

<>
<WeeklySchedule />;
</>

아래 버그가 발생 하였다…. 텍스트 값을 사용하지 않았는데 에러가 나서 어디서 애러가 났는지 찾는데 시간이 좀 걸렸다.

Error: Text strings must be rendered within a <Text> component.

This error is located at:
in App
in RCTView (created by View)
in View (created by AppContainer)
in RCTView (created by View)
in View (created by AppContainer)
in AppContainer
in frontend_assignment(RootComponent), js engine: hermes

해결점은… 말그대로 Text로 감싸주었더니 우선 에러가 사라졌다…

<Text>
      <WeeklySchedule />;
    </Text>

왜인지는 더 찾아보아야 할것 같다.
