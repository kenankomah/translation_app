import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge"; // provide optimal infrastructure for our API route (https://edge-runtime.vercel.app/)

const config = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(request: Request) {
	const { messages } = await request.json();
	console.log(messages, "messages");

	//createChatCompletion (get response from OpenAI)
	const response = await openai.createChatCompletion({
		// model: "gpt-4",
		model: "gpt-4",
		stream: true,
		messages: [
			{
				role: "system",
				content:
					"You are a translator. You translate from English to German.",
			},
			...messages,
		],
	});

	// create a stream to get the response from OpenAI (stream data to the frontend)
	const stream = await OpenAIStream(response);

	//send the response to the client/frontend
	return new StreamingTextResponse(stream);
}
