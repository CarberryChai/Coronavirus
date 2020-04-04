import React, { useState, useEffect, useMemo } from 'react'
import './App.css'
import DataCard from './components/Header/DataCard'
import request from './util/request'
import { Select, Row, Col, Empty } from 'antd'
const { Option } = Select
function App() {
  const [countryList, setCountryList] = useState([])
  const [singleCountry, setSingleCountry] = useState('US')
  useEffect(() => {
    request('https://covid19.mathdro.id/api/countries').then((res) => {
      setCountryList(res.countries)
    })
  }, [])
  const handleChange = (value) => {
    setSingleCountry(value)
  }
  const short = useMemo(() => {
    const temp = countryList.find((item) => item.name === singleCountry)
    return temp && temp.iso3 ? temp.iso3 : ''
  }, [singleCountry, countryList])
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
            {countryList.map((country, index) => (
              <Option value={country.name} key={index}>
                {country.name}
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={12}>{singleCountry}</Col>
      </Row>
      {short ? (
        <DataCard
          url={`https://covid19.mathdro.id/api/countries/${short}`}
        ></DataCard>
      ) : (
        <Empty />
      )}
    </div>
  )
}

export default App
