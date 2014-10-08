module.exports = null

if (process.platform === 'darwin')
  return module.exports = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

if (process.platform !== 'win32')
  return module.exports = require('which').sync('google-chrome')

var fs = require('fs')

var suffix = '\\Google\\Chrome\\Application\\chrome.exe';
var prefixes = [
    process.env.LOCALAPPDATA
  , process.env.PROGRAMFILES
  , process.env['PROGRAMFILES(X86)']
]

for (var i = 0; i < prefixes.length; i++) {
  var exe = prefixes[i] + suffix
  if (fs.existsSync(exe)) {
    return module.exports = exe
  }
}
