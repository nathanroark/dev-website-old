const gradientList = {
  lavender: 'from-indigo-300 to-purple-400',
  oceanic: 'from-sky-300 to-blue-500',
  greenTea: 'from-green-300 to-teal-400',
  fire: 'from-amber-500 via-red-500 to-yellow-500',
  purpleHaze: 'from-blue-300 to-purple-500',
  peachy: 'from-red-200 via-red-300 to-yellow-200',
  hyper: 'from-pink-500 via-red-500 to-yellow-500',
  atmosphere: 'from-green-300 via-blue-500 to-purple-600',
  cottonCandy: 'from-pink-300 via-purple-300 to-indigo-400',
  minnesota: 'from-purple-400 to-yellow-400',
  bombPop: 'from-red-400 via-gray-300 to-blue-500',
  paradise: 'from-blue-300 via-green-200 to-yellow-300',
  uwu: 'from-pink-300 via-indigo-300 to-blue-500',
};

const colorList = {
  red: 'red-500',
  orange: 'orange-500',
  yellow: 'yellow-500',
  green: 'green-500',
  teal: 'teal-500',
  blue: 'blue-500',
  indigo: 'indigo-500',
  purple: 'purple-500',
  pink: 'pink-500',
  rose: 'rose-500',
  sky: 'sky-500',
  lime: 'lime-500',
  cyan: 'cyan-500',
  amber: 'amber-500',
};

const getModColor = (num: number) => {
  var values = Object.values(colorList);
  let mod = num % values.length;
  return values[mod];
};

const getModGradient = (num: number) => {
  var values = Object.values(gradientList);
  let mod = num % values.length;
  return values[mod];
};
