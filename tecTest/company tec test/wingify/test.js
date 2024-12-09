//prototyple inheritance

let car = function(modal) {
    this.modal = modal;
}

car.prototype.getModal= function() {
    return this.modal;
}

let swift = new car('swift');
console.log(swift.getModal())


//clouser


let obj = function(){
    let b=0;
    return {
        setI(i) {
          j = i;
        },
        getI() {
            return j;
        }
    }
}

let x= obj();
x.setI(2);
console.log(x.getI())
