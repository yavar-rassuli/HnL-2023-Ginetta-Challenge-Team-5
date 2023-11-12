
"use client";

import React, { useState, useMemo } from 'react'; 
import { useChat } from 'ai/react';
import Header from './api/chat/component/Header';
import ChatButton from './api/chat/component/ChatButton';

type DataType = {
  context: any[];
};

export default function Page() {
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
      <ChatButton />
    </>
  );
}
