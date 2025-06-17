import { HfInference } from '@huggingface/inference';

async function generateDoctorResponse(transcript) {
  const hf = new HfInference('YOUR_HF_API_KEY'); // From https://huggingface.co/
  const prompt = `You are a professional doctor. Respond to the patient's statement in a clear, professional manner: "${transcript}"`;
  try {
    const response = await hf.textGeneration({
      model: 'facebook/bart-large',
      inputs: prompt,
      parameters: { max_length: 150 },
    });
    return response.generated_text;
  } catch (error) {
    console.error('Text generation failed:', error);
    return 'I’m sorry, I couldn’t process the response. Please consult a doctor.';
  }
}

export { generateDoctorResponse };