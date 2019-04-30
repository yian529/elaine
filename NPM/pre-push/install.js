const path = require('path')
const fs = require('fs')

const root = path.resolve(__dirname, '..', '..')
const exists = fs.existsSync || path.existsSync


const getGitFolderPath = currPath => {
  const git = path.resolve(currPath, '.git')
  if (!exists(git) || !fs.lstatSync(git).isDirectory()) {
      console.log('githook-pre-push: Not found .git folder in', git)
      var newPath = path.resolve(currPath, '..')
      // Stop if we on top folder
      if (path === newPath) {
         return null
      }
      return getGitFolderPath(newPath)
  }
  return git
}

const git = getGitFolderPath(root)

if (!git) {
    console.log('githook-pre-push: Not found any .git folder for installing githook-pre-push hook')
    return
}

const hooks = path.resolve(git, 'hooks')
const prePush = path.resolve(hooks, 'pre-push')

if (!exists(hooks)) fs.mkdirSync(hooks)

if (exists(prePush) && !fs.lstatSync(prePush).isSymbolicLink()) {
    console.log('githook-pre-push: Detected an existing git githook-pre-push hook')
    //fs.writeFileSync(prePush + '.old', fs.readFileSync(prePush))
    //console.log('githook-pre-push: Old githook-pre-push hook backuped to githook-pre-push.old')
}

// delete old githook-pre-push
try {
    fs.unlinkSync(prePush)
} catch (e) {}

const prePushPath = path.resolve(__dirname, 'pre-push').replace(/\\/g, '/')
const prePushTpl = `#!/usr/bin/env bash

${prePushPath}
RESULT=$?
[ $RESULT -ne 0 ] && exit 1
exit 0
`
// 将pre push的脚本写进.git/hooks/pre-push文件里
try {
  fs.writeFileSync(prePush, prePushTpl)
} catch (e) {
  console.error('githook-pre-push: Failed to create the hook file in your .git/hooks folder because:')
  console.error('githook-pre-push: ' + e.message)
  console.error('githook-pre-push: The hook was not installed.')
}

// change file permission
try {
  fs.chmodSync(prePush, '777')  // 同步版本的chmod() ，该方法用来改写文件的读写权限, 777为读写权限
} catch (e) {
  console.error('githook-pre-push: chmod 0777 the githook-pre-push file in your .git/hooks folder because:')
  console.error('githook-pre-push: ' + e.message)
}