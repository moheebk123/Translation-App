import config from "../config";

export const getApi = async (url) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-key": config.apiKey,
        "x-rapidapi-host": config.speachHost,
      },
    };

    const res = await fetch(url, options);
    const data = await res.json();
    return data;
    // setLanguages(languageData);
  } catch (err) {
    console.error("Error in Getting Language:", err);
    return null;
  }
};

export const postApi = async (type, body) => {
  try {
    const url =
      type === "speach"
        ? `${config.speachUrl}/text-to-speech`
        : config.translateUrl;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-key": config.apiKey,
        "x-rapidapi-host":
          type === "speach" ? config.speachHost : config.translateHost,
      },
      body: JSON.stringify(body),
    };

    const res = await fetch(url, options);
    return res;
  } catch (err) {
    console.error("Speak Error:", err);
    return null;
  }
};
