import OpenAI from "openai";
import { env } from "./env";
import invariant from "tiny-invariant";

const openai = new OpenAI({
  apiKey: env.OPEN_AI_KEY,
});

export async function promptForJson(input: string) {
  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: input,
      },
    ],
    model: "gpt-3.5-turbo-1106",
    response_format: {
      type: "json_object",
    },
  });

  invariant(
    response.choices[0].message.content,
    "OpenAI response did not contain a valid response."
  );

  return JSON.parse(response.choices[0].message.content);
}
