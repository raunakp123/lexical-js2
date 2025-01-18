var persone1={
    name: "mern",

    greet: function(){
        console.log("helo my name is"+this.name);

        
    }
}
var persone2={
    name:"raunak",

};
persone1.greet.call(persone2);
persone1.greet();