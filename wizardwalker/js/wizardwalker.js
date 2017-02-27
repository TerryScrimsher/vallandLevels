var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('lich', 'img/monster_lich.png');
    game.load.spritesheet('standStill', 'img/monster_lich.png', 94, 101, 2);
    game.load.spritesheet('moveDown', 'img/monster_lich.png', 94, 101, 3);
    game.load.spritesheet('moveUp', 'img/monster_lich.png', 94, 101, 12);
    game.load.spritesheet('moveLeft', 'img/monster_lich.png', 94, 101, 12);
    game.load.spritesheet('moveRight', 'img/monster_lich.png', 94, 101, 12);
}

var sprite;
var cursors;
var movementDirection = "stand";

function create() {

    //game.add.image(0, 0, 'sky');

	//	Enable p2 physics
	game.physics.startSystem(Phaser.Physics.P2JS);

    //  Make things a bit more bouncey
    game.physics.p2.defaultRestitution = 0.8;

    createCharacter();

    //  Enable if for physics. This creates a default rectangular body.
	game.physics.p2.enable(sprite);

    //  Modify a few body properties
	sprite.body.setZeroDamping();
	sprite.body.fixedRotation = true;

    cursors = game.input.keyboard.createCursorKeys();

}

function update() {

	sprite.body.setZeroVelocity();

    if (game.input.keyboard.isDown(Phaser.Keyboard.A))
    {
        if (movementDirection != "left") {
            moveLeft();
        }
    	sprite.body.moveLeft(200);
        
        if (game.input.keyboard.isDown(Phaser.Keyboard.W))
        {
    	   sprite.body.moveUp(200);
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.S))
        {   
    	   sprite.body.moveDown(200);
        }
        
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.D))
    {
        if (movementDirection != "right") {
            moveRight();
        }
    	sprite.body.moveRight(200);
        
        if (game.input.keyboard.isDown(Phaser.Keyboard.W))
        {
    	   sprite.body.moveUp(200);
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.S))
        {   
    	   sprite.body.moveDown(200);
        }
        
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.W))
    {
        if (movementDirection != "up") {
            moveUp();
        }
    	sprite.body.moveUp(200);
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.S))
    {   
        if (movementDirection != "down") {
            moveDown();
        }
    	sprite.body.moveDown(200);
    } else {
        if (movementDirection != "stand") {
            standStill();
        }
    }

}

function createCharacter () {
    sprite = game.add.sprite(200, 200, 'standStill', 1);
}

function standStill () {
    movementDirection = "stand";
    
    sprite.loadTexture('standStill', 1);
}

function moveUp () {
    movementDirection = "up";
    
    sprite.loadTexture('moveUp');
    sprite.animations.add('moveUp', [9, 10, 11]);
    sprite.animations.play('moveUp', 5, true);
}

function moveDown () {
    movementDirection = "down";
    
    sprite.loadTexture('moveDown');
    sprite.animations.add('moveDown');
    sprite.animations.play('moveDown', 5, true);
}

function moveLeft () {
    movementDirection = "left";
    
    sprite.loadTexture('moveLeft');
    sprite.animations.add('moveLeft', [3, 4, 5]);
    sprite.animations.play('moveLeft', 5, true);
}

function moveRight () {
    movementDirection = "right";
    
    sprite.loadTexture('moveRight');
    sprite.animations.add('moveRight', [6, 7, 8]);
    sprite.animations.play('moveRight', 5, true);
}



