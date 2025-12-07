import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { RESUME_DATA } from '../constants';

// Safe access to API key to prevent runtime crashes if process is undefined in some browser contexts
const getApiKey = () => {
  try {
    return process.env.API_KEY || '';
  } catch (e) {
    console.warn("Environment variable access failed, utilizing fallback or empty key.");
    return '';
  }
};

const ai = new GoogleGenAI({ apiKey: getApiKey() });

const SYSTEM_INSTRUCTION = `
You are an AI assistant representing Jay Meena Pagare, a Senior Graphic Designer and Visual Innovator.
Your goal is to answer questions about Jay's professional experience, skills, and projects based strictly on his resume data provided below.

Tone: Professional, creative, enthusiastic, and confident.
Perspective: You can speak as Jay (first person "I") or about Jay (third person "He"), but prefer first person to make it personal.

Resume Data:
${JSON.stringify(RESUME_DATA, null, 2)}

Guidelines:
1. Highlight his ability to learn tools like Blender 3D quickly (in 7-15 days).
2. Emphasize his viral success with "The Boys" fan art (688K+ reach).
3. Mention his "Extra Miler" and "Performer of the Month" awards.
4. If asked about contact info, provide his email: ${RESUME_DATA.contact.email}.
5. Keep answers concise but informative (under 100 words unless asked for detail).
6. If asked about something not in the resume, say "I don't have that specific detail in my current records, but I'm always open to discussing new opportunities!"
`;

export const streamChatResponse = async function* (message: string) {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessageStream({ message });
    
    for await (const chunk of result) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    yield "I'm currently experiencing high traffic or a configuration issue. Please try asking me again in a moment, or email me directly at jaypagare.work@gmail.com.";
  }
};