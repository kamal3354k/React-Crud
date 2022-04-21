import React from 'react'
import ReactDom from 'react-dom'

export default function PortalExample() {
return ReactDom.createPortal(
<div>PortalExample</div>
,document.getElementById("other-root"))
}