//your JS code here. If required.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncFun() {
	let Time = parseInt(document.getElementByID('delay').value)
	let text = document.getElementById('text').value
	await delay(Time)
	document.getElementById('output').textcontent = text
}

document.getElementById('btn').addEventListener('click', asyncFun);