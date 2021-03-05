
exports.min = function min (args) {
  if (!args || (args.length === 0)) return 0;

  return args.sort(compareNumeric).shift();
}

exports.max = function max (args) {
  if (!args || (args.length ===0)) return 0;

  return args.sort(compareNumeric).pop();
}

exports.avg = function avg (args) {
  if (!args || (args.length === 0)) return 0;

  let sum = 0;
  for (let arg of args) sum += arg;

  return sum / args.length;
}

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
