class deneme {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getAge() {
    console.log(this.age);
  }

  getName() {
    console.log(this.name);
  }

  setName(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
  }

  static getAge2() {
    console.log("static");
  }

  static getName2() {
    console.log("static");
  }

  static setName2(name) {
    this.name = name;
  }

  static setAge2(age) {
    this.age = age;
  }
}

deneme = new deneme("deneme", 12);

deneme.getAge();
deneme.getName();
