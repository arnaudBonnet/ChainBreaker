/**
 * Created by ruiz_p on 30/10/13.
 */

define([], function() {

	function TouchManager(playState) {
		this._playState = playState;
		addEventListener("touchstart", this.onTouchStart.bind(this), false);
		addEventListener("touchmove", this.onTouchMove.bind(this), false);
		addEventListener("touchend", this.onTouchEnd.bind(this), false);
		console.log("TouchManager construit et cree.");
	}

	TouchManager.prototype.onTouchStart = function() {
		console.log("On touch start event fired from touchManager.");
	};

	TouchManager.prototype.onTouchMove = function() {
		console.log("On touch move event fired from touchManager.");
	};

	TouchManager.prototype.onTouchEnd = function() {
		console.log("On touch end event fired from touchManager.");
	};

	return TouchManager;
});
