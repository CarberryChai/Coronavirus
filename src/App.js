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
      console.log(res)
      setCountryList(res)
    })
  }, [])
  const handleChange = value => {
    console.log(value)
    setSingleCountry(value)
  }
  return (
    <div className='App'>
      <h1>Global Coronavirus disease Data</h1>
      <DataCard url='https://covid19.mathdro.id/api'></DataCard>
      <h2>Single Country Data</h2>
      <Row style={{ paddingBottom: 20 }}>
        <Col span={12}>
          <Select
            defaultValue={singleCountry}
            style={{ width: 120 }}
            onChange={handleChange}
          >
            {country &&
              Object.entries(country.countries).map(([country, code]) => (
                <Option value={country} key={code}>
                  {country}
                </Option>
              ))}
          </Select>
        </Col>
        <Col span={12}>{singleCountry}</Col>
      </Row>
      <DataCard
        url={`https://covid19.mathdro.id/api/countries/${
          singleCountry.split(' ').length > 1
            ? country.iso3[country.countries[singleCountry]]
            : singleCountry
        }`}
      ></DataCard>
    </div>
  )
}

export default App
