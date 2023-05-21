
const getRecords = async () => {
    let result = await fetch('https://jsonplaceholder.typicode.com/photos').catch((err) => console.log(err)).then((data) => data.json());
    return result
}

export { getRecords }