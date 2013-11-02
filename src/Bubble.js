/**
 * Created by ruiz_p on 30/10/13.
 */

define([], function() {

	function Bubble(x, y) {
		this.x = x;
		this.y = y;
		this.type = 0;
		// 5 colors
		this.color = 1 + Math.floor(Math.random() * 5);
		// 5 shapes
		this.shape = 1 + Math.floor(Math.random() * 5);
	}

	Bubble.prototype.changeToBubble = function() {
		// ID 10 = BUBBLE
		this.type = 10;
		this.color = 1 + Math.floor(Math.random() * 5);
		this.shape = 1 + Math.floor(Math.random() * 5);
	};

	Bubble.prototype.changeToPowerUp = function(powerpoint) {
		// powerpoint is the power of the powerup (1, 2, or 3)
		// There are three kinds of powerup
		// Bomb     : Small Bomb (id:1),    Big Bomb (id:4),        Giant Bomb (id:7)
		// Thunder  : Thunder Shot (id:2), Double Thunder (id:5),  Thunder Cross (id:8)
		// Ink      : Ink ball (id:3),      Ink attack (id:6),      Ink blender (id:9)
		if (powerpoint !== 1 || powerpoint !== 2 || powerpoint !== 3) {
			this.type = Math.floor(Math.random() * 3) * 3 + powerpoint;
		}
		else {
			// ID -1 = ERROR
			this.type = -1;
			Console.error("Invalid powerpoint for powerup : " + powerpoint + " X : " + this.x + " Y : " + this.y);
		}
	};

	Bubble.prototype.changeToVoid = function() {
		// ID 0 = EMPTY
		this.type = 0;
	};

	Bubble.prototype.copyFromBubble = function(bubble) {
		this.x = bubble.x;
		this.y = bubble.y;
		this.type = bubble.type;
		this.color = bubble.color;
		this.shape = bubble.shape;
	};

	Bubble.prototype.isCompatible = function(bubble) {
		return (this.type === bubble.type && (this.color === bubble.color || this.shape === bubble.shape));
	};

	return Bubble;
});