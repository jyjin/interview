# README - 单元测试构建

介绍：一个使用mocha进行单元测试构建的例子


工具：mocha, chai （from npm）

时间：2019.2.28

----


Start

    npm install

Run

### 1.简易控制台输出的测试
    npm test                    

### 2.生成报告文件的测试
    npm run test-report         

### 3.生成浏览器报告文件的测试
    npm run test-report-browser 

### 4. 清除test生成的文件
    npm run clean              

Attention

describe
- 无论describe还是it都可以多层嵌套
- 无论describe还是it里面只有嵌套it才执行,没有it不执行
- require('chai').should()是引进一个方法，才能使用 XXX.should.be should.XXX
- （function(){throw XXX}).should.throw(XXX) 必须在完整语句后面 上一句代码必须有分好结束