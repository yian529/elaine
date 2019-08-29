var expect = require("chai").expect;

var request = require("superagent");
describe('anscy demo', function(){
 it('get info',function(done){
   request
    .get('http://api.yeahmobi.com/newymapi/Pm/getPmNotice')
    .end(function(err,res){
         expect(res).to.be.an('object');
      done();
    })
 })
})