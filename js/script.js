inputContainer = document.querySelector('.input');
outputContainer = document.querySelector('.output');

btnPlay = document.querySelector('button');
btnPlay.addEventListener('click', play);
document.addEventListener('keydown', play);

const outputNumbers = 5;

function play() {
	document.removeEventListener('keydown', play);
	console.log('test');
}

function randomArr(length, min, max) {
	const randomArr = [];
	while (randomArr.length < length) {
		const randomNumber = randomInt(min, max);
		if (!randomArr.contains(randomNumber)) {
			randomArr.push(randomNumber);
		}
	}
	return randomArr;
}

// Math functions
function randomInt(min, max) {
	const randomNumber = Math.floor(Math.random() * max + min);
	return randomNumber;
}