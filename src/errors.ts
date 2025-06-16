export class MalformedJsonError extends Error {
    constructor(id: string) {
        super(`Row ${id}: Invalid JSON format.`);
        this.name = 'MalformedJsonError';
    }
}

export class NotAnArrayError extends Error {
    constructor(id: string) {
        super(`Row ${id}: JSON is not an array.`);
        this.name = 'NotAnArrayError';
    }
}

export class InvalidArrayLengthError extends Error {
    constructor(id: string) {
        super(`Row ${id}: Array length must be a perfect square >= 3.`);
        this.name = 'InvalidArrayLengthError';
    }
}

export class DataLengthMismatchError extends Error {
    constructor(id: string) {
        super(`Row ${id}: data length mismatch with size`);
        this.name = 'DataLengthMismatchError';
    }
}