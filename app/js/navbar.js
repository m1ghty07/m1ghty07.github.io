function burgerMenu() {
    let burger = document.querySelector('.burger')
    let menu = document.querySelector('.menu__list')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
      }
    })
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
          menu.classList.remove('active')
          burger.classList.remove('active-burger')
      }
    })
}
burgerMenu()


function fixedNav() {
  const nav = document.querySelector('nav')
  const breakpoint = 100 
  if ( window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
// window.addEventListener('scroll', fixedNav)
