1 task//
function Account(login, email) {
  this.login = login;
  this.email = email;
}
Account.prototype.getInfo = function(params) {
  return `${this.login}, email: ${this.email}`;
};

console.log(Account.prototype.getInfo); // function

const mango = new Account("Mangozedog", "mango@dog.woof");
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
console.log('mango.getInfo :', mango.getInfo());

const poly = new Account("Poly", "poly@mail.com");
poly.getInfo(); // Login: Poly, Email: poly@mail.com
console.log('poly.getInfo() :', poly.getInfo());
===============================================================
2 task//

class User {
  constructor({name, age, followers}){
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo(){
    return `User ${this.name} is ${this.age} years old and has ${this.followers} followers.`;
  }
}
const mango = new User({ name: 'Mango', age: 2, followers: 20 });
mango.getInfo(); // User Mango is 2 years old and has 20 followers
console.log('Mango :', mango.getInfo());

const poly = new User({ name: 'Poly', age: 3, followers: 17 });
poly.getInfo(); // User Poly is 3 years old and has 17 followers
console.log('Poly :', poly.getInfo());
=================================================================
3 task//

class Storage {
  constructor(items){
    this.items = items;
  }

  getItems(){
    return this.items;
  }
  
  addItem(item){
    return this.items.push(item);
  }

  removeItem(item){
    for(let el of this.items){
      if (el === item){
        return this.items.splice(this.items.indexOf(el), 1);
      }
    }
  }
}
const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
==============================================================================================================
4 task//

class StringBuilder {
  constructor(str){
    this.str = str;
   const _value = str;
   this._value = _value;
  }

  get value(){
    return this._value = this._value;
  }


  append(str){
    return this._value = `${this._value}${str}`;
  }

  prepend(str){
    return this._value = `${str}${this._value}`;
  }

  pad(str){
    return this._value = `${str}${this._value}${str}`;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
====================================================================
5 task
class Car {
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */
  static getSpecs(car){
    const  {maxSpeed, speed, isOn, distance, price} = car; 
    console.log(`maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`);
  }
  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
  constructor({maxSpeed, price}) {
    this.maxSpeed = maxSpeed;
    this._price = price;
    this.speed = 0;
    this.distance = 0;
    this.isOn = false;
  }

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */
    get price (){
      return this._price;
    }
    set price (price){
      this._price = price;
    }
  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn(isOn) {
    this.isOn = true;
  }

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff(isOn) {
    this.isOn = false;
    this.speed = 0;
  }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {

    if(this.speed + value <= this.maxSpeed){
      this.speed = this.speed + value;
    }
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    if(this.speed - value >= 0){
      this.speed -= value;
    }
  }
  
  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    if(this.isOn){
      this.distance = this.speed * hours;

    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 30, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000