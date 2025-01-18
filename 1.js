var name= "raunak"

const A = {
    "name": "abhishek",
    "callback" : function(){
        console.log(this.name);
        
    }
}
A.callback();
console.log(this);
