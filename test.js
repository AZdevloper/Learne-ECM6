function fun(){
    this.age = 44;
    console.log(this.age);
    function fun2(){
        
        console.log(this)
    }
}

let user = new fun();