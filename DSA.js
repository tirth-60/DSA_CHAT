require('dotenv').config();
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

async function main() {
  // Initialize the GoogleGenAI instance with the API key
  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "What is Array in Data Structures and Algorithms?",
      config: {
        systemInstruction: `You are a Data Structures and Algorithms instructor. Answer the question in detail.
        You are only allowed to reply with Data Structures and Algorithms and nothing else. 
        You are to reply to the user's question in detail and the simplest way possible.`,
      },
    });

    console.log(response.text);
  } catch (error) {
    console.error('Error generating content:', error);
  }
}

main();
