import React from 'react'
import VisiLink from '../container/VisiLink'
import './footer.css'
const Footer = () => (
  <p className='footer'>
    Show:
    {' '}
    <VisiLink filter="SHOW_ALL">
      All
    </VisiLink>
    {', '}
    <VisiLink filter="SHOW_ACTIVE">
      Active
    </VisiLink>
    {', '}
    <VisiLink filter="SHOW_COMPLETED">
      Completed
    </VisiLink>
  </p>
)
export default Footer;