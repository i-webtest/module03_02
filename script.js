'use strict';

const body = document.querySelector('body');
const input = document.createElement('input');
const p = document.createElement('p');

body.style.paddingTop = `100px`;
input.style.cssText = 'display: block; padding: 10px; margin: 0px auto 30px; width: 200px';
p.style.cssText = 'text-align: center; font-size: 24px';

body.append(input, p);

const updateValue = () => {
  const timeoutID = setTimeout(getTimeout, 300);
};

const getTimeout = () => {
  p.textContent = input.value;
};

input.addEventListener('keyup', updateValue);
