const recorder = require('node-record-lpcm16');
const speech = require('@google-cloud/speech');
const db = require('./firebase/config');
// Creates a client
const client = new speech.SpeechClient();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const encoding = 'LINEAR16';
const sampleRateHertz = 16000;
const languageCode = 'en-US';

const request = {
  config: {
    encoding: encoding,
    sampleRateHertz: sampleRateHertz,
    languageCode: languageCode,
  },
  interimResults: false, // If you want interim results, set this to true
};

const writeData = async (transcript) => {
    try {
        await db.ref().push({
            content: transcript // lorem2 should be replaced with text from Google Speech2Text API
        });
    } catch (e) {
        console.log(e);
    }
};



// Create a recognize stream
const recognizeStream = client
  .streamingRecognize(request)
  .on('error', console.error)
  .on('data', data =>{
    process.stdout.write(
      data.results[0] && data.results[0].alternatives[0]
        ? `Transcription: ${data.results[0].alternatives[0].transcript}\n`
        : '\n\nReached transcription time limit, press Ctrl+C\n'
    );
    //*******/
    return writeData(data.results[0].alternatives[0].transcript+".");
  }
  );

// Start recording and send the microphone input to the Speech API.
// Ensure SoX is installed, see https://www.npmjs.com/package/node-record-lpcm16#dependencies
recorder
  .record({
    sampleRateHertz: sampleRateHertz,
    threshold: 0,
    // Other options, see https://www.npmjs.com/package/node-record-lpcm16#options
    verbose: false,
    recordProgram: 'rec', // Try also "arecord" or "sox"
    silence: '10.0',
  })
  .stream()
  .on('error', console.error)
  .pipe(recognizeStream);

console.log('Listening, press Ctrl+C to stop.');