let program = require('commander');

const error = message => {
  const header = 'An error has occured: ';
  console.log(`${header}${message}`);
  process.exit(1);
};

program
  .version('1.0.0')
  .option('-e, --encode <shift>', 'Encrypt text')
  .option('-d, --decode <shift>', 'Decrypt text')
  .option('-i, --input <input>', 'Encrypt text')
  .option('-o, --output <output>', 'Decrypt text')
  .parse(process.argv);

console.log(program);

if (program.encode) {
  // encode(program.encode, program.input, program.output);
} else if (program.decode) {
  // decode(program.encode, program.input, program.output);
} else {
  error('mandatory argument is missed');
}
