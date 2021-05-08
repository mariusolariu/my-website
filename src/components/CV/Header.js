import React from 'react'
import { Row, Col } from 'antd'

const Header = ({ header }) => (
  <Row type="flex" justify="space-around" align="middle">
    <Col span={23} className="text-lg">
      <h2 className="text-3xl">{header.name}</h2>
      <span className="text-2xl">{header.position}</span>
      <div className="text-2xl">{header.location}</div>
      <>
        {header.contacts.map(contact => (
          <div key={contact.type} className="text-2xl">
            {contact.type}{' '}
            <a href={contact.link} target="_blank" rel="noopener noreferrer">
              {contact.linkName}
            </a>
          </div>
        ))}
      </>
    </Col>
    <Col span={1} className="hide-mobile">
      <a href="https://github.com/mariusolariu/My-CV/blob/master/Marius_Olariu_CV.pdf?raw=true" target="_blank" className="no-print">
        <img src="/logos/pdf.svg" height="50" alt="pdf icon" />
      </a>
    </Col>
  </Row>
)

export default Header
