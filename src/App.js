import React, { useState, useEffect } from 'react'
import './App.css'
import DataCard from './components/Header/DataCard'
import request from './util/request'
import { Select, Row, Col } from 'antd'
const { Option } = Select
function App() {
  const [country, setCountryList] = useState(null)
  const [singleCountry, setSingleCountry] = useState('China')
  useEffect(() => {
    request('https://covid19.mathdro.id/api/countries').then(res => {
      setCountryList(res)
    })
  }, [])
  const handleChange = value => {
    setSingleCountry(value)
  }
  return (
    <div className='App'>
      <h1 style={{ marginBottom: 50 }}>Global Coronavirus Disease Data</h1>
      <DataCard url='https://covid19.mathdro.id/api'></DataCard>
      <h2>Single Country Data</h2>
      <Row style={{ paddingBottom: 20 }}>
        <Col span={12}>
          <Select
            showSearch
            defaultValue={singleCountry}
            style={{ width: 240 }}
            onChange={handleChange}
            filterOption={(input, opt) =>
              opt.children.toLowerCase().startsWith(input.toLowerCase())
            }
          >
            {country &&
              Object.entries(country.countries).map(
                ([country, code], index) => (
                  <Option value={country} key={code + index}>
                    {country}
                  </Option>
                )
              )}
          </Select>
        </Col>
        <Col span={12}>{singleCountry}</Col>
      </Row>
      {country && (
        <DataCard
          url={`https://covid19.mathdro.id/api/countries/${
            country.iso3[country.countries[singleCountry]]
          }`}
        ></DataCard>
      )}
    </div>
  )
}

export default App
