import {getToggle} from './index'


const Toggle = getToggle({
  onToggleHandle: () => alert('clicked'),
  toggleLabels: ['on', 'off']
})

export default Toggle