import Header from './Header';
import Categories from './Categories';
import Sort from './Sort';
import PizzaBlock from './PizzaBlock';

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
            <PizzaBlock title="Mexican" price="20"/>
            <PizzaBlock title="Mexican" price="20"/>
            <PizzaBlock title="Mexican" price="20"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
