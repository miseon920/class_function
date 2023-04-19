## 클래스 방식
- render함수를 이용하여 리턴해 주어야함

## 함수 방식
- 자기자신을 return을 사용 해서 리턴해줌
- 훅이 생기면서 state와 라이프싸이클을 관리 할 수 있게 되었다.

## props를 둘다 사용가능했음

## 리액트 설치 

1. 설치 : npx create-react-app . (현재 디렉토리에 설치할때 . 을 사용)

2. 확인하기 :
    1. cd 현재폴더이름명
    2. npm start : 현재폴더라면 2번만 터미널에 치면 된다.

## 리액트 라이프 싸이클
<https://react.vlpt.us/basic/25-lifecycle.html>
<https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/>

- 라이프 싸이클은 클래스 방식에서는 사용이 가능했고 함수방식에서는 훅이 생기기 전에는 불가능했음
- useEffect 훅을 사용해 라이프 싸이클을 관리할 수 있음(useEffect을 여러개 세팅할 수 있음)
- return 함수문을 사용하는것 = clean up (컴포넌트가 마운트될때 실행되며 컴포넌트가 unmount이전 / update직전에 실행하고 싶을 때 사용 - vue에서 mount, unmount에 작성하는 것과 같은 의미)
- 의존성 배열에 [] 빈배열을 적게되면 컴포넌트 랜더링시 1회만 실행하게 됨

## 새로운 리액트 문서 사이트
<https://react.dev/blog/2023/03/16/introducing-react-dev>