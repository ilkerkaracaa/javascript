class hero {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getAge() {
    return this.age;
  }

  getName() {
    return this.name;
  }

  setAge(age) {
    this.age = age;
  }

  setName(name) {
    this.name = name;
  }
}

hero1 = new hero("Batman", 30);
console.log(hero1.getName());
console.log(hero1.getAge());
hero1.setName("Superman");
hero1.setAge(40);
console.log(hero1.getName());
console.log(hero1.getAge());
