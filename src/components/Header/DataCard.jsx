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
          <Card title='confirmed' bordered={false}>
            {data.confirmed.value}
          </Card>
        </Col>
        <Col span={8}>
          <Card title='recovered' bordered={false}>
            {data.recovered.value}
          </Card>
        </Col>
        <Col span={8}>
          <Card title='deaths' bordered={false}>
            {data.deaths.value}
          </Card>
        </Col>
      </Row>
    </div>
  )
}
