import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";
import systemPrompt from "../data/systemPrompt.js";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
  systemInstruction: systemPrompt,
  generationConfig: {
    responseMimeType: "application/json"
  },
});

const getAIResponse = async (input) => {
    
  const result = await model.generateContent({
    contents: input,
  });

  const responseText = await result.response.text();
  return responseText;
};


export default getAIResponse;
