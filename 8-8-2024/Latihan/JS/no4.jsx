const { useState } = React;

function WeatherMessage() {
    const [isSunny, setIsSunny] = useState(true);

    const toggleWeather = () => {
        setIsSunny(!isSunny);
    }

    return (
        <div>
            <div>
                {isSunny ? (
                    <h1>Hari ini cerah!</h1>
                ) : (
                    <h1>Hari ini hujan.</h1>
                )}
            </div>
            <button onClick={toggleWeather}>
                {isSunny ? 'Ubah ke Hujan' : 'Ubah ke Cerah'}
            </button>
        </div>
    );
}

ReactDOM.render(<WeatherMessage />, document.getElementById('root'));
