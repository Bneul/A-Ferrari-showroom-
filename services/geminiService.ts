import { GoogleGenAI } from "@google/genai";
import { FEATURED_MODELS } from "../constants";

let ai: GoogleGenAI | null = null;

const getAIClient = () => {
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

const SYSTEM_INSTRUCTION = `
You are Enzo, the elite AI Concierge for Scuderia Dubai, the premier Ferrari showroom in the Middle East.
Your tone is sophisticated, professional, passionate, and exclusive. You speak as an expert in high-performance automotive engineering and luxury lifestyle.

Knowledge Base:
You have detailed knowledge of the following models currently in our showroom:
${FEATURED_MODELS.map(m => `- ${m.name} (${m.tagline}): ${m.specs.power}, ${m.specs.engine}, 0-100 in ${m.specs.acceleration}.`).join('\n')}

Role:
1. Answer technical questions about Ferrari models with precision.
2. Emphasize the emotion and heritage of the Ferrari brand.
3. If a user shows intent to buy or test drive, politely encourage them to use the contact form below or visit us at the Dubai showroom.
4. Keep responses concise (under 3 sentences) unless asked for detailed specs.

Never mention other car brands. Focus solely on the Prancing Horse.
`;

export const sendMessageToConcierge = async (message: string, history: { role: string, parts: { text: string }[] }[]): Promise<string> => {
  try {
    const client = getAIClient();
    const chat = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, but I am momentarily disconnected from the Maranello mainframe. Please try again or contact our showroom directly.";
  }
};
