// Copyright @ 2018-2021 xiejiahe. All rights reserved. MIT license.
// See https://github.com/xjh22222228/nav

export type ThemeType =
  | 'Light'
  | 'Sim'
  | 'Side'
  | 'App'

export interface ITagProp {
  [tagName: string]: {
    color: string
    createdAt: string
    desc?: string
  }
}

export interface INavFourProp {
  icon?: string | null
  createdAt?: string
  rate?: number
  top?: boolean
  name: string
  desc: string
  url: string
  urls?: {
    [tagName: string]: string
  }
}

export interface INavThreeProp {
  title?: string
  icon?: string | null
  createdAt?: string
  collapsed?: boolean
  nav: INavFourProp[]
}

export interface INavTwoProp {
  title?: string
  icon?: string | null
  createdAt?: string
  collapsed?: boolean
  nav: INavThreeProp[]
}

export interface INavProps extends Object {
  title: string
  id?: number
  icon?: string | null
  createdAt?: string
  nav: INavTwoProp[]
}

export interface ISearchEngineProps {
  name: string
  url?: string
  icon: string | null
  placeholder?: string
  blocked: boolean
}

export interface IConfig {
  gitRepoUrl: string
  branch: string
  hashMode: boolean
  homeUrl?: string
  title: string
  description: string
  keywords: string
  theme: ThemeType
  footerContent?: string|null
  baiduStatisticsUrl?: string
  cnzzStatisticsUrl?: string
  showGithub: boolean

  lightThemeConfig: {
    backgroundLinear: string[]
  },

  simThemeConfig: {
    posterImageUrls: string[]
    description: string
  }
}
