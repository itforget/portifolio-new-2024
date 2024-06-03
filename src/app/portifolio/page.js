import { User2 } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center relative">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </main>
      <div className="absolute inset-0 flex flex-col">
        <h1 className="text-6xl font-extrabold text-zinc-200 flex items-center justify-center my-5">
          Hi, I&apos;m Ítalo Cordeiro
        </h1>
        <div className="flex flex-col mx-64 mt-28 border-2 border-zinc-400 rounded p-4 pb-28 shadow-lg shadow-zinc-500">
          <div className="flex flex-row justify-between border-b-2 border-zinc-200 border-opacity-85">
            <div className="flex flex-row gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <ul className="flex flex-row gap-4" id="navigation">
              <li className="text-xl font-bold text-zinc-200">
                <a href="#about-me">SOBRE</a>
              </li>
              <li className="text-xl font-bold text-zinc-200">
                <a href="#projects">PROJETOS</a>
              </li>
              <li className="text-xl font-bold text-zinc-200">
                <a href="#contact">CONTATO</a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              id="about-me"
              className="flex justify-center text-5xl font-bold text-zinc-200 my-10"
            >
              SOBRE
            </h2>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col items-center border-2 border-zinc-400 rounded py-10 px-20 w-full shadow-lg shadow-zinc-500">
                <User2 size={180} className="p-3 bg-zinc-200 rounded-full" />
                <div className="flex flex-col justify-center gap-3 mt-10 border-t-2 border-zinc-300 border-opacity-15 w-full">
                  <p className="text-xl font-bold text-zinc-200 ">
                    Nome: Ítalo C.
                  </p>
                  <p className="text-xl font-bold text-zinc-200 ">
                    Idade: <span className="text-blue-500">22</span>
                  </p>
                  <p className="text-xl font-bold text-zinc-200 ">
                    Estado: DF - Brasilia
                  </p>
                </div>
              </div>
              <div className="flex flex-col h-auto justify-end items-end">
                <p className="text-3xl text-zinc-200">
                  Sou um desenvolvedor web apaixonado por criar soluções
                  digitais incríveis. Tenho experiência em{" "}
                  <span className="text-blue-600">React</span>,{" "}
                  <span className="text-zinc-600">Next.js</span>,
                  <span className="text-blue-400">Tailwind CSS</span> e outras
                  tecnologias modernas. Adoro trabalhar em projetos desafiadores
                  e estou sempre buscando aprender e me aprimorar.
                </p>
                <div className="flex justify-end items-end mt-9">
                  <Image src="/js.svg" alt="" width={70} height={70} />
                  <Image src="/react.svg" alt="" width={70} height={70} />
                </div>
              </div>
            </div>
            <audio autoPlay loop hidden>
              <source src="music.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>
    </>
  );
}
