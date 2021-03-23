//this file will manage teh state of the page.
//if a button is clicked, we call a command here to set the new scene and change the on screen text.


//function to get the html from the twine page. 
getTwineHtml = (index) => {
	var xhr = typeof XMLHttpRequest != "undefined" ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
	xhr.open("get", `storyHtml/${index}.html`, true)
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			document.getElementById("info").innerHTML = xhr.responseText
		} else document.getElementById("info").innerHTML = `<div> Error please reload. Error occured at index ${index} </div>`
	}
	xhr.send()
}

 loadJSON = (callback) => {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './twineExample.json', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(JSON.parse(xobj.responseText));
      }
    };
    xobj.send(null);  
  }

parsePassage= (passage) => {
    //I need to take a string and build an HTML element with it. 
    
}
