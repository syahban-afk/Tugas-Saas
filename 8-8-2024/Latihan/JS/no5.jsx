function FruitList(props) {
    const fruits = props.fruits;
    const listItems = fruits.map((fruit) =>
        <li key={fruit}>
            {fruit}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    );
}

const fruits = ["Jeruk", "Apel", "Mangga"];

ReactDOM.render(<FruitList fruits={fruits} />, document.getElementById('root'));
