
(function(window){

	var speakWord = "Hello";

	var helloSpeaker = {

		name,
		speak: function() {
		console.log(speakWord + " " + this.name)
	}
};

window.helloSpeaker = helloSpeaker;

})(window);


