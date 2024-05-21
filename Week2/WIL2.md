# Weekly I Learned 2

### HTML, CSS, JavaScript

- **JavaScript가 DOM에 어떻게 접근하고 적용될까?**

    JavaScript는 DOM의 인터페이스를 이용하여 DOM에 접근할 수 있다. `document.getElementById(id)`를 통해 특정 id로 접근하거나, `document.createElement(name)`을 통해 동적으로 노드를 생성하는 등 다양한 동작이 가능하다.

- **브라우저를 이루는 컴포넌트 중, JavaScript Engine은 무엇이고 어떤 일을 할까?**

    JavaScript Engine은 JavaScript 코드를 실행하는 인터프리터이다. 브라우저 별로 각각 다른 엔진을 채택하고 있는데, 대표적으로 FireFox의 SpiderMonkey, 그리고 Google Chrome의 V8이 있다. 추가로, JavaScript Engine은 Memory Heap & Call Stack 구조를 통해 런타임 중 코드 실행을 관리한다. 

- **inline CSS가 항상 좋은 것일까? 아니라면 그 이유는 무엇일까?**

    개발자 도구에서 확인해 보면, CSS 파일을 따로 link해서 받아오는 방식(External CSS)을 사용하면 네트워크를 사용하는 것을 알 수 있다. 그러나 inline CSS 방식을 따른다면 그러한 네트워크 지연이 없다. 그렇다면 inline CSS가 항상 좋은 것일까?

    분명 속도 면에서는 inline CSS 방식이 우수하긴 하나, CSS 파일을 링크하는 방식에도 장점이 있다.
    
    1. CSS 파일을 HTML 외부에서 관리하기 때문에 유지보수가 편하고, 코드 가독성도 좋아진다.
    
    2. 만일 방문했던 사이트라면, 로컬 브라우저에 CSS 파일을 캐싱해놓기 때문에 네트워크 지연 문제가 사라진다.
    
    웹사이트의 로딩 시간 문제를 개선하고, 상기한 이점을 활용하기 위해서, 중요한 렌더링 요소나 제일 먼저 로드해야 하는 부분들만 따로 inline CSS 방식을 사용하고, 나머지는 External CSS 방식을 따르기도 한다. 이를 *Critical CSS* 라고 한다.

---

### Week 2 

과제를 통해 JavaScript에 대하여 학습하며, 개인적으로 알아놓아야 할 필요성을 느낀 부분에 대하여 작성하였다.

- **하위호환**

    HTML 파일 내에서 script 태그가 쓰이는 용례를 찾아보며, 다음의 두 방식이 혼용되고 있음을 발견했다.

    1. `<script type="text/javascript"></script>`

    2. `<script></script>`

    두 코드 모두 실행 결과는 같은데, 코드에는 왜 이러한 차이가 있을까?

    이전에는 JavaScript 외의 스크립트 언어가 사용되었기 때문에 type 속성을 통해서 언어를 명시해주어야 했다. 그러나 HTML5에서는 type 속성의 default 값이 text/javascript로 지정되기 때문에 굳이 1번처럼 선언해 줄 필요가 없다. 1번처럼 사용하는 이유는 하위 호환성을 위해서이다.
    