/* play-on-scroll */
let playonscrolls = document.querySelectorAll('.play-on-scroll')
const playonscrollcb = function(entries, observer) {
  entries.forEach(entry => {
      if(entry.isIntersecting)
        entry.target.classList.add("start");
      else
        entry.target.classList.remove("start");
  });
}
const io = new IntersectionObserver(playonscrollcb);　
playonscrolls.forEach(item => {
  io.observe(item);
})

/* back to top */
let backToTopBtn = document.querySelector('.back-to-top')
window.onscroll = () => {
  /* back-to-topボタンの表示/非表示切替え */
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
    backToTopBtn.style.display = 'flex'
  else
    backToTopBtn.style.display = 'none'
}

/* top menu */
let menuItems = document.getElementsByClassName('menu-item')
Array.from(menuItems).forEach((item, index) => {
  item.onclick = (e) => {
    let currMenu = document.querySelector('.menu-item.active')
    currMenu.classList.remove('active')
    item.classList.add('active')
  }
})

/* mobile menu */
let bottomNavItems = document.querySelectorAll('.mb-nav-item')
let bottomMove = document.querySelector('.mb-move-item')
bottomNavItems.forEach((item, index) => {
  item.onclick = (e) => {
    let olditem = document.querySelector('.mb-nav-item.active')
    olditem.classList.remove('active')
    item.classList.add('active')
    bottomMove.style.left = index * 25 + '%'
  }
})
