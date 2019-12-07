export default class {
  constructor(name, years) {
    this.name = name
    this.years = years
    this.students = []
  }

  changeYears(years) {
    this.years = years
  }

  getYears() {
    return this.years
  }

  intro() {
    console.log('Any major have the topest')
  }

  addStudent() {
    var arr = Array.prototype.slice.call(arguments)
    this.students = this.students.concat(arr)
  }

  getStudents() {
    return this.students
  }
}