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
  var osxSuffix = '/Contents/MacOS/Google Chrome'
  var regPath = '/Applications/Google Chrome.app' + osxSuffix
  var altPath = require('userhome')(regPath.slice(1))
  var mdFindCmd = 'mdfind \'kMDItemDisplayName == "Google Chrome" && kMDItemKind == Application\''

  if (fs.existsSync(regPath)) {
    module.exports = regPath
  } else if (fs.existsSync(altPath)) {
    module.exports = altPath
  } else {
    var foundPath = require('child_process').execSync(mdFindCmd, { encoding: 'utf8' })
    module.exports = (foundPath) ? foundPath.trim() + osxSuffix : null
  }
} else {
  var winSuffix = '\\Google\\Chrome\\Application\\chrome.exe';
  var prefixes = [
      process.env.LOCALAPPDATA
    , process.env.PROGRAMFILES
    , process.env['PROGRAMFILES(X86)']
  ]

  for (var i = 0; i < prefixes.length; i++) {
    var exe = prefixes[i] + winSuffix
    if (fs.existsSync(exe)) {
      module.exports = exe
      break
    }
  }
}

module.exports = module.exports || null
