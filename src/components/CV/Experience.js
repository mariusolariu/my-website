import React from 'react'
import { Card, Row, Col, Divider, Tag } from 'antd'
import MyCard from './MyCard';

const Experience = ({ experience }) => (
  <>
    <h3 className="text-center mt-10 mb-5">Work experience</h3>
    <Card className="work-experience">
      {experience.map((item, i) => (
        <Row type="flex" justify="space-around" key={item.company.name}>
          <Divider></Divider>
          <Col span={6}>
            <MyCard {...item.company} />
          </Col>

          <Col xs={14} sm={14} md={14} lg={14} xl={14}>
            {item.projects.map((project, i) => (
              <Row type="flex" justify="space-around" key={project.name} className="mb-5">
                {project.logo && (
                  <Col span={5}>
                    <img
                      src={`/companies/${project.logo}`}
                      alt={project.name}
                      className="max-w-3/4 inline"
                    />
                  </Col>
                )}
                <Col span={project.logo ? 19 : 24} className="text-lg">
                  <h3>{project.role}</h3>
                  <p>{project.description}</p>
                  <div className="py-1">
                    {project.stack.me &&
                      project.stack.me.map(tech => (
                        <Tag color="#0B9B00" key={tech} className="mb-1 text-base">
                          {tech}
                        </Tag>
                      ))}
                    {project.stack.all &&
                      project.stack.all.map(tech => (
                        <Tag color="#a2a2a2" key={tech} className="mb-1 text-base">
                          {tech}
                        </Tag>
                      ))}
                  </div>
                </Col>
                {item.projects.length - 1 > i && <Divider />}
              </Row>
            ))}
          </Col>
        </Row>
      ))}
    </Card>
  </>
)

export default Experience
