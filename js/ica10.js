const btn = document.querySelector('button');
btn.addEventListener('click', () => displayMessage('You have to piss. You have to piss so bad.', 'warning'));


function displayMessage(msgText, msgType) {
    const body = document.body;

    const panel = document.createElement('div');
    panel.setAttribute('class','msgBox');
    body.appendChild(panel);

    const msg = document.createElement('p');
    msg.textContent = msgText;
    panel.appendChild(msg);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);

    closeBtn.addEventListener('click', () => panel.parentNode.removeChild(panel));

    if (msgType === 'warning') {
        msg.style.backgroundImage = 'url(/img/warning.png)';
        panel.style.backgroundColor = 'red';
      } else if (msgType === 'chat') {
        msg.style.backgroundImage = 'url(/img/chat.png)';
        panel.style.backgroundColor = 'aqua';
      } else {
        msg.style.paddingLeft = '20px';
      }
      
}
