const { useState } = React;

function NameForm() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('Nama yang diinput: ' + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nama:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

ReactDOM.render(<NameForm />, document.getElementById('root'));
