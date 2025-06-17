import { exec } from 'child_process';
import util from 'util';
const execPromise = util.promisify(exec);

async function recordAudio(durationSeconds, outputFile) {
  const command = `ffmpeg -f avfoundation -i ":0" -t ${durationSeconds} ${outputFile}`;
  try {
    await execPromise(command);
    console.log(`Audio recorded to ${outputFile}`);
  } catch (error) {
    console.error('Audio recording failed:', error);
    throw error;
  }
}

export { recordAudio };