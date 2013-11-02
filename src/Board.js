/**
 * Created by ruiz_p on 30/10/13.
 */

define(['Bubble'], function(Bubble) {

	function Board() {
		this._board = [];
		for (var i = 0; i < 9; i++) {
			this._board[i] = [];
			for (var j = 0; j < 9; j++) {
				this._board[i][j] = new Bubble(j,i);
			}
		}

		this._score = 0;
		this._move = 10;
		this._combo = 0;
		this._lastbubble = new Bubble(-1,-1);
		this._lastbubble.changeToVoid();

		console.log("Plateau initialisé !");
	}

	Board.prototype.init = function() {
		//Should contain the same code as the Board's constructor.
	};

	/**
	Return the snapshot of the board in JSON form.
	*/
	Board.prototype.boardToJSON = function() {
		var jsonObj = {bubbles: []};

		for (var i = 0; i < 9; i++) {
			for (var j = 0; j < 9; j++) {
				var bubbleRef = this._board[i][j];
				jsonObj.bubbles.push({x: bubbleRef.x, y: bubbleRef.y, type: bubbleRef.type,
									  color: bubbleRef.color, shape: bubbleRef.shape});
			}
		}
		return jsonObj;
	};

	Board.prototype.playInput = function(x, y) {
		// Si la case n'est pas adjacente ? On sort
		if (checkIfAdjacent(x,y) === false) {
			return {};
		}

		// Si c'est vide ? On sort
		if (_board[y][x].type === 0) {
			return {};
		}

		// Si c'est la première bulle de la chaîne
		if (this._combo === 0 && _board[y][x].type === 10) {
			smashBubble(_board[y][x]);
			return {}; //TODO Animation de bulle
		}
		else {
			// Si c'est une bulle incompatible ? On sort
			if (_board[y][x].isCompatible(this._lastbubble) === true) {
				smashBubble(_board[y][x]);
				return {}; //TODO Animation de bulle
			}
			else {
				return {};
			}

			// Si c'est un powerUp -> Go PowerUp + Reaction en chaine Puis retour animation
			//Todo traiter cas du powerup + Reactions en chaines
		}
	};

	Board.prototype.checkIfAdjacent =  function(x, y) {
		if (_x === x && (_y - y === 1 || _y - y === -1)) {
			return true;
		}
		if (_y === y && (_x - x === 1 || _x - x === -1)) {
			return true;
		}
		return false;
	};

	Board.prototype.endOfChain = function() {
	//Todo Remettre le combo à zéro
	//Todo refill le plateau
	//Todo ajouter powerup
	//Todo Enlever un move du compteur
	//Todo Checker si move restant
	};

	Board.prototype.endOfMove = function() {
	//Todo Checker les possibilités restantes
	//Todo Retourner les animations de zoom
	};

	Board.prototype.smashBubble = function(bubble) {
		this._lastbubble.copyFromBubble(bubble);
		bubble.changeToVoid();
		_score++;
		_combo++;
	};

	Board.prototype.PowerUpSmallBomb = function(x, y) {

	};

	Board.prototype.PowerUpBigBomb = function(x, y) {

	};

	Board.prototype.PowerUpGiantBomb = function(x, y) {

	};

	Board.prototype.PowerUpThunderShot = function(x, y) {

	};

	Board.prototype.PowerUpDoubleThunder = function(x, y) {

	};

	Board.prototype.PowerUpThunderCross = function(x, y) {

	};

	Board.prototype.PowerUpInkBall = function(x, y) {

	};

	Board.prototype.PowerUpInkAttack = function(x, y) {

	};

	Board.prototype.PowerUpInkBlender = function(x, y) {

	};

	return Board;
});