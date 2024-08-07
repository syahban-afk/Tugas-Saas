// Menggunakan Promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data diterima");
        }, 1500);
    });
};

fetchData().then(response => console.log(response));

// Menggunakan Async/Await
const ambilData = async () => {
    try {
        const response = await fetchData();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};

ambilData();
