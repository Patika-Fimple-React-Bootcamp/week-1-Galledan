const fetchData = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );

  const data = await res.json();
  console.log(data);

  fillData(data);
};

fetchData();

const List = document.querySelector("ul");

const fillData = async (data) => {
  data.forEach((t) => {
    const liItem = document.createElement("li");
    liItem.innerText = `Title: ${t.title}, Checked: ${t.completed}`;
    List.appendChild(liItem);
  });
};

const handleSubmit = (e) => {
    e.preventDefault();

  const liItem = document.createElement("li");
  const titleInput = document.querySelector(".titleInput");
  const titleValue = titleInput.value;
  const checkInput = document.querySelector(".checkInput");
  const checkValue = checkInput.checked;
  liItem.innerText = `Title: ${titleValue}, Checked: ${checkValue}`;
  List.appendChild(liItem);
};

const form = document.querySelector(".form-container");

form.addEventListener("submit", handleSubmit);
