//Stationary NPC creation class
function NPC (game, x, y, select) { 
    Phaser.Sprite.call(this, game, x, y, "emoteSprite");
		game.physics.enable(this, Phaser.Physics.ARCADE);	
    this.animations.add('emoteSprite', SelectNPC(select));
    this.animations.play('emoteSprite', 6, true);
    this.game.physics.arcade.enable(this);
    this.body.setSize(29, 28, 11, 44);
    this.body.immovable = true;
}

NPC.prototype = Object.create(Phaser.Sprite.prototype);
NPC.prototype.constructor = NPC;
	
NPC.prototype.update = function() {};	

//Selects NPC sprite cells from sprite sheet
function SelectNPC (select) {
    if (select == "Rogue") {
      return [30, 31, 32, 31];
    } else if (select == "Smith") {
      return [66, 67, 68, 67];
    }
}

function randomNumber (min, max) {
  return Math.floor((Math.random() * max) + min);
}


//Random Movement NPC creation class
function walkingNPC (game, x, y, select) { 
    Phaser.Sprite.call(this, game, x, y, "playerSprite");
//		game.physics.enable(this, Phaser.Physics.ARCADE);	
    this.game.physics.arcade.enable(this);
    this.body.setSize(29, 28, 11, 44);
    this.animations.add('emoteSprite', SelectNPC(select));
    this.animations.play('emoteSprite', 6, true);
    this.body.immovable = true;
    this.body.collideWorldBounds = true;
    this.body.linearDamping = 1;
  
}

walkingNPC.prototype = Object.create(Phaser.Sprite.prototype);
walkingNPC.prototype.constructor = walkingNPC;
	
var walkDuration = 0;
var direction = 2;
var moveTrigger = false;

walkingNPC.prototype.update = function() {
  
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;
    
    if (walkDuration == 0) {
      walkDuration = randomNumber(10, 50);
      direction = randomNumber(1,4);
      moveTrigger = false;
    }
  
    if (walkDuration > 0) {
      if (direction == 1) {
        //Up
        if (moveTrigger != true) {
          moveNPCUp(this); 
          moveTrigger = true;
        }
        this.body.velocity.y -= 100;
        this.body.velocity.x = 0;
        walkDuration--;
      } else if (direction == 2) {
        //Down
        if (moveTrigger != true) {
          moveNPCDown(this);
          moveTrigger = true;
        }
        this.body.velocity.y += 100;
        this.body.velocity.x = 0;
        walkDuration--;
      } else if (direction == 3) {
        //Left
        if (moveTrigger != true) {
          moveNPCLeft(this);
          moveTrigger = true;
        }
        this.body.velocity.x -= 100;
        this.body.velocity.y = 0;
        walkDuration--;
      } else if (direction == 4) {
        //Right
        if (moveTrigger != true) {
          moveNPCRight(this);
          moveTrigger = true;
        }
        this.body.velocity.x += 100;
        this.body.velocity.y = 0;
        walkDuration--;
      } else if (direction > 4) {
        //None
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;
        walkDuration--;
      } 
    }

};	

function moveNPCUp (obj) {
  obj.loadTexture('playerSprite');
  obj.animations.add('playerSprite', [45, 46, 47, 46]);
  obj.animations.play('playerSprite', 5, true);
}
function moveNPCDown (obj) {
  obj.loadTexture('playerSprite');
  obj.animations.add('playerSprite', [9, 10, 11, 10]);
  obj.animations.play('playerSprite', 5, true);
}
function moveNPCLeft(obj) {
  obj.loadTexture('playerSprite');
  obj.animations.add('playerSprite', [21, 22, 23, 22]);
  obj.animations.play('playerSprite', 5, true);
}
function moveNPCRight (obj) {
  obj.loadTexture('playerSprite');
  obj.animations.add('playerSprite', [33, 34, 35, 34]);
  obj.animations.play('playerSprite', 5, true);
}

/************************************************************/
/************************************************************/
/************************************************************/

//Random Movement Animal creation class
function walkingAnimal (game, x, y, select) { 
    Phaser.Sprite.call(this, game, x, y, "animalSprite");
//		game.physics.enable(this, Phaser.Physics.ARCADE);	
    this.game.physics.arcade.enable(this);
    this.body.setSize(60, 24, 12, 30);
    this.animations.add('animalSprite', SelectAnimal(select));
    this.animations.play('animalSprite', 6, true);
    this.body.immovable = true;
    this.body.collideWorldBounds = true;
    this.body.linearDamping = 1;
  
}

walkingAnimal.prototype = Object.create(Phaser.Sprite.prototype);
walkingAnimal.prototype.constructor = walkingAnimal;

//Selects NPC sprite cells from sprite sheet
function SelectAnimal (select) {
    if (select == "Bunny") {
      return [30, 31, 32, 31];
    } else if (select == "Fox") {
      return [57, 67, 68, 67];
    }
}
	
//var walkDuration = 0;
//var direction = 2;
//var moveTrigger = false;

walkingAnimal.prototype.update = function() {
  
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;
    
    if (walkDuration == 0) {
      walkDuration = randomNumber(10, 50);
      direction = randomNumber(1,4);
      moveTrigger = false;
    }
  
    if (walkDuration > 0) {
      if (direction == 1) {
        //Up
        if (moveTrigger != true) {
          moveAnimalUp(this); 
          moveTrigger = true;
        }
        this.body.velocity.y -= 100;
        this.body.velocity.x = 0;
        walkDuration--;
      } else if (direction == 2) {
        //Down
        if (moveTrigger != true) {
          moveAnimalDown(this);
          moveTrigger = true;
        }
        this.body.velocity.y += 100;
        this.body.velocity.x = 0;
        walkDuration--;
      } else if (direction == 3) {
        //Left
        if (moveTrigger != true) {
          moveAnimalLeft(this);
          moveTrigger = true;
        }
        this.body.velocity.x -= 100;
        this.body.velocity.y = 0;
        walkDuration--;
      } else if (direction == 4) {
        //Right
        if (moveTrigger != true) {
          moveAnimalRight(this);
          moveTrigger = true;
        }
        this.body.velocity.x += 100;
        this.body.velocity.y = 0;
        walkDuration--;
      } else if (direction > 4) {
        //None
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;
        walkDuration--;
      } 
    }

};	

function moveAnimalUp (obj) {
  obj.loadTexture('animalSprite');
  obj.animations.add('animalSprite', [93, 94, 95, 94]);
  obj.animations.play('animalSprite', 5, true);
}
function moveAnimalDown (obj) {
  obj.loadTexture('animalSprite');
  obj.animations.add('animalSprite', [57, 58, 59, 58]);
  obj.animations.play('animalSprite', 5, true);
}
function moveAnimalLeft(obj) {
  obj.loadTexture('animalSprite');
  obj.animations.add('animalSprite', [69, 70, 71, 70]);
  obj.animations.play('animalSprite', 5, true);
}
function moveAnimalRight (obj) {
  obj.loadTexture('animalSprite');
  obj.animations.add('animalSprite', [81, 82, 83, 82]);
  obj.animations.play('animalSprite', 5, true);
}


//https://www.w3schools.com/js/js_object_prototypes.asp