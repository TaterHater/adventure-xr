let iter = 1
let story
loadJSON((storyJson) => {
	story = storyJson

	//first page
	console.log(story.passages[iter].name)
	console.log(story.passages.filter((i) => i.pid == iter))
})

//get the twine html from an ajax request

update = () => {
	console.log("step = ", iter)
	document.getElementById("info").innerHTML = parsePassage(story.passages.filter((i) => i.pid == iter)[0])
	document.getElementById("button-list").innerHTML = accordianButtons(story.passages.filter((i) => i.pid == iter)[0])
	generateNextPageButtons(story.passages.filter((i) => i.pid == iter)[0])
	subButtonLogic(story.passages.filter((i) => i.pid == iter)[0])
}

document.getElementById("btn").onclick = () => {
	update()
	iter++
	// var box1 = document.querySelector("a-box")
	// //test to interact with objects in Aframe via the embedded HTML
	// box1.setAttribute("position", { x: -1, y: 0, z: iter })
	// box1.object3D.position.set(-1 + iter, 0, -3)
}
