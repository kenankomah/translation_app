import Image from "next/image";
import ChatComponent from "@/components/chatComponent";

//this is a server side rendered page
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-[800px] rounded-md bg-slate-800 p-3 text-white">
                <h2 className="text-2xl"> GPT-4 Streaming Chat Application</h2>
                <ChatComponent />
            </div>
        </main>
    );
}
