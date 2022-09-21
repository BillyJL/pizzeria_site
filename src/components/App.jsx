import Header from './Header';
import Categories from './Categories';
import Sort from './Sort';
import PizzaBlock from './PizzaBlock';

import pizzas from '../assets/pizzas.json'

import '../scss/app.scss';

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">All pizzas</h2>
          <div class="content__items">
            {
              pizzas.map(value => <PizzaBlock {...value}/>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
