import React from 'react'
import { Card, Col, Divider, Row } from 'antd'
import MyCard from "./MyCard";

const Volunteer = ({ volunteer }) => (
  <>
    <h3 className="text-center mt-10 mb-5">Volunteering</h3>
    <Card>
      {volunteer.map((activity, i) => (
        <Row type="flex" justify="space-around" key={activity.place} className="text-lg">
          <Divider orientation="left" className={i === 0 && 'mt-0'}>
          </Divider>
          <Col span={10}>
            <MyCard {...activity} />
          </Col>
          <Col span={13}>
            <h3>{activity.description}</h3>
          </Col>
        </Row>
      ))}
    </Card>
  </>


)

export default Volunteer
