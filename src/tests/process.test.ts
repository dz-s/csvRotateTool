import { InvalidArrayLengthError, MalformedJsonError, NotAnArrayError } from "../errors";
import { processRow } from "../process";

describe('processRow error handling', () => {
    beforeEach(() => {
        jest.spyOn(console, 'error').mockImplementation(() => { });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should return invalid output when given malformed JSON', () => {
        const row = { id: '1', json: '[1, 2, 3' };

        const result = processRow(row);

        expect(result.isValid).toBe(false);
        expect(result.json).toBe('[]');
        expect(console.error).toHaveBeenCalledWith(
            expect.stringContaining('Malformed JSON Error:'),
            expect.any(MalformedJsonError)
        );
    });

    it('should return invalid output when JSON is not an array', () => {
        const row = { id: '2', json: '{"foo":"bar"}' };

        const result = processRow(row);

        expect(result.isValid).toBe(false);
        expect(result.json).toBe('[]');
        expect(console.error).toHaveBeenCalledWith(
            expect.stringContaining('Not An Array Error:'),
            expect.any(NotAnArrayError)
        );
    });

    it('should return invalid output for arrays that are not perfect squares', () => {
        const row = { id: '3', json: '[1,2,3]' };

        const result = processRow(row);

        expect(result.isValid).toBe(false);
        expect(result.json).toBe('[]');
        expect(console.error).toHaveBeenCalledWith(
            expect.stringContaining('Invalid Array Length Error:'),
            expect.any(InvalidArrayLengthError)
        );
    });
});