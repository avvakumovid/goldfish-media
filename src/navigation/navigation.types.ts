import { ComponentType } from 'react'

export type TypeRootStackParamList = {
  LogIn: undefined,
  SingUp: undefined
}

export interface IRoute {
  name: keyof TypeRootStackParamList
  component: ComponentType
}