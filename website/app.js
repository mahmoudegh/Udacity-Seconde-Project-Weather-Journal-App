// const openWeatherMap = a26e439037a7723ccab5cff83466280d;

const postData = async (url = "", data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

postData("/add", { answer: 42, score: 5 });
postData("/add", { answer: 100, score: 6 });

////////////////////////////////////////////////////////////////////////////////////////

/* Global Variables */
// const openWeatherMap = a26e439037a7723ccab5cff83466280d;

// openWeatherMap.fetch();

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
