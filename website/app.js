// Api Parts
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=a26e439037a7723ccab5cff83466280d&units=metric';

// Start click event
document.getElementById('generate').addEventListener('click', performAction);

// Main Function
function performAction() {
  const zipCode = document.getElementById('zip').value;
  const feelings = document.getElementById('feelings').value;
  const date = new Date().toDateString();

  getData(baseURL, zipCode, apiKey).then(function (data) {
    // Add Data to Post Request
    postData('/addData', {
      date: date,
      city: data.name,
      temp: data.main.temp,
      feelings: feelings,
    });

    // Update UI
    updateUI();
  });
}

// Function to GET data
const getData = async (baseURL, zip, key) => {
  const res = await fetch(baseURL + zip + key);

  try {
    const data = await res.json();

    // Check If Zip Is Wrong
    if (data.cod === '404') {
      document.getElementById('error').innerHTML = 'City Not Found';
      document.getElementById('date').innerHTML = '';
      document.getElementById('country').innerHTML = '';
      document.getElementById('temp').innerHTML = '';
      document.getElementById('content').innerHTML = '';
    } else {
      document.getElementById('error').innerHTML = '';
      return data;
    }
  } catch (error) {
    console.log('error', error);
  }
};

// Function to post data
const postData = async (url = '', data = {}) => {
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await res.json();
    return newData;
  } catch (error) {
    console.log('error', error);
  }
};

// Update UI
const updateUI = async () => {
  const request = await fetch('/all');
  try {
    const allData = await request.json();
    document.getElementById('date').innerHTML = `Date: ${allData.date}`;
    document.getElementById('country').innerHTML = `City: ${allData.city}`;
    document.getElementById('temp').innerHTML = `Temp: ${Math.ceil(
      allData.temp,
    )} &deg;C`;
    document.getElementById(
      'content',
    ).innerHTML = `Your feelings: ${allData.feelings}`;
  } catch (error) {
    console.log('error', error);
    document.getElementById('error').innerHTML = 'City Not Found';
  }
};
