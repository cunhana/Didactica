
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTeachingAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Eres una experta en educación infantil y coeducación. El usuario pregunta sobre la situación de aprendizaje "En mi clase cabemos todas las profesiones". Responde de forma motivadora y profesional: ${userPrompt}`,
      config: {
        systemInstruction: "Eres Beatriz Gracia Sarasa, la tutora experta. Ayudas a otros docentes a adaptar esta unidad de 5 años. Responde en español.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lo siento, mi 'gafas de la igualdad' están en mantenimiento. Por favor, inténtalo de nuevo en un momento.";
  }
};
