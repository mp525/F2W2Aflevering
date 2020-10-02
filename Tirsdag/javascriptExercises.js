console.log("Opgave 1:");
var arr1 = ["Hassan", "Jan", "Peter", "Boline", "Frederik"];
var arr1F = arr1.filter(function(navn){
        return navn.indexOf("a") === 1;
});

console.log(arr1F);

var arr1M = arr1.map(function(name){
    return name.split("").reverse().join("");
});

console.log(arr1M);

console.log("Opgave 2:");

function my_callbackF(param){
    if(param.indexOf("a") === 1){
        return true;
    } else{
        return false;
    }
}

function myFilter(array, callback){
    var arr = [];
    for(idx in array){
        if(callback(array[idx])){
            arr.push(array[idx]);
        }
    }
    return arr;
}
console.log(myFilter(arr1, my_callbackF));

function my_callbackM(param){
    return param.split("").reverse().join("");
}

function myMap(array, callback){
    var arr = [];
    for(idx in array){
        arr.push(callback(array[idx]));
    }
    return arr;
}
console.log(myMap(arr1,my_callbackM));

console.log("Opgave 3:");

var numbers = [1, 3, 5, 10, 11];
function numbersCallback(current, index, numbers){
    if(index === numbers.length -1){
        return current;
    }
    return current + numbers[index+1];
}
console.log(numbers.map(numbersCallback));

var htmlNames = arr1.map(function(name){
    return "<a href=\"\">"+name+"</a>";
});
console.log("<nav>\n"+htmlNames.join("\n")+"\n</nav>");

var persons = [{name:"Hassan",phone:"1234567"}, {name: "Peter",phone: "675843"}, 
{name: "Jan", phone: "98547"},{name: "Boline", phone: "79345"}];

var tableString = persons.map(function(p){
    var personRow = p.name + ", " + p.phone + "\n";
    return personRow;
}).join("");
console.log("Name | Phone\n"+tableString);

console.log("Opgave 4:");

var all= ["Hassan", "Peter", "Carla", "Boline"];
console.log(all.join("#"));

const numbersReduced = [2, 3, 67, 33]; 

function reducer(total, num){
    return total + num;
}
console.log(numbersReduced.reduce(reducer));

const members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}];

function avgCallback(total, member, index, members){
    if(index === members.length-1){
        total += member.age;
        return total/members.length;
    }
    return total + member.age;
}

console.log(members.reduce(avgCallback,0));

console.log("Opgave 5:");
/* var car = {
    brand: "Nissan",
    getBrand: function(){
      console.log(this.brand);
    }
  };
  
  var getCarBrand = car.getBrand;
  
  getCarBrand();   // output: undefined
   */

// a) getCarBrand() giver undefined fordi metoden ikke længere tilhører car objektet når getCarBrand() bliver kaldt.
//this i denne sammenhæng bliver det globale this, og den har ikke attributten "brand"
// b) dette giver også undefined fordi det kun er kodesignaturen der følger med fra car, men this bliver det globale