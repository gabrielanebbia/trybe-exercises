const API_URL = 'https://api.coincap.io/v2/assets';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchCryptoCoins = async () => {
  const coins = await fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => data.data)

  return coins;
}

const setCoins = async () => {
  const coins = await fetchCryptoCoins();

  const coinsList = document.getElementById('coins');

  for(index = 0; index < coins.length; index += 1) {
    const li = document.createElement('li');
    const price = Number(coins[index].priceUsd);
    li.innerText = `${coins[index].name} (${coins[index].symbol}): ${price.toFixed(2)}`;
    coinsList.appendChild(li);
  }
}

window.onload = () => setCoins();
