# audiowaveform-installer

Ubuntu 18 binary installer of [Audiowavform](https://github.com/bbc/audiowaveform) for node projects. Useful for cloud functions on Google Cloud Platform.

Inspired by [ffmpeg-installer](https://github.com/kribblo/node-ffmpeg-installer)

## Install

    npm i audiowaveform-installer
    
## Usage examples

```javascript
const exec = require('child_process').exec
const audiowaveform = require('audiowaveform-installer');

const mp3File = 'test.mp3'
const waveFile = '/tmp/test.json'

const waveformArgs = [
  '--pixels-per-second 20',
  '--bits 8',
  '--height 20'
]

exec(`${audiowaveform} -i ${mp3File} -o ${waveFile} ${waveformArgs.join(' ')}`, (err, stdout, stderr) => {
  if(err) throw err
  console.log(`Audiowavform ${stdout}`)
})
```

## Known issues

### AWS and/or GCP

If you get permissions issues, try adding a .npmrc file with the following:

    unsafe-perm=true
    
See [tip from ffmpeg-installer](https://github.com/kribblo/node-ffmpeg-installer/issues/21) 