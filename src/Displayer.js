/**
 * Created by ruiz_p on 30/10/13.
 */

define(['GSprite'], function(GSprite) {

	function Displayer() {
		this._sprites = [];
		console.log('Displayer object has just been created.');
	}

	Displayer.prototype.init = function(json) {
		if (json && json.bubbles && json.bubbles.length == 9*9) {
				for (var i = 0; i < 81; i++) {
						var params = {};
						params._position = {x: json.bubbles[i].x, y: json.bubbles[i].y};
						params._rotation = 0;
						params._alpha = 1.0;
						params._scale = 1.0;
						params._type = json.bubbles[i].type;
						params._color = json.bubbles[i].color;
						params._shape = json.bubbles[i].shape;
						this._sprites.push(new GSprite(params));
				}
			return true;
		} else {
			return false;
		}
	}

	Displayer.prototype.update = function(elapsedTime) {
		for (var i = 0; i < this._sprites.length; i++) {
			this._sprites[i].update(elapsedTime);
		}		
	};

	Displayer.prototype.draw = function(context) {
		for (var i = 0; i < this._sprites.length; i++) {
			this._sprites[i].draw(context);
		}
	};
	return Displayer;
});