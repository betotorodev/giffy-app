/* import React from 'react'
import './styles.css'

export default function Spinner () {
  return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
} */

import React from "react"
import ContentLoader from "react-content-loader"

const Spinner = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-19" y="-31" rx="2" ry="2" width="202" height="200" /> 
    <rect x="-7" y="179" rx="0" ry="0" width="191" height="227" /> 
    <rect x="106" y="289" rx="0" ry="0" width="4" height="6" /> 
    <rect x="198" y="-6" rx="0" ry="0" width="191" height="227" /> 
    <rect x="197" y="232" rx="2" ry="2" width="192" height="200" /> 
    <rect x="-9" y="420" rx="2" ry="2" width="192" height="200" />
  </ContentLoader>
)

export default Spinner