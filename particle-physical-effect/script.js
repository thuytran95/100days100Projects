const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let adjustX = 10;
let adjustY = 20;

let particleArray = [];

//handle mouse
const mouse = {
	x: null,
	y: null,
	radius: 150
};

window.addEventListener('mousemove', function (event) {
	mouse.x = event.x;
	mouse.y = event.y;
});

ctx.fillStyle = 'white';
ctx.font = '40px Verdana';

// s: text want to draw, 0: x cordinate, 40: y coordinate, 4th attribute: font of texxt
ctx.fillText('A', 0, 30);
ctx.strokStyle = 'white';
const textCondinates = ctx.getImageData(0, 0, 100, 100);

class Particle {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.size = 3;
		this.baseX = this.x;
		this.baseY = this.y;
		this.density = Math.random() * 150 + 20;
	}

	draw() {
		ctx.fillStyle = 'white';
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		ctx.closePath();
		ctx.fill();
	}

	update() {
		let dx = mouse.x - this.x;
		let dy = mouse.y - this.y;
		let distance = Math.sqrt(dx * dx + dy * dy);
		let forceDirectionX = dx / distance;
		let forceDirectionY = dy / distance;
		let maxDistance = mouse.radius;

		let force = (maxDistance - distance) / maxDistance;

		let directionX = forceDirectionX * force * this.density;
		let directionY = forceDirectionY * force * this.density;

		if (distance < mouse.radius) {
			this.x -= directionX;
			this.y -= directionY;
			// this.size = 10;
		} else {
			if (this.x !== this.baseX) {
				let dx = this.x - this.baseX;
				this.x -= dx / 10;
			}

			if (this.y !== this.baseY) {
				let dy = this.y - this.baseY;
				this.y -= dy / 10;
			}
		}
	}
}

function init() {
	particleArray = [];
	// for (let i = 0; i < 1000; i++) {
	// 	let x = Math.random() * canvas.width;
	// 	let y = Math.random() * canvas.height;
	// 	particleArray.push(new Particle(x, y));
	// }

	for (let y = 0, y2 = textCondinates.height; y < y2; y++) {
		for (let x = 0, x2 = textCondinates.width; x < x2; x++) {
			// 4 cordinate -> create 1 color: 128 means 50% opacity
			if (
				textCondinates.data[y * 4 * textCondinates.width + x * 4 + 3] >
				128
			) {
				let positionX = x + adjustX;
				let positionY = y + adjustY;
				particleArray.push(
					new Particle(positionX * 12, positionY * 12)
				);
			}
		}
	}
}

init();

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	const length = particleArray.length;
	for (let i = 0; i < length; i++) {
		particleArray[i].draw();
		particleArray[i].update();
	}
	connect();

	requestAnimationFrame(animate);
}

animate();

function connect() {
	for (let a = 0; a < particleArray.length; a++) {
		for (let b = a; b < particleArray.length; b++) {
			let dx = particleArray[a].x - particleArray[b].x;
			let dy = particleArray[a].y - particleArray[b].y;
			let distance = Math.sqrt(dx * dx + dy * dy);

			if (distance < 20) {
				ctx.strokeStyle = 'white';
				ctx.lineWidth = 2;
				ctx.beginPath();
				ctx.moveTo(particleArray[a].x, particleArray[a].y);
				ctx.lineTo(particleArray[b].x, particleArray[b].y);
				ctx.stroke();
			}
		}
	}
}
