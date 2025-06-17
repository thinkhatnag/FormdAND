import { exec } from 'child_process';
import util from 'util';
const execPromise = util.promisify(exec);

async function textToSpeech(text) {
  try {
    await execPromise(`say "${text}"`);
    console.log('TTS played successfully');
  } catch (error) {
    console.error('TTS failed:', error);
    throw error;
  }
}

export { textToSpeech };