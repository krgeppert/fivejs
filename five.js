Fivejs = {};

Fivejs.five = function(num) {
  try {
    if (typeof num !== 'number') {
      throw "invalid input to FiveJs.five() " + num + ' is not a mnumber.';
    } else {
      return num*5;
    }
  } catch (err) {
    console.log('Error: ' + err);
  }
};
