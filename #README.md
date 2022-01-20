## React Navigation

- React Navigation 은 RN에서 navigation을 만드는 독보적 패키지
- stack
- tab
- drawer
- deep linking
- modal

### docs

https://reactnavigation.org/docs/getting-started

### ScrollView vs FlatList

#### ScrollView

- 모든 자식 컴포넌트를 한 번에 render 한다.
- application을 새로고침하면 스크롤 끝까지 가지 않더라도 끝까지 다 랜더링된다.

10923b261ba94d897ac6b81148314a3f

#### FlatList

- 컴포넌트가 화면에 나타나기 직전에 컴포넌트를 render 한다.
- lazy render
- 빠르고 포포몬쓰가 좋아진다.

#### SectionList

- stiky header 가능!
