function getTodo(id) {

    let what = fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(what)

    let promise = what.then(response => response.json )
    console.log(promise)

    let payload = promise.then(payload => console.log(payload))
    console.log(payload)
}

export default getTodo