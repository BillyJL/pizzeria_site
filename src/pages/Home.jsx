import { useState, useEffect } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlockSkeleton';

function Home({ searchValue, setSearchValue }) {
    const [pizzas, setPizzas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [selectedSort, setSelectedSort] = useState({ name: 'popularity', sortProperty: 'rating' });

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://632dac792cfd5ccc2af424bf.mockapi.io/pizzas?${categoryId > 0 ? `category=${categoryId}` : ''
            }&sortBy=${selectedSort.sortProperty
            }&order=${selectedSort.sortProperty === 'title' ? 'asc' : 'desc'
            }${searchValue ? `&search=${searchValue}` : ''}`)
            .then(res => res.json())
            .then(json => {
                setPizzas(json);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, selectedSort, searchValue]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories categoryId={categoryId} onClickCategory={setCategoryId} />
                <Sort selectedSort={selectedSort} onClickSort={setSelectedSort} />
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
                {
                    isLoading
                        ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                        : pizzas.map(value => <PizzaBlock key={value.id} {...value} />)
                }
            </div>
        </div>
    );
}

export default Home;