const baseURL = 'http://api.openweathermap.org/data/2.5/forecast?id=';
const apiKey = '&appid=a26e439037a7723ccab5cff83466280d';
const zipCode = document.getElementById('zip');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getDate()} / ${d.getMonth() + 1} / ${d.getFullYear()}`;
date.innerHTML = `Date : ${newDate}`;

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
  postData(baseURL, zipCode.value, apiKey);
}
/* Function to GET data */
const postData = async (url, zip, key) => {
  const response = await fetch(url + zip + key, {
    method: 'POST',
  });

  try {
    const newData = await response.json();
    const dateNow = parseInt(Date.now().toString().slice(0, 10));
    const dtList = [];
    newData.list.forEach((el1) => {
      dtList.push(el1.dt);
      // console.log(el1.main.temp);
      dtList.forEach((el2) => {
        if (dateNow < el2) {
          console.log(dateNow, dtList[0], el1.main.temp);
        }
      });
    });

    return newData;
    // console.log(newData.list[0].main.temp);

    // console.log(Object.entries(newData)[3]);
  } catch (error) {
    console.log('error', error);
    // appropriately handle the error
  }
};

// TO DO-Call Function
