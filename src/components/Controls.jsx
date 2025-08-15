import { useState, useRef } from "react";
import { postApi } from "../utils/apiHelpers";

const Controls = ({
  originalText,
  setOriginalText,
  translatedText,
  setTranslatedText,
  sourceLang,
  targetLang,
  speed,
}) => {
  const recognitionRef = useRef(null);
  const [recording, setRecording] = useState(false);

  // Initialize SpeechRecognition
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const startRecording = () => {
    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.lang = sourceLang;

    recognitionRef.current.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((res) => res[0].transcript)
        .join(" ");
      setOriginalText(transcript);
    };

    recognitionRef.current.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);
    };

    recognitionRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setRecording(false);
    }
  };

  // Translate using LibreTranslate API
  const translateText = async () => {
    if (!originalText) return;
    setTranslatedText("...");

    const body = {
      q: originalText,
      source: sourceLang,
      target: targetLang,
    };

    const res = await postApi("translate", body);

    if (res) {
      const data = await res.json();
      const translatedText = data.data.translations.translatedText[0];
      setTranslatedText(translatedText);
    } else {
      alert("Translation failed, try again.");
    }
  };

  // Speak translated text
  const speakText = async () => {
    if (!translatedText) return;
    const body = {
      text: translatedText,
      lang: targetLang,
      speed,
    };

    const res = await postApi("speach", body);
    if (res) {
      const audioBlob = await res.blob();
      const audioUrl = URL.createObjectURL(audioBlob);

      // Play the audio
      const audio = new Audio(audioUrl);
      audio.play();
    } else {
      alert("Speak failed, try again.");
    }
  };

  return (
    <div className="flex flex-row items-center justify-center flex-wrap gap-4 mt-6">
      <button
        onClick={recording ? stopRecording : startRecording}
        className={`px-4 py-2 rounded-md text-white ${
          recording
            ? "bg-red-600 hover:bg-red-700"
            : "bg-purple-600 hover:bg-purple-700"
        } transition-colors cursor-pointer`}
      >
        {recording ? "Stop Recording" : "Start Recording"}
      </button>

      <button
        onClick={translateText}
        className="px-4 py-2 rounded-md bg-purple-500 hover:bg-purple-600 text-white transition-colors cursor-pointer"
      >
        Translate
      </button>

      <button
        onClick={speakText}
        className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white transition-colors cursor-pointer"
      >
        Speak
      </button>
    </div>
  );
};

export default Controls;
