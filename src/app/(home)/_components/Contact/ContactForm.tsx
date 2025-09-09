"use client"

import React, { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({
    message: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSendEmail = async () => {
    setLoading(true);
    if (email == "") {
      setError((prevState) => ({ ...prevState, email: "email is required" }));
      setLoading(false);
      return;
    }

    await fetch("api/send-email", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        message: message,
      }),
    });

    setLoading(false);
  };

  return (
    <React.Fragment>
      <input
        type="email"
        name="email"
        className="w-full rounded-md border border-gray-200 p-2.5"
        placeholder="type email here..."
        onChange={(event) => setEmail(event.target.value)}
      />
      {error.email !== "" && (
        <p className="text-red-500 text-sm mt-1.5">{error.email}</p>
      )}
      <textarea
        name="message"
        placeholder="type message here..."
        className="w-full mt-5 p-2.5 rounded-md border-gray-200"
        onChange={(event) => setMessage(event.target.value)}
      />
      <div className="text-right">
        <button
          onClick={handleSendEmail}
          className="bg-[#1DCD9F] hover:bg-[#18ac85] duration-150 text-white px-5 py-2.5 mt-5 rounded-lg ml-auto transition-all disabled:bg-slate-600 disabled:cursor-default"
          disabled={loading}
        >
          Send
        </button>
      </div>
    </React.Fragment>
  );
}
