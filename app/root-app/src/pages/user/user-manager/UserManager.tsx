import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export interface UserItemType {
  id: number
  name: string
}

const UserManager: React.FC = () => {
  const [params, _] = useSearchParams()
  const [userInfo, setUserInfo] = React.useState<UserItemType>({
    id: 0,
    name: '',
  })
  useEffect(() => {
    console.log(params.get('id'))
    console.log(params.get('name'))
    setUserInfo({
      id: parseInt(params.get('id') || '0'),
      name: params.get('name') || '',
    })
  }, [params])

  return (
    <div>
      <h1>UserManager</h1>
      <p>welcome {userInfo?.name}</p>
    </div>
  )
}

export default UserManager
