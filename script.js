(function(window){ 

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var n in names) {

	var firstLetter = names[n].charAt(0).toLowerCase();

	if (firstLetter == "j") {
	  byeSpeaker.name = names[n];
	  byeSpeaker.speak();
	} else {
	  helloSpeaker.name = names[n];
	  helloSpeaker.speak();
	}
	window.names = names;

	}

})(window);
