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

### 기술 선정의 이유

- TypeScript
    - 기존 JavaScript에서 개발하면서 생기는 런타임 에러를 상당수 방지할 수 있고, 기존 자바스크립트 코드를 그대로 사용하며 점진적으로 TypeScript만의 기능을 추가할 수 있어서 러닝 커브 요구치가 낮다고 생각되어 도입했습니다.
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
    - Atom 기반으로 전역 상태 관리를 하는 라이브러리는 Recoil과 Jotai가 있는데, Jotai가 오픈소스 관리가 더 잘 이루어지고 있고, TypeScript와의 연동이 좋기 때문에 선택하게 되었습니다.
    - LocalStorage 기반 Persistence나 Redux Devtools 지원을 하고 있는 미들웨어를 제공한다는 점도 좋아 보이는 부분이지만, 이 프로젝트에서 사용하지는 않았습니다.
- Tailwind CSS
    - Tailwind CSS는 개인적으로 기존에 많이 사용해 본 경험이 많아 익숙하며, jit mode를 통해 커스텀 값을 직접 적용할 수 있어 다른 CSS 스타일링 라이브러리에 의존하지 않고 생산성 높게 개발할 수 있습니다.
    - 코드의 가독성이나 통일성 문제가 대규모 협업에서는 어울리지 않다는 의견이 많지만, 이 프로젝트 규모에서는 고려하지 않아도 될 문제라고 생각하고 있습니다.
- Material UI
    - 프론트엔드 개발자가 컴포넌트를 바텀업으로 전부 개발하는 것 보다는, 공통 컴포넌트들을 제공해주는 라이브러리를 사용하는 것이 더 효율적이라고 생각합니다.
    - Google의 MUI 디자인 철학을 기반으로 React에서 사용할 수 있는 컴포넌트들을 제공해주기 때문에, 이번에도 유용하게 사용했습니다.
- Typed Design System
    - 해당 과제를 진행하는 Typed (비즈니스캔버스) 에서 개발한 디자인 시스템입니다.
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