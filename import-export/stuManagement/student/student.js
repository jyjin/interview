export default class Student {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  learn() {
    console.log(this.name + ' can learn English')
  }
}