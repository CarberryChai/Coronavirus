import React, { useState, useEffect } from 'react'
import request from '../../util/request'
import { Spin, Card, Col, Row } from 'antd'
import './card.less'
export default function Header({ url }) {
  const [data, setData] = useState(null)
  useEffect(() => {
    request(url).then(res => {
      setData(res)
    })
  }, [url])
  if (!data) {
    return <Spin></Spin>
  }
  return (
    <div className='site-card-wrapper'>
      <Row gutter={16}>
        <Col span={8}>
          <Card title='Confirmed' bordered={false} style={{ color: '#ffc53d' }}>
            {data.confirmed.value}
          </Card>
        </Col>
        <Col span={8}>
          <Card title='Recovered' bordered={false} style={{ color: '#7cb305' }}>
            {data.recovered.value}
          </Card>
        </Col>
        <Col span={8}>
          <Card title='Deaths' bordered={false} style={{ color: '#cf1322' }}>
            {data.deaths.value}
          </Card>
        </Col>
      </Row>
    </div>
  )
}
