var prompt = require('./prompt.js');
var fs = require("fs");
var info = {};
function format() {
    prompt.readLine('Please enter your format：',function(data){
        // 返回false则表示数据不合法，需要重新输入
        if(!data) return false;
        
			  fs.writeFile('format.txt', data, 'utf8',function (err) {
			    if (err) throw err;
			    console.log('The data was appended to file!');
			  });
    },false);
}
// prompt.startStepByStep({
//     format:format,
// });


const shell = require('shelljs')

function getLog () {
  let _cmd = `git log -1 \
  --date=iso --pretty=format:'{"commit": "%h","author": "%aN <%aE>","date": "%ad","message": "%s"},' \
  $@ | \
  perl -pe 'BEGIN{print "["}; END{print "]\n"}' | \
  perl -pe 's/},]/}]/'`
  return new Promise((resolve, reject) => {
    shell.exec(_cmd, (code, stdout, stderr) => {
      if (code) {
        reject(stderr)
      } else {
        resolve(JSON.parse(stdout)[0])
      }
    })
  })
}

async function commit () {
  let _gitLog = await getLog()
  console.log(_gitLog)
}
commit()