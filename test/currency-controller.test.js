const {app} = require('../src/app');
const  chai = require('chai');
const  request = require('supertest');

const expect = chai.expect;
describe('Api Tests', function() {
    describe('# Get all currencies',function () {
        it('should get all currencies',function (done) {
            request(app).get('/api/currencies')
                .end(function (err,res) {
                    if(err){
                        throw  new Error(err);
                    }
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an('array');
                    expect(res.body).to.have.lengthOf(5);
                    done();
                })
        });

        it('should be of type string',function (done) {
            request(app).get('/api/currencies')
                .end(function (err,res) {
                    if(err){
                        throw  new Error(err);
                    }

                    let param = res.body[0];

                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an('array');
                    expect(param.name).to.be.a('string');
                    expect(param.conversion).to.be.a('string');
                    done();
                })
        })
    });

    describe('# Get individual currency',function () {
        it('should get one currency',function (done) {
            request(app).get('/api/currencies/ILS')
                .end(function (err,res) {
                    if(err){
                        throw new Error(err);
                    }

                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an('object');
                    expect(Object.keys(res.body)).to.have.lengthOf(2);
                    done();
                })

        })
        it('should be of type string',function (done) {
            request(app).get('/api/currencies/EUR')
                .end(function (err,res) {
                    if(err){
                        throw  new Error(err);
                    }

                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.name).to.be.a('string');
                    expect(res.body.conversion).to.be.a('string');
                    done();
                })
        })
    });
});