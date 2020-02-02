/*const obj_arr = [{name : "조남경", age: "26", occupation:"백수"},
                {name : "신호진", age: "30", occupation:"백수"},
                {name : "박정욱", age: "34", occupation:"대장"}]
obj_arr.forEach(value => console.log(value.name, value.age, value.occupation));*/


/*var obj_arr = [{name : "조남경", age: "26", occupation:"백수"},
                {name : "신호진", age: "30", occupation:"백수"},
                {name : "박정욱", age: "34", occupation:"대장"}]
    for(var i = 0 in obj_arr) {
        console.log(obj_arr[i]);
    }*/
    

let obj_arr = [{name : "조남경", age: "26", occupation:"백수"},
                {name : "신호진", age: "30", occupation:"백수"},
                {name : "박정욱", age: "34", occupation:"대장"}]
for (let value of obj_arr) {
    console.log(value.name, value.age, value.occupation);
}

