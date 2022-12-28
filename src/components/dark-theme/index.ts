import { getDOM } from '../../helpers/dom-helper'
import darkThemeIcon from './dark-theme.svg'
import './dark-theme.css'



const navIcon = getDOM({
  element: 'div',
  class: 'nav__icon',
})

navIcon.innerHTML = darkThemeIcon;

navIcon.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode')
})

const darkTheme = getDOM({
  element: 'nav',
  class: 'ui-toolkit',
  children: navIcon
})


export default darkTheme