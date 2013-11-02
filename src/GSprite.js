/**
 * Created by ruiz_p on 30/10/13.
 */

define(['GTween'], function(GTween) {

	/**
	Pour le moment j'ai imagine que le constructeur de GSprite prenait en argument un objet params et que l'on transferait les parametres
	Contenu dans params vers l'objet GSprite.
	*/
	function GSprite(params) {
		(params._position == undefined ? this._position = {x: 0, y: 0} : this._position = params._position);
		(params._rotation == undefined ? this._rotation = 0 : this._rotation = params._rotation);
		(params._alpha == undefined ? this._alpha = 1.0 : this._alpha = params._alpha);
		(params._scale == undefined ? this._scale = 1.0 : this._scale = params._scale);
		(params._tween == undefined ? this._tween = null : this._tween = params._tween);
		(params._type == undefined ? this._type = 0 : this._type = params._type);
		(params._color == undefined ? this._color = 1 : this._color = params._color);
		(params._shape == undefined ? this._shape = 1 : this._shape = params._shape);
	}

	/**
	WARNING !
	Dans le diagramme de classe, tu indiques que le update de GTween doit etre appelle avec comme parametre le GSprite ainsi qu'un
	objet Date, il se trouve que les methodes update se transmettent automatiquement un elapsed time grace a la gameLoop, il suffit donc
	de transmettre ce elapsedTime je suppose, ainsi nous pouvons eviter la creation d'un objet Date, qui n'est en theorie pas necessaire car
	effectuee en amont par la Gameloop.
	*/
	GSprite.prototype.update = function(elapsedTime) {
		//A chaque update du GSprite, si il possede une tween alors on update la tween en lui passant le elapsed time.
		if (this._tween !== null) {
			this._tween.update(this, elapsedTime);
		}
	};

	/**
	WARNING !
	Je me suis permis d'ajouter une methode draw dans la classe GSprite, car le GSprite aura besoin d'etre dessine, et pour ce faire il va falloir lui
	passer un contexte graphique (Fonctionnement similaire au TW.Sprite), Si je n'ai pas fait d'heritage direct avec TW.Sprite, c'est parce que TW.Sprite
	ne gere que des images et dans notre cas il faudra aussi gerer des formes geometriques tracees au runtime.
	*/
	GSprite.prototype.draw = function(context) {
		var width = context.canvas.width;
		var height = context.canvas.height;

		var stepX = width / 9;
		var stepY = height / 9;

		context.fillRect((this._position.x * stepX) + 1, (this._position.y * stepY) + 1, stepX - 2, stepY - 2);
	};

	return GSprite;
});