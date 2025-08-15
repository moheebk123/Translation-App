import { useCallback, useEffect, useState } from "react";
import config from "../config";
import { getApi } from "../utils/apiHelpers";

const defaultLanguages = [
  { code: "en", name: "English" },
  { code: "sq", name: "Albanian" },
];

const LanguageSelector = ({
  sourceLang,
  targetLang,
  onSourceChange,
  onTargetChange,
}) => {
  const [languages, setLanguages] = useState(defaultLanguages);

  const getLanguages = useCallback(async () => {
    const url = `${config.speachUrl}/supported-languages`;

    const data = await getApi(url);
    if (data) {
      const languageData = Object.entries(data).map(([code, name]) => ({
        code,
        name,
      }));
      setLanguages(languageData);
    } else {
      setLanguages(defaultLanguages);
    }
  }, []);

  useEffect(() => {
    getLanguages();
  }, [getLanguages]);

  return (
    <div className="flex flex-col sm:flex-row gap-10 mt-6 mb-4 items-start justify-center">
      <div className="flex flex-col">
        <label className="text-gray-300 mb-1">Input Language</label>
        <select
          className="bg-gray-900 text-white px-3 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={sourceLang}
          onChange={(e) => onSourceChange(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-gray-300 mb-1">Output Language</label>
        <select
          className="bg-gray-900 text-white px-3 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={targetLang}
          onChange={(e) => onTargetChange(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LanguageSelector;
