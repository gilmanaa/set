class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="container">
                <Board />
            </div>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        let numbers = [1, 2, 3];
        let filling = ['full', 'empty', 'lined'];
        let color = ['red', 'blue', 'green'];
        let shape = ['square', 'circle', 'triangle'];


        let firstSet = [{
            number: numbers[0],
            filling: filling[0],
            color: color[0],
            shape: shape[0]
        },
        {
            number: numbers[1],
            filling: filling[1],
            color: color[2],
            shape: shape[1]
        },
        {
            number: numbers[0],
            filling: filling[2],
            color: color[2],
            shape: shape[2]
        },
        {
            number: numbers[0],
            filling: filling[2],
            color: color[2],
            shape: shape[1]
        },
        {
            number: numbers[0],
            filling: filling[2],
            color: color[1],
            shape: shape[1]
        },
        {
            number: numbers[0],
            filling: filling[1],
            color: color[1],
            shape: shape[1]
        },
        {
            number: numbers[0],
            filling: filling[1],
            color: color[1],
            shape: shape[1]
        },
        {
            number: numbers[0],
            filling: filling[1],
            color: color[1],
            shape: shape[0]
        },
        {
            number: numbers[0],
            filling: filling[1],
            color: color[1],
            shape: shape[1]
        },
        {
            number: numbers[0],
            filling: filling[1],
            color: color[2],
            shape: shape[1]
        },
        {
            number: numbers[0],
            filling: filling[1],
            color: color[2],
            shape: shape[1]
        },
        {
            number: numbers[2],
            filling: filling[1],
            color: color[2],
            shape: shape[1]
        },
        ]
        var row1 = firstSet.slice(0, 4)
        var row2 = firstSet.slice(4, 8)
        var row3 = firstSet.slice(8, 12)
        return (
            <div className="board">
                <CardRow arrRow={row1} />
                <CardRow arrRow={row2} />
                <CardRow arrRow={row3} />
            </div>
        );
    }
}

class CardRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        var row = this.props.arrRow
        return (
            <div className="row">
                <Card cardObj={row[0]} />
                <Card cardObj={row[1]} />
                <Card cardObj={row[2]} />
                <Card cardObj={row[3]} />
            </div>
        );
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        var myProps = this.props.cardObj;
        return (
            <div className="card">
                <Shape objProps={myProps} />
            </div>
        );
    }
}

class Shape extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        console.log(this.props.objProps)
        var hello = this.props.objProps;
        var shape = hello.shape;
        console.log(shape)
        return (
<<<<<<< HEAD
            <div className={shape}>
            </div>
=======
             <div className="shape">
                 <div className="circle empty red "></div>
                 <div className="square lined blue "></div> 
                 <div className="triangle full green"></div>
             </div>
>>>>>>> 2683593379d48131aded773f2eeb33a3ec765dc4
        );
    }
}

function render() {

    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}
render()