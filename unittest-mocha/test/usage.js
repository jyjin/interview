var assert = require('assert')
var cau = require('../cau')
var { should: _should, expect } = require('chai')
should = _should()

// ============================== 基础用法=======================================
// describe/it/should useage
describe('#describe it should expect用法', () => {
    it('it嵌套在describe可运行', () => {
        cau.add.should.be.a('function')
        cau.add.should.not.be.a('string')

        cau.add(1, 1).should.equal(2)
        cau.add(1, 1).should.not.equal(3)

        should.exist(cau.add)
        should.not.exist(cau.square)

        expect(cau.add).to.be.a('function')
        expect(cau.add).to.not.be.a('string')
        expect(cau.add(1, 1)).to.equal(2)
        expect(cau).to.have.property('add').to.be.a('function')
        expect('jyjin').lengthOf(5)
        expect({ name: 'jyjin' }).property('name')
        expect({ name: 'jyjin' }).have.property('name')
        expect({ name: 'jyjin' }).have.property('name').with.lengthOf(5);

        // 上一句没分好会报错
        (function(){
            throw '123'
        }).should.throw('123')

        describe('should throw a err', () => {
            (function () {
                throw '123'
            }).should.throw('123')
        })

        describe('should throw a err', () => {
            expect('jyjin').lengthOf(5)

            cau.add.should.be.a('function')
            it('it should err', () => {
                (function () {
                    throw '123'
                }).should.throw('123')
            })
        })

        // wrong
        // cau.add.should.exist('function')
        // cau.square.should.not.exist('function')

        //wrong it嵌套it不执行
        it('it嵌套在it不可运行', () => {
            cau.add.should.exist()
            cau.square.should.not.exist()
        })

        describe('嵌套的describe可运行', () => {
            it('再嵌套一个it在describe可运行', () => {

            })

            describe('再嵌套一个describe试试', () => {
                it('再再嵌套一个it在describe可运行', () => {
                    should.exist(cau.add)
                    should.not.exist(cau.square)
                })
            })

            describe('空describe没有it不运行', () => {

            })
        })
    })
})


it('空it在最外层可运行', () => {

})

// wrong
// describe('空describe在最外层也不可运行', ()=>{

// })

it('it在最外层可运行', () => {
    should.exist(cau.add)
    should.not.exist(cau.square)

    it('it最外层嵌套it可运行', () => {
        should.exist(cau.add)
        should.not.exist(cau.square)
    })
})

