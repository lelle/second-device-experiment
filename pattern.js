
/*
	This is a pattern for media components supporting 
	timing objects as timingsrc.

	Setting the timingsrc does not imply any complexity 
	for the programming of the media component, all of this
	is handled by the implementation of timing objects.

	All logic may therefore be developed by relative to this.to. 
	Setting the timingsrc only results in a "change" event from this.to, 
*/

var MediaComponent = function (timingObject) {
	this._to = timingObject;
};

/*
	timingsrc property and switching on assignment
*/
Object.defineProperty(MediaComponent.prototype, 'timingsrc', {
	get : function () {
		return this._to.timingsrc;
	},
	set : function (timingsrc) {
		this._to.timingsrc = timingsrc;
	}
});
