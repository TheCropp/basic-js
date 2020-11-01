const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  if (typeof(sampleActivity) === 'string') {
    let numberSampleActivity = parseFloat(sampleActivity);

  if (numberSampleActivity < MODERN_ACTIVITY && numberSampleActivity > 0) {
    var k = 0.693/ HALF_LIFE_PERIOD;
    var t = (Math.log(MODERN_ACTIVITY/numberSampleActivity)) / k;
    return Math.ceil(t); 
  }
  else {
    return false;
  }
}
  else {
    return false;
  }
};
