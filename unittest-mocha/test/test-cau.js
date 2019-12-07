var assert = require('assert')
var cau = require('../cau')
var { should: _should, expect } = require('chai')
should = _should()

// ============================== 例子=======================================
describe('cau', () => {
    describe('some property should be exist', () => {
        it('should be return ok', () => {
            // mocha验证
            assert.ok(cau.add)
            assert.ok(cau.sub)
            assert.ok(cau.mul)
            assert.ok(cau.div)

            // chai 断言库验证
            should.exist(cau.add)
            should.exist(cau.sub)
            should.exist(cau.mul)
            should.exist(cau.div)

            should.not.exist(cau.squre)
            should.not.exist(cau.quart)

            cau.add.should.be.an('function')
            cau.sub.should.be.an('function')
            cau.mul.should.be.an('function')
            cau.div.should.be.an('function')

            cau.add.should.not.be.a('number')
            cau.add.should.not.be.a('string')
            cau.add.should.not.be.a('boolean')
            cau.add.should.not.be.a('object')
        })
    })

    describe('add(a,b)', () => {
        it('should be return ok', () => {
            // mocha验证
            assert.equal(cau.add(1, 1), 2)
            assert.equal(cau.add(1, 0), 1)
            assert.equal(cau.add(0, 0), 0)
            assert.equal(cau.add(1, -1), 0)
            assert.equal(cau.add(-1, -1), -2)

            // chai断言库验证
            should.equal(cau.add(1, 1), 2)
            should.equal(cau.add(1, 0), 1)
            should.equal(cau.add(0, 0), 0)
            should.equal(cau.add(1, -1), 0)
            should.equal(cau.add(-1, -1), -2)
        })
    })

    describe('sub(a,b)', () => {
        it('should be return ok', () => {
            // mocha验证
            assert.equal(cau.sub(1, 1), 0)
            assert.equal(cau.sub(2, 1), 1)
            assert.equal(cau.sub(1, 2), -1)
            assert.equal(cau.sub(1, 0), 1)
            assert.equal(cau.sub(0, 1), -1)
            assert.equal(cau.sub(-1, -1), 0)

            // 断言库验证
            should.equal(cau.sub(1, 1), 0)
            should.equal(cau.sub(2, 1), 1)
            should.equal(cau.sub(1, 2), -1)
            should.equal(cau.sub(1, 0), 1)
            should.equal(cau.sub(0, 1), -1)
            should.equal(cau.sub(-1, -1), 0)
        })
    })

    describe('mul(a,b)', () => {
        it('should be return ok', () => {
            // mocha验证
            assert.equal(cau.mul(1, 1), 1)
            assert.equal(cau.mul(1, -1), -1)
            assert.equal(cau.mul(1, 0), 0)
            assert.equal(cau.mul(0, 1), 0)
            assert.equal(cau.mul(0, 0), 0)
            assert.equal(cau.mul(-1, -1), 1)
            assert.equal(cau.mul(100, 100), 10000)

            // 断言库验证
            should.equal(cau.mul(1, 1), 1)
            should.equal(cau.mul(1, -1), -1)
            should.equal(cau.mul(1, 0), 0)
            should.equal(cau.mul(0, 1), 0)
            should.equal(cau.mul(0, 0), 0)
            should.equal(cau.mul(-1, -1), 1)
            should.equal(cau.mul(100, 100), 10000)
        })
    })

    describe('div(a,b)', () => {
        it('should be return ok', () => {
            // mocha验证
            assert.equal(cau.div(1, 1), 1)
            assert.equal(cau.div(0, 1), 0)
            assert.equal(cau.div(1, -1), -1)
            assert.equal(cau.div(-1, -1), 1)
            assert.equal(cau.div(-1, 1), -1)
            assert.equal(cau.div(10, 3).toFixed(2) * 1, 3.33)
            assert.notEqual(cau.div(10, 3), 3.333)

            // 断言库验证
            should.equal(cau.div(1, 1), 1)
            should.equal(cau.div(0, 1), 0)
            should.equal(cau.div(1, -1), -1)
            should.equal(cau.div(-1, -1), 1)
            should.equal(cau.div(-1, 1), -1)
            assert.notEqual(cau.div(10, 3), 3.333)
            should.equal(cau.div(10, 3).toFixed(2) * 1, 3.33)
        })

        it('#cau.div(1/0)', () => {
            describe('#cau.div(1/0)是否有异常', () => {
                try {
                    cau.div(1 / 0)
                } catch (err) {
                    // 这里没有打印 所以并没有发生异常 => 打开以下注释代码看效果
                    // console.log('1111 test equal infinity err: ', err)   
                } finally {
                    console.log('test infinity err run')
                }
            })

            describe('#should.equal(cau.div(1/0), Infinity)是否有异常', () => {
                // 测试是否有异常
                try {
                    should.equal(cau.div(1 / 0), Infinity)
                } catch (err) {
                    // 这里有打印 mocha内部抛出的AssertionErr 所以不需要在Finaly抛异常 => 打开以下注释代码看效果
                    // console.log('2222 test should equal infinity err: ', err)
                } finally {
                    console.log('test equal infinity err run')
                }
            })

            describe('#测试should捕获异常', () => {
                (function () { throw '123'; }).should.throw('123'); // 直接抛异常 should捕获方式
            })

            describe('#测试should捕获cau(1,0)的异常', () => {
                (function () {
                    try {
                        cau.div(1 / 0)
                    } catch (err) {
                        // 这里其实并没有抛出异常 所以要在finally抛出 => 打开以下注释代码看效果
                        // console.log('d1111 #测试should捕获cau(1,0)的异常err: ', err)
                    } finally {
                        throw 'div 0 error'
                    }
                }).should.throw('div 0 err');

                (function () {
                    try {
                        should.equal(cau.div(1 / 0), NaN)
                    } catch (err) {
                        // 这里其实并没有抛出异常 所以要在finally抛出 => 打开以下注释代码看效果
                        // console.log('d2222 #测试should捕获should.equal(cau(1,0), Infinity)的异常err: ', err)
                    } finally {
                        throw 'div 0 error'
                    }
                }).should.throw('div 0 err');
            })

            describe('测试expect捕获异常', () => {
                try {
                    expect(function () {
                        cau.div(1 / 0)
                    }).to.throw(new Error('Expect error throwed'))
                } catch (err) {
                }
            })
        })
    })

})