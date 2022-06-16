function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))

}


function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(d => displayUserData(d))
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(dolar => dolar.json())
        .then(d => console.log(d))
}

function displayUserData(d) {
    const ul = document.getElementById('users');
    for (const user of d) {
        const li = document.createElement('li');
        li.innerText = `name : ${user.name}  email: ${user.email}`;
        ul.appendChild(li);
    }
}