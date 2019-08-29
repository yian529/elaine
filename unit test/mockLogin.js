var expect = require('chai').expect;

var request = require('superagent');

describe('mock login',function () {
   var cookieserver, authorization_secret
   beforeEach(function (done) {
       request
           .post('http://api.yeahmobi.com/newymapi/Session/login')
           .withCredentials()
           .set('Content-Type','application/json')
           .set("Access-Control-Allow-Headers",'X-YMApi-Authorization-Secret')
           .set("Content-Type","application/x-www-form-urlencoded")
           .timeout({
              response: 60 * 1000,  // Wait 1 minute for the server to start sending,
              deadline: 60000, // but allow 1 minute for the file to finish loading.
            })
           .send({"email":"elaine.ma@yeahmobi.com","password":"2234.com","dynamic_token":""})
           .end(function (err, res) {
               if(!err){
                   cookieserver = res.header['set-cookie'];
                  // authorization_secret = res.body.data && res.body.data.authorization_secret
                  console.log(res.body.data)
                   done()
               }
           })
   });
   it('investInfo',function (done) {
       request
           .get('http://api.yeahmobi.com/newymapi/Dashboard/getProfitUpDownRate?_=1563872115667&item_role_id=6&role_id=14&team_id=0&team_type=0')
           .withCredentials()
           .set('Cookie',cookieserver)
           .set('Content-Type','application/json')
           .timeout({
              response: 60 * 1000,  // Wait 1 minute for the server to start sending,
              deadline: 60000, // but allow 1 minute for the file to finish loading.
            })
           .end(function (err,res) {
           console.log(cookieserver)
              if(!err){
                console.log(cookieserver)
                //expect(res).to.be.an('object');
                console.log(res.body)
                expect(res.body.data).to.not.be.undefined
                done()
              } else {
                console.log(err)
                done()
              }
           })
   });
})