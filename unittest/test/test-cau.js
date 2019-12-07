var tap = require('tap')
var cau = require('../cau')

//============================简单测试============================
// // 检查加减乘除 add sub mul div 几个方法是否存在
// // tap.ok(cau.add, 'should be ok', cau)
// tap.ok(cau.add, 'should be ok')
// tap.ok(cau.sub, 'should be ok')
// tap.ok(cau.mul, 'should be ok')
// tap.ok(cau.div, 'should be ok')

// // 检查加减乘除方法是否正确
// tap.equal(cau.add(1, 2), 3)
// tap.equal(cau.sub(9, 5), 4)
// tap.equal(cau.mul(3, 3), 9)
// tap.equal(cau.div(9, 3), 3)




//============================分模块测试=============================
// test方法
//       1.无论多少层级，callback的参数都是assert对象
//       2.之所以分层级，是为了模块化。更清晰的进行单元测试
//       3.每一层测试完成后，需要assert.end()
tap.test('cau', (batch) => {
    batch.test('should define some method property', (assert) => {
        assert.ok(cau.add, 'should be ok')
        assert.ok(cau.sub, 'should be ok')
        assert.ok(cau.mul, 'should be ok')
        assert.ok(cau.div, 'should be ok')
        assert.end()
    })

    batch.test('add', (assert) => {
        assert.equal(cau.add(1, 1), 2, 'should be equal')
        assert.equal(cau.add(1, 0), 1, 'should be equal')
        assert.equal(cau.add(0, 0), 0, 'should be equal')
        assert.equal(cau.add(1, -1), 0, 'should be equal')
        assert.equal(cau.add(-1, -1), -2, 'should be equal')
        assert.end()
    })
    batch.test('sub', (assert) => {
        assert.equal(cau.sub(1, 1), 0, 'should be equal')
        assert.equal(cau.sub(2, 1), 1, 'should be equal')
        assert.equal(cau.sub(1, 2), -1, 'should be equal')
        assert.equal(cau.sub(1, 0), 1, 'should be equal')
        assert.equal(cau.sub(0, 1), -1, 'should be equal')
        assert.equal(cau.sub(-1, -1), 0, 'should be equal')
        assert.end()
    })

    batch.test('mul', (assert) => {
        assert.equal(cau.mul(1, 1), 1, 'should be equal')
        assert.equal(cau.mul(1, -1), -1, 'should be equal')
        assert.equal(cau.mul(1, 0), 0, 'should be equal')
        assert.equal(cau.mul(0, 1), 0, 'should be equal')
        assert.equal(cau.mul(0, 0), 0, 'should be equal')
        assert.equal(cau.mul(-1, -1), 1, 'should be equal')
        assert.equal(cau.mul(100, 100), 10000, 'should be equal')
        assert.end()
    })

    batch.test('div', (assert) => {
        assert.equal(cau.div(1, 1), 1, 'should be equal')
        assert.throws(cau.div(1, 0), 1, 'should throw a error')
        assert.equal(cau.div(0, 1), 0, 'should be equal')
        assert.equal(cau.div(1, -1), -1, 'should be equal')
        assert.equal(cau.div(-1, -1), 1, 'should be equal')
        assert.equal(cau.div(-1, 1), -1, 'should be equal')
        assert.notEqual(cau.div(10, 3), 3.333, 'should be equal')
        assert.equal(cau.div(10, 3).toFixed(2)*1, 3.33, 'should be equal')
        assert.end()
    })

    batch.end()
})
