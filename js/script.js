
function myFunction() {
    var variable1;
    var groupSize = prompt('Please enter your group size');
    if (groupSize == 1 || groupSize == 2) {
      variable1 = 'First Class';
    } else if (groupSize <= 5){
      variable1 = 'Helecopter';
    } else if (groupSize >= 6) {
      variable1 = 'Charter Flight';
    } else {
      variable1 = 'Try again';
    }
    var variable2;
    var vacationType = prompt('What kind of trip would you like to go on, musical, tropical, or adventurous?');
    if (vacationType == 'musical') {
        variable2 = 'New Orleans';
    } else if (vacationType == 'tropical') {
        variable2 = 'A Beach Vacation in Mexico';
    } else if (vacationType == 'adventurous') {
        variable2 = 'White Water Rafting in the Grand Canyon';
    } else {
        variable2 = 'Try again';
    }
    var result;
    result = ("Since you're a group of " + groupSize + " going on a " + vacationType + " vacation, you should take a " + variable1 + " to " + variable2);
      console.log(result);
  }
  
  
  