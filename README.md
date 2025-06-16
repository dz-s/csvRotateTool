A Node.js/TypeScript CLI tool that rotates given csv by rules.

## Features

- 📥 Reads input CSV line-by-line (streamed)
- 🔁 Performs **some rotation** on square matrices
- ✅ Validates arrays for proper formatting and shape
- ⚠️ Graceful error handling with custom exceptions
- 📤 Outputs a new CSV with `id`, rotated `json`, and `isValid` flag

## Instalation

`npm install`

## Build

`npm run build`

## Test

`npm test`

## Usage

`node cli.js input.csv > output.csv`
