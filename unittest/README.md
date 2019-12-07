# README - 单元测试构建

介绍：一个使用tap进行单元测试构建的例子


工具：tap （from npm）

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

#### test方法
- 1.无论多少层级，callback的参数都是assert对象
- 2.之所以分层级，是为了模块化。更清晰的进行单元测试
- 3.每一层测试完成后，需要assert.end()