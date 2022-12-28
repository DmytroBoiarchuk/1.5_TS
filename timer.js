const start = document.getElementById('start');
const plus = document.getElementById('plus');
const minus = document.getElementById('mines');
const time = document.getElementById('time');
plus.addEventListener('click', () => {
  const current = +time.innerHTML;
  if (!(current > 59)) {
    time.innerHTML = String(current + 1);
  }
});
minus.addEventListener('click', () => {
  const current = +time.innerHTML;
  if (!(current <= 1)) {
    time.innerHTML = String(current - 1);
  }
});

function hideOrShowButtons() {
  if (start.style.display !== 'none') {
    start.style.display = 'none';
    plus.style.display = 'none';
    minus.style.display = 'none';
    document.getElementById('text').innerHTML = 'Осталось';
  } else {
    start.style.display = 'block';
    plus.style.display = 'block';
    minus.style.display = 'block';
    document.getElementById('text').innerHTML = 'Укажите время в минутах';
  }
}

document.getElementById('start').addEventListener('click', () => {
  hideOrShowButtons();
  const format = 'mm:ss';
  const cash = document.getElementById('time').innerHTML;
  let dur = moment.duration(time.innerHTML * 60 * 1000 - 1000);
  const interval = setInterval(() => {
    time.innerHTML = moment(moment.duration(dur).asMilliseconds()).format(format);
    dur -= 1000;
    if (time.innerHTML === '00:00') {
      clearInterval(interval);

      hideOrShowButtons();
      time.innerHTML = cash;
    }
  }, 1000);
});
