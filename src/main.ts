import fs from 'fs';
import { format } from '@fast-csv/format';
import { parse } from '@fast-csv/parse';
import { InputRow, OutputRow } from './types';
import { processRow } from './process';


const inputPath = process.argv[2];

if (!inputPath) {
    console.error('Usage: node cli.js <input.csv>');
    process.exit(1);
}

fs.createReadStream(inputPath)
    .pipe(parse<InputRow, InputRow>({ headers: true, ignoreEmpty: true }))
    .transform((row: InputRow): OutputRow => {
        return processRow(row);
    })
    .pipe(format<OutputRow, OutputRow>({ headers: true }))
    .pipe(process.stdout);