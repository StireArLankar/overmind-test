import { Derive } from 'overmind'

export type IState = {
  count: number
  test: null | string
  testget: Derive<IState, boolean>
}

export const state: IState = {
  count: 0,
  test: null,
  testget: ({ test }) => Boolean(test) && true
}
