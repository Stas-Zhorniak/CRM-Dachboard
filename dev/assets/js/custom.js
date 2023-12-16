const installTabs =()=> {
  const tabBtn = document.querySelectorAll('.tab-btn');
  const tabContent = document.querySelectorAll('.tab-content')
  const tabs = document.querySelectorAll('.tabs');

  const addAttr = (selector, attrName, attrValue) => selector.forEach((item, index) => {
      item.setAttribute(attrName, attrValue + index);
  })

  addAttr(tabBtn, "id", "tab-");
  addAttr(tabContent, "data-content", "tab-");



const changeTab = (event) => {
  const thisBtn = event.target;
  const thisTab = event.target.closest('.tabs');
  const thisTabBtns = thisTab.querySelectorAll('.tab-btn');
  const thisTabContents = thisTab.querySelectorAll('.tab-content');

  const removeClass = (selector, className) => selector.forEach(item => item.classList.remove(className));
  const addClass = (selector, className) => selector.classList.add(className);

  removeClass(thisTabBtns, 'active')
  removeClass(thisTabContents, 'show')

  
  const getBtnId = thisBtn.getAttribute('id') 
  const activeContent = document.querySelector('[data-content=' + getBtnId + ']');
  

  addClass(thisBtn, 'active')
  addClass(activeContent, 'show')
}

tabBtn.forEach(btn => {
  btn.addEventListener('click', changeTab)
})
}
document.querySelectorAll(".tabs") ? installTabs() : null;


let newData = [
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "+380974873931",
    email: "asdasdasd@ukr.net",
    country: "United States",
    status: "active"
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "1234435234",
    email: "mail@example.com",
    country: "United States",
    status: "active"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "1234435234",
    email: "mail@example.com",
    country: "United States",
    status: "active"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phone: "1234435234",
    email: "mail@example.com",
    country: "United States",
    status: "active"
  },
  {
    name: " Jerome Bell",
    company: "Google",
    phone: "1234435234",
    email: "mail@example.com",
    country: "United States",
    status: "inactive"
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phone: "1234435234",
    email: "mail@example.com",
    country: "United States",
    status: "active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phone: "1234435234",
    email: "mail@example.com",
    country: "United States",
    status: "inactive"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phone: "1234435234",
    email: "mail@example.com",
    country: "United States",
    status: "active"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phone: "1234435234",
    email: "mail@example.com",
    country: "United States",
    status: "active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phone: "1234435234",
    email: "mail@example.com",
    country: "United States",
    status: "inactive"
  }
  
];

const itemsPerPage = 8;
let currentPage = 1;

const displayData = (page) => {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const displayedData = newData.slice(start, end);

  const rowsInfo = document.querySelector('.customers-info .rows-info');
  rowsInfo.innerHTML = "";

  displayedData.forEach((user) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${user.name}</td>
        <td>${user.company}</td>
        <td>${user.phone}</td>
        <td>${user.email}</td>
        <td>${user.country}</td>
        <td><span>${user.status}</span></td>
    `;
    rowsInfo.appendChild(newRow);
  });
    statusHighlight();
    // updatePaginationButtons();
};

const statusHighlight = () => {
  const userStatus = document.querySelectorAll('.customers-info .rows-info td span');
  userStatus.forEach(item => {
    const statusActive = "active";
    const statusInactive = "inactive";
    item.innerHTML === statusActive ? item.classList.add("status-active") : item.classList.add("status-inactive");
  });
};

// const createPaginationButtons = () => {
//   const totalItems = newData.length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   const paginationsContainer = document.querySelector('.customers-info .pagitation-container');

//   for (let i = 1; i <= totalPages; i++) {
//     const button = document.createElement("button");
//     button.innerText = i;
//     button.addEventListener("click", function () {
//       currentPage = parseInt(this.innerText);
//       displayData(currentPage);
//     });

//     paginationsContainer.appendChild(button);
//     updatePaginationButtons();
//   }
// };

// const updatePaginationButtons = () => {
//   const paginationsContainer = document.querySelector('.customers-info .pagitation-container');
//   paginationsContainer.innerHTML = "";

//   const addButton = (text, clickHandler) => {
//     const button = document.createElement("button");
//     button.innerText = text;
//     button.addEventListener("click", clickHandler);
//     paginationsContainer.appendChild(button);
//   };

//   // Кнопка "Назад"
//   addButton("«", function () {
//     if (currentPage > 1) {
//       currentPage--;
//       displayData(currentPage);
//       updatePaginationButtons();
//     }
//   });

//   // Кнопки страниц
//   for (let i = 1; i <= totalPages; i++) {
//     addButton(i, function () {
//       currentPage = i;
//       displayData(currentPage);
//       updatePaginationButtons();
//     });
//   }

//   // Кнопка "Вперед"
//   addButton("»", function () {
//     if (currentPage < totalPages) {
//       currentPage++;
//       displayData(currentPage);
//       updatePaginationButtons();
//     }
//   });

// };

displayData(currentPage);
// createPaginationButtons();



