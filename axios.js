var url = 'https://api.adviceslip.com/advice';

var globalAdvice;

function setAdvice(advice) {
  globalAdvice = advice;
}

// function getAdvice() {
//   axios
//     .get('https://api.adviceslip.com/advice')
//     .then(function (response) {
//       var data = response.data.slip.advice;
//       setAdvice(data);
//     })
//     .catch(function (error) {});
// }

const getAdvice = async () => {
  try {
    const {data} = await axios.get(url);
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    return data;
  } catch (error) {}
};

function createAdvice(data) {
  var x = document.getElementsByTagName('BODY')[0];

  var div = document.createElement('div');
  div.setAttribute('class', 'container');

  var card = document.createElement('div');
  card.setAttribute('class', 'card');

  var advice = document.createElement('h3');
  advice.setAttribute('class', 'advice');
  advice.setAttribute('id', 'demo');
  advice.innerHTML = data;

  var button = document.createElement('button');
  button.setAttribute('class', 'advicebutton');
  button.onclick = function () {
    getAdvice();
    changeAdvice();
  };
  button.innerHTML = 'Give Me Advice!';

  card.append(advice);
  card.append(button);
  div.append(card);
  x.append(div);
}

function changeAdvice() {
  console.log('here');
  console.log(globalAdvice);
  var advice = document.getElementById('demo');
  advice.innerHTML = globalAdvice;
}

getAdvice();

createAdvice(globalAdvice);

// setTimeout(function () {
//   createAdvice(globalAdvice);
// }, 3000);
