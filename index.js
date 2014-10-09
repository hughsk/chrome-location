var fs = require('fs')

module.exports = null

if (process.platform === 'darwin') {
  var regPath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  var altPath = '~' + regPath;

  return module.exports = fs.existsSync(regPath)
    ? regPath
    : altPath
}


if (process.platform !== 'win32')
  return module.exports = require('which').sync('google-chrome')


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
