// alert("Hello\nHow are you?");
// console.log("Hello");
// var name = window.prompt("Enter your name: ");
// alert("Hello " + name);
// alert("What are your fitness goals? Your options are fat loss and muscle growth");
// var goal = window.prompt("Enter your goal: ");
// if(goal == "fat loss"){
//   var inOrOut = window.prompt("Indoors or outdoors: ");
//   if(inOrOut == "indoors"){
//     alert("Daily: Burpees 3x12,\nFrog jumps 3x12,\nHigh knees 3x12,\nMountain climbers 3x12,\nJumping lunges 3x12");
//   }
//   else if(inOrOut == "outdoors"){
//     alert("Daily: Run 1 mile, or jump rope for 15 min, or bike for 5 miles");
//   }
// }
// else if(goal == "muscle growth"){
//   alert("Back on Monday and Thursday, Chest on Tuesday and Friday, Legs on Wednesday and Saturday, rest Sunday.");
//   alert("Do you have access to equipment?");
//   var equipment = window.prompt("Enter yes or no: ");

//   if(equipment == "yes"){
//     alert("What muscle groups do you want to grow? Your options are back and bicep, chest and tricep, legs, and abs.");
//     var muscle = window.prompt("Enter your muscle group: ");

//     if(muscle == "back and bicep"){
//       alert("Lat pull down 3x12,\nChest supported row 3x12,\nLat pullovers 3x12,\nBicep curls 4x10,\nSingle arm bicep curls 4x10");
//     }
//     else if(muscle == "chest and tricep"){
//       alert("Bench press 3x12,\nIncline dumbell press 3x12,\nPec flys 3x12,\nDumbell tricep press up 4x10,\nRope tricep press downs 4x10");
//     }
//     else if(muscle == "legs"){
//       alert("Squat 3x12,\nDeadlift 3x12,\nLeg extensions 3x12,\nHamstring curls 4x10,\nCalf raises 4x10");
//     }
//     else if(muscle == "abs"){
//       alert("Situps 3x12,\nLeg raises 3x12,\nPlank 30s,\nAb roller 4x10");
//     }
//   }
//   else if(equipment == "no"){
//     alert("What muscle groups do you want to grow? Your options are back and bicep, chest and tricep, legs, and abs.");
//     var muscle = window.prompt("Enter your muscle group: ");

//     if(muscle == "back and bicep"){
//       alert("Pull ups 3x12,\nSupermans 3x12,\nPlank 3x12,\nDolphin Kicks 4x10,\nReverse snow angel 4x10");
//     }
//     else if(muscle == "chest and tricep"){
//       alert("Regular pushups 3x12,\nIncline pushups 3x12,\nWide grip pushups 3x12,\Close grip pushups 4x10,\nDips 4x10");
//     }
//     else if(muscle == "legs"){
//       alert("Bodyweight squat 3x12,\Bulgarian split squat 3x12,\nGlute bridges 3x12,\nHamstring curls 4x10,\nCalf raises 4x10");
//     }
//     else if(muscle == "abs"){
//       alert("Situps 3x12,\nLeg raises 3x12,\nPlank 30s,\nV-ups 4x10");
//     }
//   }

// }

//BMI calculator
// var muscle = window.prompt("Enter your muscle group: ");

function muscleGain(){

  alert("Back on Monday and Thursday, Chest on Tuesday and Friday, Legs on Wednesday and Saturday, rest Sunday.");
  alert("Do you have access to equipment?");
  var equipment = window.prompt("Enter yes or no: ").toLowerCase();
  var prg = "";

  if(equipment == "yes"){
    alert("What muscle groups do you want to grow? Your options are back and bicep, chest and tricep, legs, and abs.");
    var muscle = window.prompt("Enter your muscle group: ").toLowerCase();

    if(muscle == "back and bicep"){
        prg = "Lat pull down 3x12,\nChest supported row 3x12,\nLat pullovers 3x12,\nBicep curls 4x10,\nSingle arm bicep curls 4x10";
    }
    else if(muscle == "chest and tricep"){
      prg = "Bench press 3x12,\nIncline dumbell press 3x12,\nPec flys 3x12,\nDumbell tricep press up 4x10,\nRope tricep press downs 4x10";
    }
    else if(muscle == "legs"){
      prg = "Squat 3x12,\nDeadlift 3x12,\nLeg extensions 3x12,\nHamstring curls 4x10,\nCalf raises 4x10";
    }
    else if(muscle == "abs"){
      prg = "Situps 3x12,\nLeg raises 3x12,\nPlank 30s,\nAb roller 4x10";
    }
  }
  else if(equipment == "no"){
    alert("What muscle groups do you want to grow? Your options are back and bicep, chest and tricep, legs, and abs.");
    var muscle = window.prompt("Enter your muscle group: ");

    if(muscle == "back and bicep"){
      prg = "Pull ups 3x12,\nSupermans 3x12,\nPlank 3x12,\nDolphin Kicks 4x10,\nReverse snow angel 4x10";
    }
    else if(muscle == "chest and tricep"){
      prg = "Regular pushups 3x12,\nIncline pushups 3x12,\nWide grip pushups 3x12,\Close grip pushups 4x10,\nDips 4x10";
    }
    else if(muscle == "legs"){
      prg = "Bodyweight squat 3x12,\Bulgarian split squat 3x12,\nGlute bridges 3x12,\nHamstring curls 4x10,\nCalf raises 4x10";
    }
    else if(muscle == "abs"){
      prg = "Situps 3x12,\nLeg raises 3x12,\nPlank 30s,\nV-ups 4x10";
    }
  }

  document.getElementById("program").innerHTML=prg;

}

function fatLoss(){
    var inOrOut = window.prompt("Indoors or outdoors: ").toLowerCase();
    var prg = "";
    if(inOrOut == "indoors"){
        prg = "Daily: Burpees 3x12,\nFrog jumps 3x12,\nHigh knees 3x12,\nMountain climbers 3x12,\nJumping lunges 3x12";
    }
    else if(inOrOut == "outdoors"){
        prg = "Daily: Run 1 mile, or jump rope for 15 min, or bike for 5 miles";
    }

    document.getElementById("program").innerHTML=prg;

}