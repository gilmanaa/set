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
        return (
             <div className="board">
                 <CardRow />
                 <CardRow />
                 <CardRow />
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
        return (
             <div className="row">
                 <Card />
                 <Card />
                 <Card />
                 <Card />
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
        return (
             <div className="card">
                 <Shape thisShape={this.receiveRandom}/>
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
        return (
             <div className="shape">
                 <span></span>
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