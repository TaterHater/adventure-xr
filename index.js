let iter = 1
let story
loadJSON((storyJson) => {
	story = storyJson

	//first page
	console.log(story.passages[iter].name)
})

//get the twine html from an ajax request

document.getElementById("btn").onclick = () => {
	document.getElementById("info").innerHTML = parsePassage(story.passages[iter])

	var box1 = document.querySelector("a-box")
	//test to interact with objects in Aframe via the embedded HTML
	box1.setAttribute("position", { x: -1, y: 0, z: iter })
	box1.object3D.position.set(-1 + iter, 0, -3)
	subButtonLogic()
	iter++ // TODO 
}





