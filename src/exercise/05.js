// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle


const Box = ({children, size='', className='', styleProps}) => (
  <div 
    className={`box box--${size} ${className}`}
    style={{fontStyle:'italic', ...styleProps}}
  >
    {children}
  </div>
)


function App() {
  return (
    <div>
      <Box size="small" styleProps={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
      <Box size="medium" styleProps={{backgroundColor: 'pink'}}>small lightblue box</Box>
      <Box size="large" styleProps={{backgroundColor: 'orange'}}>small lightblue box</Box>
    </div>
  )
}

export default App
