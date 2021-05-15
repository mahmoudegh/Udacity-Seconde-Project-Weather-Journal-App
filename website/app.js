const baseURL = "http://api.openweathermap.org/data/2.5/forecast?id=";
const apiKey = "&appid=a26e439037a7723ccab5cff83466280d";
///////////////////////////////////////////////////////////////////////

document.getElementById("generate").addEventListener("click", performAction);
//////////////////////////////////////////////////////////////////////////////

function performAction(e) {
  const zipCode = document.getElementById("zip").value;
  const feelings = document.getElementById("feelings").value;

  getData(baseURL, zipCode, apiKey)
    .then(function (data) {
      console.log(data);

      // Add Data to Post Request
      postData("/addData", {
        date: data.list[0].dt_txt,
        temp: data.list[0].main.temp,
        feelings: feelings,
      });
    })
    .then(updateUI());
}
/////////////////////////////////////////////////////////////////////////////////////

/* Function to GET data */
const getData = async (baseURL, zip, key) => {
  const res = await fetch(baseURL + zip + key);

  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};
//////////////////////////////////////////////////////////////////////////////////////

const postData = async (url = "", data = {}) => {
  // console.log(data);
  const res = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  try {
    const newData = await res.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};
////////////////////////////////////////////////////////////////////////////////////

// TODO-Async GET
const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    console.log(allData);
    document.getElementById("date").innerHTML = allData[allData.length - 1].date;
    document.getElementById("temp").innerHTML = allData[allData.length - 1].temp;
    document.getElementById("content").innerHTML = allData[allData.length - 1].feelings;
  } catch (error) {
    console.log("error", error);
  }
};
