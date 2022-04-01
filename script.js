const btn = document.querySelector('.btn');
const content = document.querySelector('.content');

async function fetchJoke() {
  content.innerHTML = 'Loading...';
  hideAnimation();
  const data = await fetch('http://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  const res = await data.json();
  showAnimation();
  return res.joke;
}

btn.addEventListener('click', async function () {
  content.innerHTML = await fetchJoke();
});

function hideAnimation() {
  content.style.opacity = '0';
  content.style.transition = '0.5s';
}
function showAnimation() {
  content.style.opacity = '1';
  content.style.transition = '0.7s';
}
