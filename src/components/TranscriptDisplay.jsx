const TranscriptDisplay = ({ originalText, translatedText }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* Original Transcript */}
      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 min-h-[150px]">
        <h2 className="text-purple-400 mb-2 font-semibold">Original</h2>
        <p className="text-gray-200">{originalText || "Nothing yet..."}</p>
      </div>

      {/* Translated Transcript */}
      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 min-h-[150px]">
        <h2 className="text-purple-400 mb-2 font-semibold">Translated</h2>
        <p className="text-gray-200">{translatedText || "Nothing yet..."}</p>
      </div>
    </div>
  );
};


export default TranscriptDisplay;
