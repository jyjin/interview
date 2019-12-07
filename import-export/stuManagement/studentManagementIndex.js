import Stu from './student'
import Major from './major'

const print = function () {
  console.log.apply(this, arguments)
}


const siao = new Stu('钱思傲', 25)
const jyjin = new Stu('jyjin', 25)
const major = new Major('计算机科学与技术', 4)
major.intro()
major.addStudent(siao, jyjin)

print('%s专业是%d年', major.name, major.getYears())
const stus = major.getStudents()
let res = stus.reduce((total, value, index) => {
  return total + value.name + ' '
}, major.name + '的成员有：')
print(res)