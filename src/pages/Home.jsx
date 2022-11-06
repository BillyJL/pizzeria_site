import { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../components/App';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlockSkeleton';

function Home() {
    const dispatch = useDispatch();
    const { categoryId, sort } = useSelector(state => state.filter);

    const { searchValue } = useContext(SearchContext);
    const [pizzas, setPizzas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id));
    };

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://632dac792cfd5ccc2af424bf.mockapi.io/pizzas?${categoryId > 0 ? `category=${categoryId}` : ''
            }&sortBy=${sort.sortProperty
            }&order=${sort.sortProperty === 'title' ? 'asc' : 'desc'
            }${searchValue ? `&search=${searchValue}` : ''}`)
            .then(res => res.json())
            .then(json => {
                setPizzas(json);
                setIsLoading(false);
            });
    }, [categoryId, sort, searchValue]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories categoryId={categoryId} onClickCategory={onChangeCategory} />
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
        </div>
    );
}

export default Home;