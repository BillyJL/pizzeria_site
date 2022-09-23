import { useState, useEffect } from 'react';

import Header from './Header';
import Categories from './Categories';
import Sort from './Sort';
import PizzaBlock from './PizzaBlock';

import '../scss/app.scss';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('https://632dac792cfd5ccc2af424bf.mockapi.io/pizzas')
    .then(res => res.json())
    .then(json => setPizzas(json));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All pizzas</h2>
          <div className="content__items">
            {
              pizzas.map(value => <PizzaBlock key={value.id} {...value} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
