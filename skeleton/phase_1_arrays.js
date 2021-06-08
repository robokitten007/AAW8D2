Array.prototype.uniq = function(){
let unique =[];

this.forEach(element => {
        if(!unique.includes(element)){

        unique.push(element);
        }
    }
    );
    return unique;

}

Array.prototype.twoSum = function(){
        let res = [];
    for(let i = 0; i< this.length-1; i++){
        for(let j = i+1;j < this.length; j++){
        
            if ((this[i] + this[j]) === 0){
                res.push([i,j]);
            }
        };
    };
      return res;  
}

Array.prototype.transpose = function(){
    let res = [];
    let sub = [];
    for(let i = 0; i < this[0].length; i++){
        for (let j= 0; j < this.length; j++){
        
            sub.push(this[j][i]);
        };
        res.push(sub);
        sub = [];
    };
    return res;
}