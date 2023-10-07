import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>TIL by Fumiya Kito</span>,
  project: {
    link: 'https://github.com/Fumiya-Kito',
  },
  docsRepositoryBase: 'https://github.com/Fumiya-Kito/nextra-blog/tree/main',
  sidebar: {
    defaultMenuCollapseLevel: 1
  }  
  // footer: {
  //   text: 'Nextra Docs Template',
  // },
}

export default config
