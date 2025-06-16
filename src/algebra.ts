import { DataLengthMismatchError } from "./errors";

export function isPerfectSquare(n: number): boolean {
    const root = Math.sqrt(n);
    return Number.isInteger(root);
}

export function rotateMatrix(id: string, data: number[], size: number): number[] {
    if (size * size !== data.length) {
        throw new DataLengthMismatchError(id);
    }

    const result = [...data];
    const layers = Math.floor(size / 2);

    for (let layer = 0; layer < layers; layer++) {
        const first = layer;
        const last = size - 1 - layer;

        const topLeft = data[first * size + first];

        for (let i = first; i < last; i++) {
            result[i * size + first] = data[(i + 1) * size + first];
        }

        for (let i = first; i < last; i++) {
            result[last * size + i] = data[last * size + i + 1];
        }

        for (let i = last; i > first; i--) {
            result[i * size + last] = data[(i - 1) * size + last];
        }

        for (let i = last; i > first + 1; i--) {
            result[first * size + i] = data[first * size + i - 1];
        }

        result[first * size + first + 1] = topLeft;
    }

    if (size % 2 === 1) {
        const center = Math.floor(size / 2);
        result[center * size + center] = data[center * size + center];
    }

    return result;
}