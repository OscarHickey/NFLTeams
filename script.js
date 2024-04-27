var url = "https:raw.githubusercontent.com/b-mcavoy/datasets/main/Sports/NFL%20Teams.csv"
var Conference = getColumn(url,1);
var Divisions = getColumn(url,2);
var Teams = getColumn(url,3);
var City = getColumn(url,4);
var Arena = getColumn(url,5);
var Capacity = getColumn(url,6);
var Coach = getColumn(url,7);


function getCoaches(coach){ //Purpose is to find any NFL coach using one letter or a whole name 
  var matches = [];
  
  for(var i = 0; i < Coach.length; i++){
    if(Coach[i].toLowerCase().includes(coach.toLowerCase())){ //We used .toLowerCase so that you don't have to write the inputs perfectly and you can even just write a letter.
      matches.push(Coach[i])
  }
  }
  if(matches.length > 0){
    return matches;
  } 
  else{
    matches.push("That coach doesn't exist")
 
  }
  return matches;
  }

//console.log(getCoaches("ORE"))


function getCoachesteam(team){
  var matches = [];
  
  for(var i = 0; i < Coach.length; i++){
    if(Coach[i].toLowerCase().includes(team.toLowerCase())){ //We used .toLowerCase so that you don't have to write the inputs perfectly and you can even just write a letter.
      matches.push(Teams[i])
  }
  }
  if(matches.length > 0){
    return matches;
  } 
  else{
    matches.push("That coach doesn't exist") //This is for when there are no matches available.
 
  }
  return matches;
}
//console.log(getCoachesteam("Khanahan"));

//Purpose is to find the team of an inputted head coach. 

function getCapacity(division){ //This function adds the capacities of all the stadiums together from each individual division.
  var total= 0;
  for(var i = 0; i < Divisions.length; i++){
      if(Divisions[i].toLowerCase() == division.toLowerCase()){ //We used .toLowerCase so that you don't have to write the inputs perfectly and you can even just write a letter.
          total += parseFloat(Capacity[i]); 
      }
  }
  if(total == 0){ //If the input is not right it will print -1
      return -1;
  }  
  return total;
}
//console.log(getCapacity("East"));
//console.log(getCapacity("South"));
//console.log(getCapacity("West"));
//console.log(getCapacity("North"));



function getArena(city){ //This function assigns a city to an inputted arena. Uses city as a parameter
    var matches = [];
  
 for(var i = 0; i < City.length; i++){
 if(Arena[i].toLowerCase().includes(city.toLowerCase())){//We used .toLowerCase so that you don't have to write the inputs perfectly and you can even just write a letter.
      matches.push(City[i])
   }
   }
   if(matches.length > 0){
    return matches;
  } 
  else{
    matches.push("That stadium doesn't exist") //This is for when there are no matches available.
 
  }
   return matches;
}

//console.log(getArena("gil"));

function getCoachesArena(arena){ //This function assigns an arena to an inputted coach. It also uses arena as a parameter.
   var matches = [];
  for(var i = 0; i < City.length; i++){
    if(Coach[i].toLowerCase().includes(arena.toLowerCase())){  //this loops through all of the options. We used .toLowerCase so that you don't have to write the inputs perfectly and you can even just write a letter.
      matches.push(Arena[i]) 
    }
  }
  if(matches.length > 0){
    return matches;
  } 
  else{
    matches.push("That coach doesn't exist")  //This is for when there are no matches available.
 
  }
  return matches;
}

//console.log(getCoachesArena("bill b"));

function getColumn(url, columnNumber){
    var column = [];
    var table = [];
    var request = new XMLHttpRequest();  
    request.open("GET", url, false);   
    request.send(null);  
    var csvData = new Array();
    var jsonObject = request.responseText.split(/\r?\n|\r/);
    for (var i = 0; i < jsonObject.length; i++) {
      csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
    }
    table = csvData;
    column = getCol(table, columnNumber);
    return column;
  }
  function getCol(matrix, col){
    var column = [];
    for(var i=1; i<matrix.length-1; i++){
       column.push(matrix[i][col]);
    }
    return column;
}
