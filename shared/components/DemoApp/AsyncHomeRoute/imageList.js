import React from 'react';
import PropTypes from 'prop-types';

import Card from 'antd/lib/card';

const ImageList = (props) => (
  <div style={{maxWidth: '1200px', margin: '40px auto'}}>
    {props.image_data.map(image => (
      <Card style={{textAlign: 'center', fontSize: '18px', width: '33.33%', display: 'inline-block'}} key={image.image_id}>
        <img src={`http://127.0.0.1:8000/static/${props.result_id}/${props.zip_id}/${image.image_id}`} alt="" />
        <br /> <br />
        <p><b>
          {image.score[0].toFixed(2)} | {" "}
          {image.score[1].toFixed(2)} | {" "}
          {image.score[2].toFixed(2)} | {" "}
          {image.score[0].toFixed(2)}
        </b></p>
      </Card>
    ))}
  </div>
)


export default ImageList;

ImageList.propTypes = {
  image_data: PropTypes.array.isRequired, // eslint-disable-line
  zip_id: PropTypes.string.isRequired,
  result_id: PropTypes.string.isRequired
}
