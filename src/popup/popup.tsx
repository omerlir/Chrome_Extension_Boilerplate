import React from 'react'
import { createRoot } from 'react-dom/client'
import './popup.css'

const test = <img src="icon.png" />

const root = document.createElement('div')
document.body.appendChild(root)
createRoot(root).render(test)

// shachar was here
