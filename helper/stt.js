import { whisper } from 'nodejs-whisper';
import fs from 'fs/promises';

async function speechToText(audioFile) {
  try {
    await whisper(audioFile, {
      modelName: 'base.en',
      whisperOptions: { language: 'en', output_format: 'txt' },
    });
    const transcript = await fs.readFile(`${audioFile}.txt`, 'utf8');
    if (!transcript) throw new Error('No transcript generated');
    return transcript;
  } catch (error) {
    console.error('Whisper STT failed:', error);
    throw error;
  }
}

export { speechToText };