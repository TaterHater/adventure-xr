let iter = 0
let array = [
	"This simple printed part allows a Pilot G2 pen to be attached to the printer so 2d pictures can be plotted on a piece of paper. The part is threaded to fit a pilot G2 pen. When inserted upside down the pen benefits from the spring allowing constant pressure on the paper even if the bed isn’t perfectly level. Since the part is threaded, you can adjust the pen’s pressure simply by turning the pen top. 1",
	"object 2",
	"3",
	"4",
	"I give Up"
]

document.getElementById("btn").onclick = () => {
	document.getElementById("info").innerText = array[iter]
	var box1 = document.querySelector("a-box")
	console.log(box1, iter)
	//test to interact with objects in Aframe via the embedded HTML
	box1.setAttribute("position", { x: -1, y: 0, z: iter })
	box1.object3D.position.set(-1 + iter, 0, -3)
	iter++
}
