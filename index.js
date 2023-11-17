// Take input from user, separated by commas > go through input and add number of each item to stats > return to user

// declarations
const flavorList = window.prompt("please list your favorite flavors of frozen yogurt separated by commas", "vanilla,chocolate,banana,strawberry,coffee,pistachio" );
const flavorArr = flavorList.split(",");

// function
function countFlavors(arr){
    const flavorStats = {}
    for (i = 0; i < arr.length;i++){
        if (flavorStats.hasOwnProperty(arr[i])){ // hasOwnProperty checks to make sure if the object already has this property, if it does it will return true and if it does not it will return false
            flavorStats[arr[i]] += 1;
        }else{
            flavorStats[arr[i]] = 1;
        }
    }
    return flavorStats;
}

console.log(countFlavors(flavorArr));
// finished product is along the lines of 
// banana : 1
// chocolate : 1
// banana : 1
// strawberry : 1
// coffee : 1
// pistachio : 1

