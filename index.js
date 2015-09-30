var osx   = process.platform === 'darwin'
var win   = process.platform === 'win32'
var other = !osx && !win
var fs    = require('fs')

if (other) {
  try {
    module.exports = require('which').sync('google-chrome')
  } catch(e) {
    module.exports = null
  }
} else
if (osx) {
  var regPath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  var altPath = require('userhome')(regPath.slice(1))

  module.exports = fs.existsSync(regPath)
    ? regPath
    : altPath
} else {
  var suffix = '\\Google\\Chrome\\Application\\chrome.exe'
  module.exports = [
      process.env.LOCALAPPDATA
    , process.env.PROGRAMFILES
    , process.env['PROGRAMFILES(X86)']
  ].reduce(function (existing, prefix) {
    var exe = prefix] + suffix
    return existing || (fs.existsSync(exe) ? exe : null)
  }, null)
}
