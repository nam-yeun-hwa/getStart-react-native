## 진행하면서 나타는 이슈들

### 이슈1

npx react-native@latest init frontend-assignment
위 명령어로 프로젝트 생성 중 아래와 같은 버그가 발생 하여 프로젝트 이름을 아래와 같이 변경 하였습니다.

`Please use a valid identifier name (alphanumeric).
Run CLI with --verbose flag for more details.`

<프로젝트 명울 언더바로 변경>
npx react-native@latest init frontend_assignment

### 이슈 2

상단 Week을 선택하는 메뉴에서 react-native-swiper를 이용하려 하였으나 웹에서 지원되는 속성 예를 들면 "centeredSlides" 속성이 react-native에서는 존재하지 않았습니다.

예) https://codesandbox.io/p/sandbox/6gw7p4?file=%2Fsrc%2FApp.jsx%3A17%2C7-26%2C8

```<Swiper
    slidesPerView={4}
    spaceBetween={30}
    centeredSlides={true}
    pagination={{
        clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
/>
```

그리하여 여러가지 라이브러리를 검색하여 그중에 가장 사용자가 많은 라이브러리인 react-native-snap-carousel를 선택 하였습니다.

npm install react-native-snap-carousel 명령어로 바로 설치를 진행하였는데 현재 프로젝트와 호완이 되지 않는것 인지

VSCODE에서 react-native-snap-carousel를 찾지 못하고 import 되지 않았습니다.

해결법을 찾던 중 VS CDED에서 제시 하는 대로 @type 키워드를 넣어 다시 설치해 보았습니다.

`npm i --save-dev @types/react-native-snap-carousel`

이번엔 다행이도 import가 되었으나 캐러샐 컴포넌트를 구성하는 중에 아래와 같은 에러가 발생 했습니다.

viewpropstypes will be removed from react native

검색을 한 결과 현재 최신 기준 react-native-snap-carousel 버전에서는 ViewPropTypes라는 모듈이 삭제되었는데, 현재 프로젝트에 설치된 버전에서 해당 모듈을 사용해서 생기는 이슈 같았습니다.

이슈와 관련된 링크)
https://github.com/meliorence/react-native-snap-carousel/issues/923

위 링크에서 몇가지 방법 중 최신 베타버전을 설치하는 것으로 문제를 해결 하였습니다.

`npm install react-native-snap-carousel@4.0.0-beta.6`
이 후에는 문제 없이 잘 사용 할 수 있었습니다.

### 이슈 3

react-native-reanimated 을 사용하려고 컴포넌트에 적용중에 아래와 같은 버그가 나타났습니다.

Recrawled this watch 3 times, most recently because:
MustScanSubDirs UserDroppedTo resolve, please review the information on
https://facebook.github.io/watchman/docs/troubleshooting.html#recrawl
To clear this warning, run:
`watchman watch-del '/Users/nam-yeonhwa/Desktop/assign/getStart-react-native' ; watchman watch-project '/Users/nam-yeonhwa/Desktop/assign/getStart-react-native'`

이 메시지는 Watchman이 프로젝트 디렉토리의 변경을 정확하게 감지하지 못할때 발생하는 에러로
ChatGPT의 도움을 받아 아래의 순서대로 실행해 주었습니다.

1. Watchman 경로 재설정

터미널에서)
watchman watch-del '/Users/nam-yeonhwa/Desktop/assign/getStart-react-native'
watchman watch-project '/Users/nam-yeonhwa/Desktop/assign/getStart-react-native'

- 이렇게 하면 Watchman이 해당 경로를 다시 감시하고 스캔할 수 있도록 설정됩니다.

2. Watchman을 다시 시작

터미널에서)

watchman shutdown-server
watchman watch-del-all

이렇게 하면 Watchman이 모든 감시 중인 디렉토리를 중지하고 다시 시작합니다.

위 작업으로 해당 에러가 해결 되었습니다.

## 진행하면서 가장 신경써서 작업한 부분

제가 과제를 진행 하면서 가장 신경썻던 부분은 피그마의 디자인 그대로 앱에서 똑같이 느낄수 있었으면 좋겠다고 생각하여 CSS에 신경을 썻고
동영상으로 보여주신 앱에서 느껴지는 부드러운 화면의 모션감을 그대로 잘 살릴 수 있도록 노력 하였습니다.
