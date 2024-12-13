import { Groq } from "groq-sdk"
const DAFFA_API = import.meta.env.VITE_DAFFA_AI;

const groq = new Groq ({
  apiKey: DAFFA_API,
  dangerouslyAllowBrowser : true
});

export const requestToGroqAI = async(content) => {
    const reply = await groq.chat.completions.create({
        messages : [{
            role : 'user',
            content,
        }],
        model : 'llama3-8b-8192', 
    })
    return reply.choices[0].message.content;
}