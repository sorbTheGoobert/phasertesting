// const { Phaser } = require("./phaser.min");

class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootgame");
    }
    create() {
        this.add.text(20, 20, "loading game");
        this.scene.start("playGame");
    }
}