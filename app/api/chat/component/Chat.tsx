// Chat.tsx
import { useMemo } from "react";
import { useState } from 'react';
import { useChat } from "ai/react";
import Header from "./Header";
import Header2 from "./Header2";

type DataType = {
  context: any[];
};

const Chat: React.FC = () => {
  const { messages, data, input, handleInputChange, handleSubmit } = useChat();

  const parsedData = useMemo<DataType[]>(
    () => data?.flatMap((x: string) => [null, JSON.parse(x)]),
    [data]
  );

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e, { /* chatRequestOptions */ });
    setFormSubmitted(true);
  };

  return (
    <>
      {(formSubmitted || input.trim() !== "") ? (
        <Header />
      ) : (
        <Header2 />
      )}

      <div className="mx-auto w-full max-w-4xl py-24 flex flex-col stretch">
        {!formSubmitted && input.trim() === "" && (
          <p className="text-center text-gray-500 mb-4">
            Please type your question below, and LegalAId will help you
          </p>
        )}

        {messages.length > 0
          ? messages.map((m, i) => (
              <div
                key={m.id}
                className={`flex flex-col mb-6 p-6 rounded-xl ${
                  m.role === "user"
                    ? "bg-gray-300 text-dark  items-start w-1/2 ml-auto"
                    : "bg-gray-700 text-white   w-1/2"
                }`}
              >
                <b>{m.role === "user" ? "You: " : "LegalAId: "}</b>
                <small className="text-gray-500">
                  {parsedData?.[i]?.context
                    ?.map(({ payload }) => payload.article)
                    .join(", ")}
                </small>

                <p className="whitespace-pre-wrap">{m.content.trim()}</p>
              </div>
            ))
          : null}

        <form onSubmit={handleFormSubmit}>
          <input
            className="fixed w-full max-w-4xl bottom-0 border border-gray-600 rounded mb-2 shadow-xl p-4 bg-gray-300 text-dark"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </>
  );
}

export default Chat;
