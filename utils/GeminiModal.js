const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
  ChatSession,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_APP_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Export chatSession outside of the async function
export const chatSession = model.startChat({
  generationConfig,
  // Add safety settings if needed, referring to the safety settings documentation
  safetySettings: [],
  history: [
    {
      role: "user",
      parts: [
        { text: "give questions and answer for salesforce admin role as a fresher in json format. give answer and question as fields in json\n" },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```json\n[\n  {\n    \"question\": \"What is Salesforce and what are its key features?\",\n    \"answer\": \"Salesforce is a cloud-based software company that provides customer relationship management (CRM) services...\"\n  },\n  ...\n]```" },
      ],
    },
  ],
});

async function run() {
  const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  console.log(result.response.text());
}
