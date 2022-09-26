import { useState, useEffect } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlockSkeleton';

function Home() {
    const [pizzas, setPizzas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://632dac792cfd5ccc2af424bf.mockapi.io/pizzas')
            .then(res => res.json())
            .then(json => {
                setPizzas(json);
                setIsLoading(false);
            });
    }, []);

    return(
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
                {
                    isLoading
                        ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                        : pizzas.map(value => <PizzaBlock key={value.id} {...value} />)
                }
            </div>
        </>
    );
}

export default Home;