import { Error403 } from '@/components/error-page/error-403'
import React from 'react'

export interface AccessProps {
  children: React.ReactNode | React.ReactElement
  // 是否具备权限
  hasAccess: boolean
}

export const Access: React.FC<AccessProps> = ({ children, hasAccess }) => {
  return <>{hasAccess ? children : <Error403 />}</>
}
