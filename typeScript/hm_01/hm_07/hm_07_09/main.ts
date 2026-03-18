/* 

#gsKLAsNWM

*Через Array.prototype. створити власний foreach, filter

 */
Array.prototype.myForEach = function(callback)  {
    for(let i:number = 0; i < this.length; i++){
        callback(this[i],i,this);
    }
};


Array.prototype.myFilter = function(callback){
    const result:any[] = [];

    for (let i:number = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};