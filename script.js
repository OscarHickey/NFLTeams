var url = "https:raw.githubusercontent.com/b-mcavoy/datasets/main/Sports/NFL%20Teams.csv"
var Conference = getColumn(url,1);
var Divisions = getColumn(url,2);
var Teams = getColumn(url,3);
var City = getColumn(url,4);
var Arena = getColumn(url,5);
var Capacity = getColumn(url,6);
var Coach = getColumn(url,7);



//Coaches that names start with a letter


function getCoaches(coach){
  var matches = [];
  
  for(var i = 0; i < Coach.length; i++){
    if(Coach[i].toLowerCase().includes(coach.toLowerCase())){
      matches.push(Coach[i])
  }
  }
  return matches;
}


//console.log(getCoaches("q"))

//Purpose is to find any NFL coach using one letter or a whole name 

function getCoachesteam(team){
  var matches = [];
  
  for(var i = 0; i < Coach.length; i++){
    if(Coach[i].toLowerCase().includes(team.toLowerCase())){
      matches.push(Teams[i])
  }
  }
  return matches;
}
//console.log(getCoachesteam("Kyle shanahan"));

//Purpose is to find the team of an inputted head coach. 

function getCapacity(division){
  var total= 0;
  for(var i = 0; i < Divisions.length; i++){
      if(Divisions[i].toLowerCase() == division.toLowerCase()){
          total += parseFloat(Capacity[i]); 
      }
  }
  if(total == 0){
      return -1;
  }  
  return total;
}
//console.log(getCapacity("East"));
//console.log(getCapacity("South"));
//console.log(getCapacity("West"));
//console.log(getCapacity("North"));

//Gives highest capacity for biggest stadium in Divisions









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




