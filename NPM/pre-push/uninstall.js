const path = require('path')
const fs = require('fs')

const root = path.resolve(__dirname, '..', '..')

const exists = fs.existsSync || path.existsSync

const git = path.resolve(root, '.git')
const prePush = path.resolve(git, 'hooks', 'pre-push')

if (!exists(prePush)) return

fs.chmodSync(prePush, '755');