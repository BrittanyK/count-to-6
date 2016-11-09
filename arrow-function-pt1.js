
let inputs = process.argv.slice(2);
let result = inputs.map(inputs => inputs[0]);
let endResults = result.reduce((string, char) => string + char);

console.log(`[${inputs}] becomes "${endResults}"`);
