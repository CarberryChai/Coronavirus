import React, { useState, useEffect } from 'react'
import request from '../../util/request'
import { Card, Col, Row } from 'antd'
import './card.less'
export default function Header({ url }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    request(url)
      .then(res => {
        setData(res)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])
  return (
    <>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card
              title="Confirmed"
              bordered
              loading={loading}
              style={{ color: '#ffc53d' }}
            >
              {data?.confirmed?.value}
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Recovered"
              bordered
              loading={loading}
              style={{ color: '#7cb305' }}
            >
              {data?.recovered?.value}
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Deaths"
              bordered
              loading={loading}
              style={{ color: '#cf1322' }}
            >
              {data?.deaths?.value}
            </Card>
          </Col>
        </Row>
      </div>
      {url.includes('countries') ? (
        <p>最新更新时间：{new Date(data?.lastUpdate).toLocaleString()}</p>
      ) : null}
    </>
  )
}
