const config = {
  translateUrl: String(import.meta.env.VITE_TRANSLATE_API_URL),
  translateHost: String(import.meta.env.VITE_TRANSLATE_API_HOST),
  speachUrl: String(import.meta.env.VITE_SPEACH_API_URL),
  speachHost: String(import.meta.env.VITE_SPEACH_API_HOST),
  apiKey: String(import.meta.env.VITE_API_KEY),
};

export default config