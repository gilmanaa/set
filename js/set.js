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
            isSet: false,
            cardsSelected: 0
        }
        this.countCards = this.countCards.bind(this)
        this.validateSelected = this.validateSelected.bind(this)
    }
    countCards() {
        this.setState({
            cardsSelected: this.state.cardsSelected + 1
        })
    }

    validateSelected(){
        var selectorCount = document.getElementsByClassName('selected');
        if(selectorCount.length === 3) {
            //run set test
        }
    }

    render() {
        console.log(this.state.cardsSelected);
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
                <CardRow cardCount={this.countCards} arrRow={row1} />
                <CardRow cardCount={this.countCards} arrRow={row2} />
                <CardRow cardCount={this.countCards} arrRow={row3} />
            </div>
        );
    }
}

class CardRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.cardCount = this.cardCount.bind(this)
    }
    cardCount() {
        this.props.cardCount();
    }
    render() {
        var row = this.props.arrRow
        return (
            <div className="row">
                <Card cardCount={this.cardCount} cardObj={row[0]} />
                <Card cardCount={this.cardCount} cardObj={row[1]} />
                <Card cardCount={this.cardCount} cardObj={row[2]} />
                <Card cardCount={this.cardCount} cardObj={row[3]} />
            </div>
        );
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSelected: false
        }
        this.selectCard = this.selectCard.bind(this);
    }

    selectCard(e) {
        this.setState({
            isSelected: !this.state.isSelected
        })
        this.props.cardCount();
    }

    render() {
        var myProps = this.props.cardObj;
        var numberShapes = myProps.number;
        var myArr = []
        for (var i = 0; i < numberShapes; i++) {
            myArr.push(<Shape key={i} objProps={myProps} />)
        }
        var selected = this.state.isSelected ? "selected" : "";
        return (
            <div className={`card ${selected}`} onClick={this.selectCard}>
                {myArr}
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
        var hello = this.props.objProps;
        var shape = hello.shape;
        var color = hello.color;
        var filling = hello.filling;
        return (
            <div className={shape + " " + color + " " + filling}>
            </div>
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