this.roll= 7;

callnotchild=()=>{
    console.log(this.roll);

    
}
const A= {
    roll:1,
    perent: function(notchild){
        console.log(this.roll);
        notchild();
        
    }
}
A.perent(callnotchild);