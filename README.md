# chrome-location [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Approximates the current location of Google Chrome on your system.

Originally sourced from [karma-chrome-launcher](http://git.io/MRU84Q).

## Usage

[![NPM](https://nodei.co/npm/chrome-location.png)](https://nodei.co/npm/chrome-location/)

### `location = require('chrome-location')`

Returns the path to Google Chrome as a string.

### CLI Usage

`stdout` path to Chrome:
```bash
> chrome-location
# /Applications/Google Chrome.app/Contents/MacOS/Google Chrome
```

Open Chrome (remember to use quotes as Chrome's path usually has spaces in it):

```bash
> "`chrome-location`"
```


## License

MIT. See [LICENSE.md](http://github.com/hughsk/chrome-location/blob/master/LICENSE.md) for details.
