const freelancers = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
  { name: "Carol", price: 70, occupation: "programmer" },
];

const jobs = [
  "tutor",
  "artist",
  "writer",
  "mechanic",
  "carpenter",
  "escort",
  "landscaper",
];
const nickNames = ["Andy", "Derick", "Richard", "April", "May", "Frank", "Nan"];

const freelancerList = document.getElementById("freelancers");
const heading = document.querySelector("h1");
const p = document.querySelector("p");

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateRandomFreelancer() {
  const randomJobIndex = getRandomIndex(jobs);
  const randomNameIndex = getRandomIndex(nickNames);
  const randomPrice = Math.floor(Math.random() * 100);
  const freelancer = {
    name: nickNames[randomNameIndex],
    price: randomPrice,
    occupation: jobs[randomJobIndex],
  };
  return freelancer;
}

function calculateAvg() {
  const prices = 0;
  const total = freelancers.reduce(
    (acc, currentValue) => acc + currentValue.price,
    prices
  );
  return total / freelancers.length;
}

const intervalId = setInterval(() => {
  freelancers.push(generateRandomFreelancer());
  render();
}, 5000);

function render() {
  //   const freelancerList = document.getElementById("freelancers");
  const freelancerEls = freelancers.map((el) => {
    el.name;
    const listItem = document.createElement("li");
    const avg = calculateAvg();
    p.textContent = `The average starting price is $${avg}`;
    listItem.setAttribute("name", el.name);
    listItem.setAttribute("price", el.price);
    listItem.setAttribute("occupation", el.occupation);
    listItem.textContent = `Name: ${el.name} Price: $${el.price} Occupation: ${el.occupation}`;
    return listItem;
  });
  freelancerList.replaceChildren(...freelancerEls);
  setInterval();
}

render();
//generate
//render
// calc and update within render
// `The avgerage starting pice is ${avg}`;
