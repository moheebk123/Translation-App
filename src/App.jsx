import { useEffect, useState } from "react";
import {
  Header,
  Loader,
  LanguageSelector,
  TranscriptDisplay,
  Controls,
  SpeedSelector,
} from "./components";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("es");
  const [originalText, setOriginalText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [speed, setSpeed] = useState("slow");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="min-h-96 px-6 py-3 md:border md:rounded-xl shadow-2xl">
      <Header />
      <LanguageSelector
        sourceLang={sourceLang}
        targetLang={targetLang}
        onSourceChange={setSourceLang}
        onTargetChange={setTargetLang}
      />
      <TranscriptDisplay
        originalText={originalText}
        translatedText={translatedText}
      />
      <SpeedSelector speed={speed} setSpeed={setSpeed} />
      <Controls
        originalText={originalText}
        setOriginalText={setOriginalText}
        translatedText={translatedText}
        setTranslatedText={setTranslatedText}
        sourceLang={sourceLang}
        targetLang={targetLang}
        speed={speed}
      />
    </div>
  );
};

export default App;
