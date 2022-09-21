import { useState } from "react";

function Categories() {
    const [activeIndex, setActiveIndex] = useState(0);

    const categories = [
        'All',
        'With Meat',
        'For vegetarians',
        'Grill',
        'Spicy',
        'Calzone'
    ];

    return (
        <div class="categories">
            <ul>
                {
                    categories.map((value, index) => (
                        <li onClick={() => setActiveIndex(index)} 
                            className={activeIndex === index ? 'active' : ''}>{value}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Categories;