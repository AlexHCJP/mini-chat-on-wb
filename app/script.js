const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('ul')
const status = document.getElementById('status')
const ws = new WebSocket('ws://localhost:3000');

form.addEventListener('submit',ev => {
    ev.preventDefault();

    ws.send(input.value);
    input.value = '';
})
const changeStatus = (data) => {
    status.textContent = data
}
const addMessage = (res) => {
    const li = document.createElement('li')
    li.textContent = res.data
    list.appendChild(li);
}
ws.onopen = () => changeStatus('Connection')
ws.onclose = () => changeStatus('Disconnection')
ws.onmessage  =  res => addMessage(res)