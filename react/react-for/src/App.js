<<<<<<< HEAD
import { useEffect, useState } from 'react';

function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setcoins] = useState([]);
	const [Convert, setConvert] = useState(0);
	const [Won, setWon] = useState(0);
	const [symbol, setsymbol] = useState('');
	const [Dollar, setDollar] = useState(0);
	const WonChange = Won / (Convert * 1285.29);
	const onChange = e => {
		if (e.target.id === 'Won') {
			setWon(e.target.value);
			setDollar(e.target.value * 0.00078);
		} else if (e.target.id === 'Dollar') {
			setDollar(e.target.value);
			setWon(e.target.value * 1285.29);
		}
	};

	const showValue = e => {
		const index = e.target.selectedIndex;
		console.log(e.target.childNodes[index].getAttribute('data-name'));
		setsymbol(e.target.childNodes[index].getAttribute('data-name'));
		console.log(e.target.value);
		setConvert(e.target.value);
	};
	// const [convert, setconvert] = useState(0);
	useEffect(() => {
		fetch('https://api.coinpaprika.com/v1/tickers')
			.then(response => response.json())
			.then(json => {
				setcoins(json);
				setLoading(false);
			});
	}, []);
	return (
		<div>
			<h1>코인 시세! ({loading ? '' : `${coins.length}`})</h1>
			<h3>환전소</h3>
			<input
				id='Won'
				type='text'
				value={Won}
				onChange={onChange}></input>
			<label> &#8361; </label>
			<input
				id='Dollar'
				type='text'
				value={Dollar}
				onChange={onChange}></input>
			<label> &#36;</label>
			<h3>코인을 골라주세요.</h3>
			{loading ? (
				<strong>Loading...</strong>
			) : (
				<select onChange={showValue}>
					{coins.map(coin => {
						return (
							<option
								id={coin.id}
								key={coin.id}
								value={coin.quotes.USD.price}
								data-name={coin.symbol}>
								{coin.name} ({coin.symbol}) : {coin.quotes.USD.price}
							</option>
						);
					})}
				</select>
			)}
		</div>
	);
}

=======
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>코인 시세 {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>로딩 중..</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
>>>>>>> 24dfdcc4af35f6cc5f72686327546f76fb465ed9
export default App;