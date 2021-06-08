Array.prototype.myEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i]);
    }
}

Array.prototype.myMap = function(callback){
    let res = [];
    // res.push(this.myEach(callback));
    debugger
    this.myEach(element => {
        res.push(callback(element)); //callback function for myEach
        }
    );
    return res;
}

function twice(num){
   return num*2 ;
}

function timesTwo(num){

    let x = num * 2;
    console.log(x);
}

Array.prototype.myReduce = function(callback,[initialValue]){


}