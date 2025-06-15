"use client";

import { useTypewriter } from "@/hooks/use-typewriter";

interface TypewriterGradientProps {
  words: string[];
  className?: string;
}

export function TypewriterGradient({
  words,
  className = "",
}: TypewriterGradientProps) {
  const text = useTypewriter({ words, typeSpeed: 80 });

  return (
    <div className={`relative ${className}`}>
      <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-pink-500 bg-clip-text text-transparent font-bold">
        {text}
      </span>
      <span className="ml-1 animate-pulse text-purple-500 font-bold">|</span>
    </div>
  );
}
