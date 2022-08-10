const fs = require('fs-extra');
const path = require('path');
const cwd = process.cwd();
const root = __dirname;

const sourcePath = path.join(root, 'source');
const destPath = cwd;

fs.copy(sourcePath, destPath)
    .then(() => {
        console.log('下载完成，请执行 npm install 安装依赖。')
    })
    .catch(err => console.error(err))