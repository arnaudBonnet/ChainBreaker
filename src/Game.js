/**
 * Created by pierreruiz on 29/09/13.
 */

define(['TW/Utils/inherit', 'TW/GameLogic/GameStateStack', 'TW/GameLogic/Gameloop', 'PlayState'], function(inherit, GSS, Gameloop, PlayState) {

	function Game(canvas) {
		GSS.call(this, canvas);
		this.gameloop = new Gameloop();
		this.gameloop.addObject(this);
	}

	inherit(Game, GSS);

	Game.prototype.start = function(){
		this.gameloop.start();
		console.log('Game started, pushing PlayState on the stack !');
		var playState = new PlayState();
		this.push(playState);
		playState.init();
	};

	return Game;
});