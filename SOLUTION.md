# Solution Notes

## 기술 선정 문서

### 사용 기술 스택

- TypeScript
- React 18
- pnpm
- Prettier
- Vite
- Jotai
- Tailwind CSS
- Material UI
- Typed Design System

### 기술 선정 이유

- TypeScript
    - 기존 JavaScript에서 개발하면서 생기는 런타임 에러를 상당수 방지할 수 있고, 기존 자바스크립트 코드를 그대로 사용하며 점진적으로 TypeScript만의 기능을 추가할 수 있어서 러닝 커브 요구치가 낮다고 생각되어 도입했습니다.
- React 18
    - [React](https://reactjs.org/)를 사용하는 두 가지 이유는 반응성 유지와, 컴포넌트를 이용한 코드 재사용을 위해서입니다.
        - 반응성이란 것은 쉽게 말하면 데이터가 바뀌면 화면도 바뀌는 개념을 의미합니다. 기존 jQuery나 JavaScript DOM API에서는 재렌더링 과정이 명시적으로 상태 관리와 연동되어 동작하지 않았기 때문에 개발자가 명시적으로 콜백 함수등을 통해 데이터가 갱신된 이후에 DOM 갱신을 직접 구현해야 했고, 이것은 생산성 저하와 사용자에게 좋지 않은 경험을 줄 수 있습니다. 이런 문제를 피하기 위해서 React는 useState 훅을 제공함으로써 상태 변화시 자체적으로 데이터 갱신을 처리합니다. React 내부에서 단순히 컴포넌트를 다시 렌더링함으로써 구현할 수 있습니다. 조금 더 알아보시고 싶으시다면, 다음 문서들을 참고하세요.
            - [https://reactjs.org/docs/reconciliation.html](https://reactjs.org/docs/reconciliation.html)
            - [https://github.com/acdlite/react-fiber-architecture](https://github.com/acdlite/react-fiber-architecture)
        - 컴포넌트를 이용한 코드 재사용은 기존의 프론트엔드 라이브러리에서 제공해주지 않던 개념이었습니다. 저희는 Function Component를 사용하겠습니다. Class Component의 작동 원리인 Life Cycle은 프론트엔드 개발자를 혼란시키고, 생각으로 작동을 예상하는 것이 어려워 직관적이지 않습니다. FC에서 제공하는 Hooks를 사용하여 기본 공리를 조합하고 이용함으로써 수많은 비즈니스 로직을 작성할 수 있습니다. 기본 React Hooks의 목록과 상세 사항을 알아보시고 싶으시다면, 다음 문서를 참고하세요.
            - [https://reactjs.org/docs/hooks-intro.html](https://reactjs.org/docs/hooks-intro.html)
    - 물론 이 두 가지 요소는 대부분의 모던 프론트엔드 프레임워크들이 제공하는 요소기도 합니다. 수많은 프레임워크중 React를 선택한 가장 큰 이유는, 프론트엔드 개발자들이 사랑하고 가장 인기를 끄는 프레임워크이기 때문입니다. [Stack Overflow 2021 Developer Survey](https://insights.stackoverflow.com/survey/2021)에서 React는 Web framework 분야중 1위를 차지했습니다.
- pnpm
    - 기존에는 Yarn PnP를 사용했지만, pnpm이 더 disk efficient하며 성능이 좋고, Yarn PnP와 다르게 TypeScript SDK를 별도로 세팅할 필요가 없어서 선택하게 되었습니다.
- Prettier
    - 대규모 프로젝트의 경우에는 ESLint 기반으로 일원화한 다음, [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)를 사용해서 Prettier의 기능을 통합하는 것이 좋지만, 이번 과제를 진행함에 있어서 개발 툴체인 작업보다는 순수 개발을 하는 작업에 집중하는 비율이 많을 것이다, 혹은 많아야 한다고 생각되어, Linter / Formatter로는 단순히 tsc와 Prettier만 사용했습니다.
- Vite
    - [Create React App](https://create-react-app.dev/)는 기본 세팅으로 퍼포먼스 문제가 큰 Babel을 사용하고 있고, devDepenDencies와 dependencies를 구분하지 않아서 좋지 못한 설계를 가진 라이브러리라고 생각합니다.
    - 이에 비해 Vite는 Webpack을 대체하는 번들러 및 개발 서버의 역할을 하는 툴이면서, 제공하고 있는 Template의 완성도가 높아 사용하게 되었습니다.
- Jotai
    - 전역 상태 관리는 여전히 프론트엔드 생태계에서 중요한 토픽이라고 생각하고 있습니다.
    - Flux 패턴을 상속받은 Redux와, 조금 더 경량화한 Zustand 등이 있지만, 현재 요구사항은 복잡한 아키텍처가 아닌 Atom 정도에서 해결 가능하다고 생각했습니다.
    - Atom 기반으로 전역 상태 관리를 하는 라이브러리는 Recoil과 Jotai가 있는데, Jotai가 라이브러리 관리가 더 잘 이루어지고 있고, TypeScript와의 연동이 좋기 때문에 선택하게 되었습니다.
    - LocalStorage 기반 Persistence나 Redux Devtools등을 지원하는 미들웨어를 제공한다는 점도 좋아 보이는 부분이지만, 이 프로젝트에서 사용하지는 않았습니다.
- Tailwind CSS
    - Tailwind CSS는 개인적으로 기존에 많이 사용해 본 경험이 많아 익숙하며, jit mode를 통해 커스텀 값을 직접 적용할 수 있어 다른 CSS 스타일링 라이브러리에 의존하지 않고 생산성 높게 개발할 수 있습니다.
    - 코드의 가독성이나 통일성 문제가 대규모 협업에서는 어울리지 않다는 의견이 많지만, 이 프로젝트 규모에서는 고려하지 않아도 될 문제라고 생각하고 있습니다.
- Material UI
    - 프론트엔드 개발자가 컴포넌트를 바텀업으로 전부 개발하는 것 보다는, 공통 컴포넌트들을 제공해주는 라이브러리를 사용하는 것이 더 효율적이라고 생각합니다.
    - Google의 MUI 디자인 철학을 기반으로 React에서 사용할 수 있는 컴포넌트들을 제공해주기 때문에, 이번에도 유용하게 사용했습니다.
- Typed Design System
    - 해당 과제를 주관하는 Typed에서 개발한 디자인 시스템입니다.
    - TypedIcon과 TypedColor등, 디자인 구현에 필요한 부분을 TypeScript 기반으로 제공해주고 있어, 도움을 받았습니다.

## 설계 관련

### 폴더 구조

```
↳ tree
src
├── App.tsx // Provider를 포함한 메인 컴포넌트를 제공합니다.
├── atom // Jotai 기반 전역 상태 Atom을 제공합니다.
├── component // React 컴포넌트를 제공합니다.
├── index.css
├── main.tsx
├── type // 다른 코드에서 사용하는 있는 타입 정의를 제공합니다.
├── utils // 유틸리티성 전역 함수를 제공합니다.
└── vite-env.d.ts
```

### ActionIcon을 별개의 컴포넌트로 개발하게 된 이유

TypedIcon을 사용하며, 요구사항에서 필요한 부분인 onClick과 className을 커스텀할 필요가 있어, div 기반 Wrapper 컴포넌트를 만들어서 사용하게 되었습니다.

단순히 관련된 리액트 코드를 반복할수도 있지만, 컴포넌트를 활용한 DRY & 코드 재사용이 React를 사용하는 큰 이유라고 생각합니다.
