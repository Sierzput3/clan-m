class Player {
    constructor(name) {
        this.name = name;
        this.position = { x: 0, y: 0 }; // Player occupies 1x1 space
    }

    move(x, y) {
        this.position.x += x;
        this.position.y += y;
    }
}

class GameMap {
    constructor(size) {
        this.size = size;
        this.map = this.initializeMap();
        this.players = [];
    }

    initializeMap() {
        return Array.from({ length: this.size }, () => Array(this.size).fill(null));
    }

    addPlayer(player) {
        if (this.isPositionValid(player.position)) {
            this.players.push(player);
            this.map[player.position.y][player.position.x] = player;
        } else {
            console.log('Invalid position for player.');
        }
    }

    isPositionValid(position) {
        return (position.x >= 0 && position.x < this.size && position.y >= 0 && position.y < this.size);
    }
}

// Initialize a 10x10 game map
const gameMap = new GameMap(10);
const player1 = new Player('Player 1');
gameMap.addPlayer(player1);
console.log(gameMap);