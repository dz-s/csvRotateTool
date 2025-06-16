import { isPerfectSquare, rotateMatrix } from "./algebra";
import { DataLengthMismatchError, InvalidArrayLengthError, MalformedJsonError, NotAnArrayError } from "./errors";
import { InputRow, OutputRow } from "./types";


export function processRow(row: InputRow): OutputRow {
    try {

        let parsed: number[];
        try {
            parsed = JSON.parse(row.json);
        } catch {
            throw new MalformedJsonError(row.id);
        }

        if (!Array.isArray(parsed)) {
            throw new NotAnArrayError(row.id);
        }

        const len = parsed.length;
        const size = Math.sqrt(len);

        if (len >= 3 && !isPerfectSquare(len)) {
            throw new InvalidArrayLengthError(row.id);
        }

        const rotated = rotateMatrix(row.id, parsed, size);
        return {
            id: row.id,
            json: JSON.stringify(rotated),
            isValid: true,
        };
    } catch (error) {
        if (error instanceof MalformedJsonError) {
            console.error('Malformed JSON Error:', error);
        } else if (error instanceof NotAnArrayError) {
            console.error('Not An Array Error:', error);
        } else if (error instanceof InvalidArrayLengthError) {
            console.error('Invalid Array Length Error:', error);
        } else if (error instanceof DataLengthMismatchError) {
            console.error('Data length mismatch error:', error);
        } else if (error instanceof Error) {
            console.error('Unknown Error:', error);
        } else {
            console.error(`Unexpected error processing row ${row.id}`);
        }

        return {
            id: row.id,
            json: '[]',
            isValid: false,
        };
    }
}
