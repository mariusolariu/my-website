import React from 'react'
import { Card, Row, Col, Divider } from 'antd'
import MyCard from "./MyCard";

const Education = ({ education }) => (
  <>
    <h3 className="text-center mt-10 mb-5">Education</h3>
    <Card className="education">
      {education.map((institution, i) => (
        <Row
          type="flex"
          justify="space-around"
          key={institution.place}
          className="text-lg"
        >
          <Divider orientation="left" className={i === 0 && 'mt-0'}>
          </Divider>
          <Col span={10}>
            <MyCard {...institution} />
          </Col>
          <Col span={13}>
            <h3>{institution.degree}</h3>
            <h3>{institution.programme_type}</h3>
          </Col>
        </Row>
      ))}
    </Card>
  </>
)

export default Education
