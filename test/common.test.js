const chai = require('chai');
const chaiHttp  = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);
const should = chai.should();

describe('Testing Save Employee', () => {
    it('should  return status 200 for /saveEmployee',function(done){
        let employee = {
            "name" : "HR",
            "employeedId" : 127,
            "email" : "HR@company.com",
            "designation" : "HR"
        }
        chai
            .request('http://localhost:3000')
            .post('/saveEmployee')
            .send(employee)
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw(err)
            });
    });    
});

describe('Testing Get Employees', () => {
    it('should  return status 200 for /getEmployees',function(done){
        chai
            .request('http://localhost:3000')
            .get('/getEmployees')
            .then(function(res){
                expect(res).to.have.status(200);
                res.body.should.be.a('array');
                done();
            })
            .catch(function(err){
                throw(err)
            });
    });   
});

describe('Testing Update Employee', () => {
    it('should  return status 200 for /updateEmployee',function(done){
        let updateObj = {
            "employeedId" : 128,
            "updateValue" : "Senior Test Engineer"
        }
        chai
            .request('http://localhost:3000')
            .put('/updateEmployee')
            .send(updateObj)
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw(err)
            });
    });   
});

describe('Testing Delete Employee', () => {
    it('should  return status 200 for /deleteEmployee',function(done){
        chai
            .request('http://localhost:3000')
            .get('/deleteEmployee/127')
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw(err)
            });
    });   
});

// Negative Test Case
describe('Testing Get Employees Wrong Route', () => {
    it('should  return status 404 for /getEmployee',function(done){
        chai
            .request('http://localhost:3000')
            .get('/getEmployee')
            .then(function(res){
                expect(res).to.have.status(404);
                done();
            })
            .catch(function(err){
                throw(err)
            });
    });   
});