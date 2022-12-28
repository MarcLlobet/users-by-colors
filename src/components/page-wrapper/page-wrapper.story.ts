import { getDOM } from '../../helpers/dom-helper'
import {getPageWrapper} from './index'

const div = getDOM({
  style: 'background: white; height: 200px;',
  children: document.createTextNode('Inside wrapper')
})

const PageWrapper = getPageWrapper({
  children:div
})

export default PageWrapper