export class Particle {
	public pos: [x: number, y: number];
	public vel: [x: number, y: number];

	constructor(pos: [x: number, y: number], vel: [x: number, y: number]) {
		this.pos = pos;
		this.vel = vel;
	}

	public update(t: number) {
		this.pos[0] += this.vel[0] * t;
		this.pos[1] += this.vel[1] * t;
	}

	public draw(ctx: CanvasRenderingContext2D, r: number, color = "black") {
		ctx.beginPath();
		ctx.arc(this.pos[0], this.pos[1], r, 0, 2 * Math.PI);
		ctx.fillStyle = color;
		ctx.fill();
	}
}
