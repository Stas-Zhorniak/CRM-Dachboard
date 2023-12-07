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