'use strict';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            robotPosition: 2,
            mapSize: 8,
            icon: 'r',
        };
    }

    availablePosition(newPosition, mapSize) {
        if (newPosition >= 0 && newPosition < mapSize) {
            return true;
        } else {
            return false;
        }
    }

    move(newPosition) {
        if (this.availablePosition(newPosition, this.state.mapSize)) {
            this.setState({robotPosition: newPosition});
            return true;
        } else {
            return false;
        }
    }

    render() {
        let cells = [];
        for (let x = 0; x < this.state.mapSize; x++) {
            let cell = React.createElement(
                'div',
                {className: 'map-cell', key: x},
                this.state.robotPosition === x ? this.state.icon : ''
            )
            cells.push(cell);
        }

        let row = React.createElement('div', {className: 'map-row'}, cells);

        let buttonLeft = React.createElement(
            'button', 
            {
                onClick: () => this.move(this.state.robotPosition - 1)
            }, 
            '<='
        )
        let buttonRight = React.createElement(
            'button', 
            {
                onClick: () => this.move(this.state.robotPosition + 1)
            }, 
            '=>'
        )
        let controlPanel = React.createElement('div', {className: 'control-panel'}, buttonLeft, buttonRight);

        let gameMap = React.createElement('div', {className: 'game-map'}, row, controlPanel);
        return gameMap;
    }

}

const domContainer = document.querySelector('#game-map');
ReactDOM.render(React.createElement(Game), domContainer);