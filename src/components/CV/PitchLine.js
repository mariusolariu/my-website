import React, { Fragment } from 'react'
import { Card } from 'antd'

const PitchLine = ({ pitchLine }) => {
  return (
    <>
      <h3 className="text-center mt-10 mb-5" >Summary</h3>
      <Card className="experiments">
        <p style={{ fontSize: "1.3rem" }}>{pitchLine}</p>
      </Card>
    </>
  )
}

export default PitchLine
