function Greeting(props) {
    return <h1>Halo, {props.name}!</h1>;
}

ReactDOM.render(<Greeting name="Syahban" />, document.getElementById('root'));
