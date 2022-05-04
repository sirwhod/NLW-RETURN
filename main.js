// Função responsável por mudar as cores do Nav
function onScroll() {
  navigation.classList.add('scroll')

  if (scrollY == 0) {
    navigation.classList.remove('scroll')
  }
}

// Função responsável por abrir o Menu
function openMenu() {
  document.body.classList.add('menu-expanded')
}

// Função responsável por fechar o Menu
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
