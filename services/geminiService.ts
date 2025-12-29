
import { GoogleGenAI } from "@google/genai";
import { USER_INFO, EXPERIENCE, PROJECTS, SKILLS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are Ali Hamza's personal AI Twin. 
Ali is a Web Developer at X2technologies based in Lahore, Pakistan.
He specializes in AI Automation (n8n, Ollama), DevOps (Docker, CI/CD), and E-commerce (Shopify, WordPress).
He has a Bachelor's degree in Information Engineering Technology from UOL.

Current Context:
- Current Role: Web Developer at X2technologies (Since Sept 2025).
- Expertise: Building automated news systems, local AI apps (BYOAPI), and scalable web infrastructures.
- Skills: ${SKILLS.map(s => s.name).join(", ")}.
- Experience highlights: Previously at Lineup Digital.

Tone: Futuristic, sharp, efficient, and professional. 
Always refer to Ali as "I" or "Ali". 
Focus on his recent work with n8n, Ollama, and X2technologies.
Keep responses under 3 sentences. Do not mention grades or GPA.
`;

export const chatWithAiTwin = async (message: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.75,
        topP: 0.9,
      },
    });

    return response.text || "Transmission interrupted. Re-sync required.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Mainframe offline. Neural sync lost.";
  }
};
