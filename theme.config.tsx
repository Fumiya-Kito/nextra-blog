import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>TIL by Kito</span>,
  project: {
    link: 'https://github.com/Fumiya-Kito',
  },
  docsRepositoryBase: 'https://github.com/Fumiya-Kito/nextra-blog/tree/main',
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  head: (
    <>
      <link rel="icon" href="/favicon.png" />
    </>
  )
  // footer: {
  //   text: 'Nextra Docs Template',
  // },
}

export default config
