"use client";

import "regenerator-runtime/runtime";
import React, { useState, ChangeEvent } from "react";
import TextArea from "@/components/Inputs/TextArea";
import SpeechRecognitionComponent from "@/components/SpeechRecognition/SpeechRecognition";
import FileUpload from "@/components/Inputs/FileUpload";
import { FaVolumeUp } from "react-icons/fa";
import { rtfToText } from "@/utils/rtfToText";
// import PasteUrl from "@/components/Inputs/PasteUrl";
import useTranslate from "@/hooks/useTranslate";
import LanguageDropdown from "@/components/Inputs/LanguageDropdown";
import { IoCopyOutline } from "react-icons/io5";

const Home: React.FC = () => {
  const [sourceText, setSourceText] = useState("");
  const [copied, setCopied] = useState(false);
  const [languages] = useState<string[]>([
    "English",
    "French",
    "Spanish",
    "German",
    "Chinese",
    "Korean",
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("French");

  const targetText = useTranslate(sourceText, selectedLanguage);

  const handleAudioPlay = (text: string) => {
    const voiceNote = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(voiceNote);
  };

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const read = new FileReader();

      read.onload = () => {
        const content = read.result as string;
        const text = rtfToText(content);
        setSourceText(text);
      };
      read.readAsText(file);
    }
  };

  // const handlePasteUrl = (text: string) => {};

  const handleCopy = () => {
    navigator.clipboard.writeText(targetText);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-lime-200/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p> */}
      <div className="relative overflow-hidden h-screen">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 py-10 sm:py-24">
          <h1 className="text-center text-4xl sm:text-7xl font-bold relative z-20 pb-4">
            <span className="relative z-20 bg-clip-text text-transparent  bg-gradient-to-b from-white to-zinc-950">
              Lang
            </span>
            <span className="px-4 relative z-20 bg-clip-text text-transparent  bg-gradient-to-b from-lime-50 to-lime-500">
              Shift
            </span>
          </h1>
          <p className="font-light text-neutral-400 text-center">
            Lang Shift: Connect Globally, Speak Locally.
          </p>

          <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1 w-full">
              <div className="relative z-10 flex flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-950 border-neutral-700 shadow-gray-900/20">
                {/* textarea */}
                <TextArea
                  id="source-lang"
                  value={sourceText}
                  placeholder="Source Language"
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                    setSourceText(e.target.value);
                  }}
                />
                <div className="flex flex-row justify-between w-full">
                  <span className="flex flex-row cursor-pointer space-x-4 py-2">
                    <SpeechRecognitionComponent setSourceText={setSourceText} />
                    <FaVolumeUp
                      size={19}
                      onClick={() => handleAudioPlay(sourceText)}
                    />
                    {/* File upload */}
                    <FileUpload handleUpload={handleUpload} />
                    {/* <PasteUrl handlePasteUrl={handlePasteUrl} /> */}
                  </span>
                  <span className="text-sm pr-6 pt-2">
                    {sourceText.length} / 2000
                  </span>
                </div>
              </div>
              <div className="relative z-10 flex flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-950 border-neutral-700 shadow-gray-900/20">
                {/* textarea */}
                <TextArea
                  id="target-lang"
                  value={targetText}
                  placeholder="Target Language"
                  onChange={() => {}}
                />
                <div className="flex flex-row justify-between w-full">
                  <span className="flex flex-row cursor-pointer space-x-3 py-2">
                    <LanguageDropdown
                      selectedLanguage={selectedLanguage}
                      setSelectedLanguage={setSelectedLanguage}
                      languages={languages}
                    />
                    <FaVolumeUp
                      size={21}
                      className="pt-1"
                      onClick={() => handleAudioPlay(targetText)}
                    />
                  </span>
                  <div className="flex flex-row items-center space-x-3 pr-6 cursor-pointer">
                    <IoCopyOutline size={20} onClick={handleCopy} />
                    {copied && (
                      <span className="text-xs border border-neutral-900 px-2 py-[0.2rem] rounded-[5px]">
                        Copied!
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
