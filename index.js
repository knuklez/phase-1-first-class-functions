function receivesAFunction(dolphins){
  dolphins();
  console.log(`My favorite team is ${dolphins}`);

};

function dolphins(){
  return "Undefeated!";
}; //takes a callback as an argument and  calls/invokes the callback. 

//How do I output "My Favorite team is Undefeated!"


function returnsANamedFunction(){
  return donShula;
};

function donShula(){
} // returns a named function (donShula) without taking an argument


function returnsAnAnonymousFunction(){
    return function(){};
} //returns an anonymous function without taking an argument

