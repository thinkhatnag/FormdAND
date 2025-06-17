import { remote } from 'webdriverio';
import AppPage from '../pages/app.page.js';
import { recordAudio } from '../../helper/audio.js';
import { speechToText } from '../../helper/stt.js';
import { generateDoctorResponse } from '../../helper/textGeneration.js';
import { textToSpeech } from '../../helper/tts.js';

describe('Conversation Flow', function () {

  it('should complete conversation flow', async function () {
    await AppPage.clickStartConversation();
    await recordAudio(10, './output/output.wav');
    const transcript = await speechToText('./output/output.wav');
    console.log('Transcript:', transcript);
    const doctorResponse = await generateDoctorResponse(transcript);
    console.log('Doctor Response:', doctorResponse);
    await textToSpeech(doctorResponse);
  });

  after(async function () {
    await driver.deleteSession();
  });
});