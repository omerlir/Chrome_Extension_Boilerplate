import React from 'react'
import { createRoot } from 'react-dom/client'

const test = <p>Hello World!</p>

const root = document.createElement('div')
document.body.appendChild(root)
createRoot(root).render(test)
