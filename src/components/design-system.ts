import '../app/global'
import { getDOM } from '../helpers/dom-helper'
import * as Stories from './stories'
import './design-system.css'
import darkTheme from '../components/dark-theme'

const [firstStory] = Object.values(Stories)
const main = getDOM({
  element: 'main',
  class: 'canvas',
  children: firstStory
})

const getListItem = (componentName:string, isChecked:boolean):HTMLElement => {
  const radioInput = getDOM({
    element: 'input',
    class: 'sidebar__input',
    type: 'radio',
    name: 'design-component',
    id: componentName,
    ...(isChecked && {checked: 'true'})
  })

  radioInput.addEventListener('change', (event) => {
    const [mainStory] = main.childNodes
    const storyName = event.target as HTMLInputElement
    main.replaceChild((Stories as any)[storyName.id], mainStory)
  })

  const radioLabel = getDOM({
    element: 'label',
    class: 'sidebar__label',
    for: componentName,
    children: document.createTextNode(componentName)
  })

  const listItem = getDOM({
    element: 'li',
    class: 'sidebar__list-item',
    children: [radioInput, radioLabel]
  })
  return listItem
}

const asideList = getDOM({
  element: 'ul',
  class: 'sidebar__list',
})

const aside = getDOM({
  element: 'aside',
  class: 'sidebar',
  children: asideList
})

const menu = getDOM({
  element: 'header',
  class: 'menu',
  children: darkTheme
})

const wrapper = getDOM({
  class: 'wrapper',
  children: [menu, aside, main]
})

const root = document.getElementById('root')!

root.append(wrapper)

type Component = {
  name: string
  isChecked: boolean
}

const addComponentToSidebar = ({name, isChecked}: Component): void => {
  asideList.appendChild(getListItem(name, isChecked))
}

console.log({Stories})

Object.keys(Stories).forEach((storyName, index) =>{  
  
  addComponentToSidebar({
    name: storyName,
    isChecked: !index
  })
})