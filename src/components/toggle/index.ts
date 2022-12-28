import { getDOM } from '../../helpers/dom-helper'
import './toggle.css'

type ToggleProps = {
  onToggleHandle?: Function
  toggleLabels: [string, string]
}

export const getToggle = ({ onToggleHandle, toggleLabels }: ToggleProps): HTMLElement => {
  const toggleCheckbox = getDOM({
      element: 'input',
      type: 'checkbox',
      checked: 'true',
      class: 'toggle__input',
      id: 'toggle__input',
  }) as HTMLInputElement

  const toggleText = getDOM({
      class: 'toggle__label',
      element: 'label',
      for: 'toggle__input',
  })
  const [defaultLabel, alternativeLabel] = toggleLabels

  toggleText.innerHTML = defaultLabel
  toggleCheckbox.addEventListener('change', () => {
    toggleText.innerHTML = toggleCheckbox.checked 
        ? defaultLabel
        : alternativeLabel
    
    if(onToggleHandle) onToggleHandle()
  })

  const toggle = getDOM({
      class: 'toggle',
      children: [toggleCheckbox, toggleText],
  })

  return toggle
}