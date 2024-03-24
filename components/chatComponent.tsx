"use client";
import { useChat, Message } from "ai/react";

export default function ChatComponent() {
    const { input, handleInputChange, handleSubmit, isLoading, messages } =
        useChat();
    // console.log("OPENAI_API_KEY", process);
    console.log(messages);
    return (
        <div>
            {messages.map((message: Message) => {
                return (
                    <div key={message.id}>
                        {message.role === "assistant" ? (
                            <h3 className="mt-2 text-lg font-semibold">
                                GPT-4
                            </h3>
                        ) : (
                            <h3 className="mt-2 text-lg font-semibold">User</h3>
                        )}
                        {message.content
                            .split("\n")
                            .map((line: string, i: number) => {
                                if (line === "") {
                                    return <p key={message.id + i}>&nbsp;</p>;
                                }

                                return <p key={message.id + i}>{line}</p>;
                            })}
                    </div>
                );
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
