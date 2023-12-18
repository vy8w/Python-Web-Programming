import {
    Wave
} from './wave.js';

export class WaveGroup {
    constructor() {
        this.totalWaves = 1;
        this.totalPoints = 4.5;

        this.color = ['rgb(254,216,169)'];

        this.waves = [];

        for (let i = 0; i < this.totalWaves; i++) {
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i],
            );
            this.waves[i] = wave;
        }
    }

    resize(stageWidth, stageHeight) {
        for (let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx) {
        for (let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}