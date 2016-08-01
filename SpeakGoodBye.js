
(function(window){

	var speakWord = "Good Bye";

	var byeSpeaker ={

		name,
		speak: function() {
	  	console.log(speakWord + " " + this.name)
	}
};

window.byeSpeaker = byeSpeaker;
	
})(window);

