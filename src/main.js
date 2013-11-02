/**
 * Created by pierreruiz on 28/09/13.
 */

requirejs.config({
	baseUrl: 'src',
	paths: {
		TW: '../tumbleweed/modules'
		}
});

define(['TW/Preload/Loader', 'TW/Graphic/Window', 'Game', 'Board'],function(Loader, Window, Game, Board) {


	// Get Canvas
	var canvas = document.getElementById('mainCanvas');
	// Create window
	var win = new Window(canvas);

	// Loading assets

	var assets = [
		{src:"asset/img/powerup/a1.png", id:'pwupA1', type: 'image'},
		{src:"asset/img/powerup/a2.png", id:'pwupA2', type: 'image'},
		{src:"asset/img/powerup/a3.png", id:'pwupA3', type: 'image'},
		{src:"asset/img/powerup/b1.png", id:'pwupB1', type: 'image'},
		{src:"asset/img/powerup/b2.png", id:'pwupB2', type: 'image'},
		{src:"asset/img/powerup/b3.png", id:'pwupB3', type: 'image'},
		{src:"asset/img/powerup/c1.png", id:'pwupC1', type: 'image'},
		{src:"asset/img/powerup/c2.png", id:'pwupC2', type: 'image'},
		{src:"asset/img/powerup/c3.png", id:'pwupC3', type: 'image'}
	];

	var loader = new Loader();
	loader.loadManyFiles(assets);
	loader.once('complete', startGame);
	loader.start();


	// Start the game
	function startGame() {
		var chainbreaker = new Game(document.getElementById('mainCanvas'));

		chainbreaker.shared = {
		board : new Board()
		}

		chainbreaker.start();

	}

});