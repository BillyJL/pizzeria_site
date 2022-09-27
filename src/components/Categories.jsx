function Categories({ categoryId, onClickCategory }) {

    const categories = [
        'All',
        'With Meat',
        'For vegetarians',
        'Grill',
        'Spicy',
        'Calzone'
    ];

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((categotyName, index) => (
                        <li key={index}
                            onClick={() => onClickCategory(index)} 
                            className={categoryId === index ? 'active' : ''}>{categotyName}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Categories;