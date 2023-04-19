import React, { useEffect, useState } from "react";

function App() {
    const [loding, setLoding] = useState(true);
    return (
        <div className="container">
            <h1>hi, React</h1>
            {/* initNumber = props 할값 지정 */}
            <button
                onClick={() => {
                    setLoding(!loding);
                }}
            >
                컴포넌트 체인지
            </button>
            {loding ? (
                <FuncCmop initNumber={2} />
            ) : (
                <ClassComp initNumber={2} />
            )}
        </div>
    );
}

//함수형

const funStyle = "color:purple";

function FuncCmop(props) {
    const numberState = useState(props.initNumber); // ()안에 적힌값은 초기값
    console.log(numberState); //초기값, 변경될값 = 배열로 리턴됨

    const number = numberState[0];
    const setNumber = numberState[1];

    const [date, setDate] = useState(new Date().toString()); //state 정의 = 위의 문법 축약형

    useEffect(
        function () {
            //side effect
            console.log(`%cuseEffect는 언제 일어나지?`, funStyle); //1번
            //componentDidMount - 랜더링하자마자 , componentDidUpdate - 업데이트될때마다 실행 = 클래스에서 이 두가지와 같음
            document.title = number;

            return function () {
                //clean up 의미
                console.log(`%cuseEffect 왜안찍힘?`, funStyle);
                //업데이트 될때 return이 실행됨, 2번
                // 예) 구독할때 1번이 실행되고 다시 2번이 실행되면 구독취소가 됨, 계속남으면 자원낭비임(뷰에서 마운트시 실행되고 언마운트될때 사라지는 의미로 생각하면됨 - 이전값을 정리함)
            };
        },
        [number] //의존성 배열에 변수를 쓰게 되면 그 변수가 바뀔때만 실행됨
    ); //성능높이기 - 계속 불러오지 않고 어떠한 값이 바뀔때 마다 useEffect 실행시키기 = number값이 바뀔때만 실행시키기 - 바뀔때마다 1번이 실행되는것이 확인됨

    useEffect(
        function () {
            //side effect
            console.log(`%c의존성배열이 빈배열일때?`, funStyle); //1번
            //componentDidMount - 랜더링하자마자 , componentDidUpdate - 업데이트될때마다 실행 = 클래스에서 이 두가지와 같음
        },
        [] //의존성 배열에 변수를 쓰게 되면 그 변수가 바뀔때만 실행됨 - componentDidMount 와 같이 1번만실행하고 싶을땐 [] 빈배열을 적는당
    );

    //console.log(`%c함수형 useEffect`, funStyle); //콘소리찍을때 헷갈릴경우 %c를 쓰고 스타일을 주거나 하면 구분하기 쉬움

    return (
        //자기자신을 return을 사용 해서 리턴해줌
        <div className="container">
            <h2>함수형</h2>
            {/* <div>Number : {props.initNumber} </div> */}
            <div>Number : {number} </div>
            {/*props 값받기*/}
            <input
                type="button"
                value="random"
                onClick={function () {
                    setNumber(Math.random());
                }}
            />
            <div>Date : {date} </div>
            {/*props 값받기*/}
            <input
                type="button"
                value="date"
                onClick={function () {
                    setDate(new Date().toString());
                }}
            />
        </div>
    );
}

//클래스형
class ClassComp extends React.Component {
    //state 사용하기
    state = {
        number: this.props.initNumber,
        date: new Date().toString(),
    };
    //라이프 싸이클
    componentWillMount() {
        console.log("componentWillMount", "마운트됐나?"); //현재는 이것안씀
    }
    componentDidMount() {
        console.log(
            "componentDidMount",
            "첫번째 랜더링 후 발생 - render 뒤에 나와야지"
        );
        //2번 나오는 이유는 렌더 뒤에 <React.StrictMode> 이기 때문
    }
    componentDidUpdate() {
        console.log("componentDidUpdate", "업데이트할때마다");
        //2번 나오는 이유는 렌더 뒤에 <React.StrictMode> 이기 때문
    }
    render() {
        //render함수를 이용하여 리턴해 주어야함
        console.log("render", "랜더는 componentWillMount 다음이지");
        return (
            <div className="container container2">
                <h2>클래스형</h2>
                {/* <div>Number : {this.props.initNumber} </div> */}
                {/*props 값받기*/}
                <div>Number : {this.state.number} </div>
                {/*state 값받기*/}
                <input
                    type="button"
                    value="random"
                    onClick={function () {
                        this.setState({ number: Math.random() });
                    }.bind(this)}
                />
                {/*click 할때마다 값바꾸기 - bind(this)를 써주어야한다. */}
                <div>Date : {this.state.date} </div>
                <input
                    type="button"
                    value="date"
                    onClick={function () {
                        this.setState({ date: new Date().toString() });
                    }.bind(this)}
                />
            </div>
        );
    }
}

export default App;
