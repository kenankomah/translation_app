"use client";
import { useChat, Message } from "ai/react";

export default function ChatComponent() {
	const { input, handleInputChange, handleSubmit, isLoading, messages } =
		useChat();
	// console.log("OPENAI_API_KEY", process);
	console.log(messages);
	return (
		<div>
			{messages.length !== 0 &&
				messages[0].content
					.split("\n")
					.map((line: string, i: number) => {
						if (line === "") {
							return <p key={messages[0].id + i}>&nbsp;</p>;
						}

						return <p key={messages[0].id + i}>{line}</p>;
					})}

			{messages.length !== 0 &&
				messages[1]?.content
					.split("\n")
					.map((line: string, i: number) => {
						if (line === "") {
							return <p key={messages[0].id + i}>&nbsp;</p>;
						}

						return <p key={messages[0].id + i}>{line}</p>;
					})}

			<form className="mt-12" onSubmit={handleSubmit}>
				<p>User Message</p>
				<textarea
					className="mt-2 w-full bg-slate-600 p-2"
					placeholder={"What are data structures and algorithms?"}
					value={input}
					onChange={handleInputChange}
				></textarea>

				<button className="mt-2 rounded-md bg-blue-600 p-2">
					Send Message
				</button>
			</form>
		</div>
	);
}
