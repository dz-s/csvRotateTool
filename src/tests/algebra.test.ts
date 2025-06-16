import { processRow } from '../process';
import { rotateMatrix } from '../algebra';

const ID = 'TESTID'

describe('rotateMatrix spiral rotation', () => {
    test('should rotate a 3x3 matrix clockwise in spiral order', () => {
        // Given
        const input = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9
        ];
        const expected = [
            4, 1, 2,
            7, 5, 3,
            8, 9, 6
        ];

        // When
        const result = rotateMatrix(ID, input, 3);

        // Then
        expect(result).toEqual(expected);
    });

    test('should rotate a 4x4 matrix clockwise in spiral order', () => {
        // Given
        const input = [
            1, 2, 3, 4,
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16
        ];
        const expected = [
            5, 1, 2, 3,
            9, 10, 6, 4,
            13, 11, 7, 8,
            14, 15, 16, 12
        ]

        // When
        const result = rotateMatrix(ID, input, 4);

        // Then
        expect(result).toEqual(expected);
    });

    test('should keep the middle element unchanged in an odd-sized matrix', () => {
        // Given
        const input = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9
        ];

        // When
        const result = rotateMatrix(ID, input, 3);

        // Then
        expect(result[4]).toBe(5);
    });
});

describe('processRow JSON parsing and validation', () => {
    test('should produce valid output given a valid JSON array', () => {
        // Given
        const row = { id: '1', json: '[1,2,3,4]' };

        // When
        const output = processRow(row);

        // Then
        expect(output.isValid).toBe(true);
    });

    test('should produce invalid output when JSON is malformed', () => {
        // Given
        const row = { id: '2', json: '[1, 2, 3' };

        // When
        const output = processRow(row);

        // Then
        expect(output.isValid).toBe(false);
        expect(output.json).toBe('[]');
    });

    test('should produce invalid output when array length is not a perfect square', () => {
        // Given
        const row = { id: '3', json: '[1,2,3]' };

        // When
        const output = processRow(row);

        // Then
        expect(output.isValid).toBe(false);
        expect(output.json).toBe('[]');
    });
});