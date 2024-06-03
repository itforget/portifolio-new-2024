"use client";
import {  User2 } from "lucide-react";
import React from "react";
import { useTypewriter} from 'react-simple-typewriter';
import Link from "next/link";

export default function Home() { 
  const [text] = useTypewriter({
    words: ['Olá, bem vindo ao meu portifolio!'],
    loop: 0
  });

  return (
    <main className="flex min-h-screen flex-col items-center relative">
      
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div>
          <span className="font-bold text-5xl text-zinc-200">{text}</span>
        </div>
        <div className="fixed bottom-64">
        <Link  href='/portifolio'>
          <User2 size={64} className="p-3 animate-bounce bg-zinc-200 rounded-full"/>
        </Link>
        </div>
      </div>
      <audio autoPlay loop hidden >
          <source src="music.mp3" type="audio/mpeg" />
        </audio>
    </main>
  );
}
