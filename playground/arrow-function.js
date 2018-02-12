var square = x => Math.pow(x, 2);

console.log(square(9));

var user = {
  name: 'Alberto',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt() {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHi();
user.sayHiAlt(1, 2, 3);