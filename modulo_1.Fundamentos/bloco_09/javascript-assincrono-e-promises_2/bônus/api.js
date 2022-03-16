const API_URL = 'https://api.coincap.io/v2/assets';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchCryptoCoins = async () => {
  const coins = await fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => data.data)

  console.log(coins);
}

window.onload = () => fetchCryptoCoins();
