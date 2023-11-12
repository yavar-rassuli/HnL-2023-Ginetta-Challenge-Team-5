"use client";

import { useMemo } from "react";
import { useChat } from "ai/react";

type DataType = {
  context: any[];
};

export default function Chat() {
  const { messages, data, input, handleInputChange, handleSubmit } = useChat();

  const parsedData = useMemo<DataType[]>(
    () => data?.flatMap((x: string) => [null, JSON.parse(x)]),
    [data]
  );

  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
      {messages.length > 0
        ? messages.map((m, i) => (
          <div
          key={m.id}
          className={`flex flex-col mb-6 p-6 ${
            m.role === "user" ? "bg-gray-300 text-dark" : "bg-gray-700 text-white"
          }`}
        >
          <b>{m.role === "user" ? "User: " : "AI: "}</b>

              <small className="text-gray-500">
                {parsedData?.[i]?.context
                  ?.map(({ payload }) => payload.article)
                  .join(", ")}
              </small>

              <p className=" text-gray-500 whitespace-pre-wrap">{m.content.trim()}</p>
            </div>
          ))
        : null}

      <form className="bg-blue"  onSubmit={handleSubmit}>
        <input className="fixed w-full max-w-md bottom-0 border border-blue-300 rounded mb-8 shadow-xl p-2"
          value={input}
          placeholder="Ask something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
