/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let totalTime = 1300;
      if(knowsProgramming) {
totalTime = 800;
      }
      const result = Math.ceil(totalTime / config[focus]);
	return result;
  };
  