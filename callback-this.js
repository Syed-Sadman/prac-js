function Promise(){
    console.log(this.name);
}


let ahmed={
    name:'Ahmed'
};

// Promise.call(ahmed);
let cons=Promise.bind(ahmed);

cons();