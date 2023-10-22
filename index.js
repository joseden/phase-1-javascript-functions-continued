// code your solution here
function saturdayFun(activity ="roller-skate"){
    console.log(activity);
    return `This Saturday, I want to ${activity}!`;

}

saturdayFun();

mondayWork();

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}



// function wrapAdjective(value ='*'){
//     if (value = '*'){
//         return (function (adjective = "a hard worker") {
//             return (`You are ${value}${adjective}${value}!`);
//            });
//     }else if (value = "||"){
//         return (function (adjective = "a dedicated programmer") {
//             return (`You are ${value}${adjective}${value}!`);
//           });

//     }

// }
// wrapAdjective()();


function wrapAdjective(obj = "*"){
    if (obj === "||") {
        return function (adjective = "a dedicated programmer"){ return `You are ${obj}${adjective}${obj}!`}; 
    }
    else {
        return function (adjective = "a hard worker"){ return `You are ${obj}${adjective}${obj}!`};
    }
  };

  wrapAdjective();