define(['TW/Utils/inherit', 'TW/GameLogic/GameState', 'TouchManager', 'Displayer'], function(inherit, gameState, TouchManager, Displayer) {
	function PlayState() {
		gameState.call(this);
		this._touchManager = new TouchManager(this);
		this._displayer = new Displayer();
	}

	inherit(PlayState, gameState);

	/**
	Je me suis permis de declarer une fonction update qui va permettre de mettre a jour
	regulierement l'etat PlayState (Et donc le board et les GSprite)
	*/
	PlayState.prototype.update = function(elapsedTime) {
		if (this.updateDisplayed == undefined) {
			console.log("PlayState's update method has just been called. (we display it just one time otherwise it will looks untidy in the console.)");
			this.updateDisplayed = true;
		}
	};

	/**
	Idem pour le draw que pour le update.
	*/
	PlayState.prototype.draw = function(context) {
		if (this.updateDraw == undefined) {
			console.log("Playstate's draw method has just been called. (we display it just one time otherwise it will looks untidy in the console.)");
			this.updateDraw = true;
		}
	};

	return PlayState;
});