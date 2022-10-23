'strict mode';

// const p1E = Number(document.querySelector('.point-one-easting').value);
// const p1N = Number(document.querySelector('.point-one-northing').value);
// const p2E = Number(document.querySelector('.point-two-easting').value);
// const p2N = Number(document.querySelector('.point-two-northing').value);
// console.log(p2N, typeof p2N);
// const result = document.querySelector('.result');
const clear = document.querySelector('.clear');
const calculate = document.querySelector('.calculate');

calculate.addEventListener('click', function (e) {
  e.preventDefault();
  const p1E = Number(document.querySelector('.point-one-easting').value);
  const p1N = Number(document.querySelector('.point-one-northing').value);
  const p2E = Number(document.querySelector('.point-two-easting').value);
  const p2N = Number(document.querySelector('.point-two-northing').value);
  const result = document.querySelector('.result');

  const calculateDistance = function (X1, Y1, X2, Y2) {
    const distance = Math.sqrt(
      Math.pow(X2 - X1, 2) + Math.pow(Y2 - Y1, 2)
    ).toFixed(4);

    let bearing = Math.atan((X2 - X1) / (Y2 - Y1)) * (180 / Math.PI);

    const degree = Math.floor(bearing);
    const decimalMinute = (bearing - degree) * 60;
    const minute = Math.floor(decimalMinute);
    const seconds = ((decimalMinute - minute) * 60).toFixed(4);

    bearing = `${degree}° ${minute}' ${seconds}"`;
    if (p1E === 0 || p1N === 0 || p2E === 0 || p2N === 0) {
      result.textContent = '';
      alert('You must input all values');
    } else {
      result.textContent = `Distance: ${distance}m Bearing: ${bearing}`;
    }
  };
  calculateDistance(p1E, p1N, p2E, p2N);
  // calculateDistance(531970.793, 2790620.373, 532013.829, 2790645.827);
});

clear.addEventListener('click', function (e) {
  e.preventDefault();

  const p1E = (document.querySelector('.point-one-easting').value = '');
  const p1N = (document.querySelector('.point-one-northing').value = '');
  const p2E = (document.querySelector('.point-two-easting').value = '');
  const p2N = (document.querySelector('.point-two-northing').value = '');
  console.log(p2N, typeof p2N);
  const result = (document.querySelector('.result').textContent = '');
});
