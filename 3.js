this.name="raunak"

const A ={
    "name":"pratap",
    "roll":"002",
    "callback":()=>{
        abc=()=>{
            console.log(this.name);

        }
        abc();
        
    }
}
A.callback();