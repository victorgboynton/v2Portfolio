"use client";
import React, { useState, useEffect } from "react";

export function BlinkDescriptor() {
  const descriptor = [
    "Done Right.",
    "With Care.",
    "Done Efficiently.",
    "With Vision.",
    "Done Beautifully.",
  ];
  const [currentPhrase, setCurrentPhrase] = useState(descriptor[0]);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prevIndex) => (prevIndex + 1) % descriptor.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentPhrase(descriptor[phraseIndex]);
  }, [phraseIndex]);
  return (
    <div>
      <p
        key={phraseIndex}
        className="opacity-0 animate-[fade-in_1.5s_forwards,fade-out_1s_3s_forwards]"
      >
        {currentPhrase}
      </p>
    </div>
  );
}
