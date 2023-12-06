const fetchData = async () => {

  const loadEl = document.querySelector(".loading"); // loading divini aldık
  loadEl.style.display = 'block' // CSS'te display: none var bizde burada gözükmezi için block yaptık


  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  ); // apidan response aldık

  const data = await res.json();
  console.log(data); //.json ile aldığımız response'ı çevirdik 

  fillData(data); // aldığımız datayı fillData fonksiyonu'na yollayıp doldurduk.

  loadEl.style.display = 'none';
};

fetchData(); 

const List = document.querySelector("ul");

const fillData = async (data) => {

  //Aşağıda filldata fonksiyonuna gelen datadaki her telaman için bir li itemı yarattık ve içeriğini doldurduk.
  data.forEach((t) => {
    const liItem = document.createElement("li");
    liItem.innerText = `Title: ${t.title}, Checked: ${t.completed}`;
    List.appendChild(liItem);
  });

};

const handleSubmit = (e) => { // Submit için fonksiyon
    e.preventDefault(); 

  //Api'dan çektiğimiz itemlardan ayrı yeni item eklemek için bir li item oluşturduk ve bunu formdaki inputlarla doldurduk ve listeye ekledik.
  const liItem = document.createElement("li");
  const titleInput = document.querySelector(".titleInput");
  const titleValue = titleInput.value;
  const checkInput = document.querySelector(".checkInput");
  const checkValue = checkInput.checked;
  liItem.innerText = `Title: ${titleValue}, Checked: ${checkValue}`;
  List.appendChild(liItem);
};

const form = document.querySelector(".form-container");

form.addEventListener("submit", handleSubmit); // Form'a fonksiyonu ekledik
