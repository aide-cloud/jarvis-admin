import React, { useState, useEffect } from 'react'
import { Line } from '@ant-design/plots'
import LineChart from '@ant-design/plots/es/components/line'

const UserOpLine: React.FC = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    asyncFetch()
  }, [])

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json'
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error)
      })
  }

  return (
    <LineChart
      renderer='canvas'
      autoFit
      smooth
      data={data}
      padding='auto'
      xField='Date'
      yField='scales'
      xAxis={{
        tickCount: 5,
      }}
    />
  )
}

export default UserOpLine
