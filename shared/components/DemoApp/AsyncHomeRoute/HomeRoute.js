import React from 'react';

import Upload from 'antd/lib/upload';
import Icon from 'antd/lib/icon';
import Card from 'antd/lib/card';

class HomeRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        predictions: null,
        graph: null
      }
    }
    this.handleResponse = this.handleResponse.bind(this)
  }

  handleResponse(eve) {
    this.setState({
      data: eve.data
    })
  }

  render() {
    return (
      <div>
        <Upload.Dragger
          name="file"
          action='/upload'
          onSuccess={(eve) => { this.handleResponse(eve); }}
          multiple
        >
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
        </Upload.Dragger>
        <br /><br />

        <Card style={{textAlign: 'center', fontSize: '18px'}}>
          {this.state.data.predictions
            ? (
              <div>
                <p>GRADE 1: <b>{this.state.data.predictions.grade_1[0]}</b></p>
                <p>GRADE 2: <b>{this.state.data.predictions.grade_2[0]}</b></p>
                <p>GRADE 3 <b>{this.state.data.predictions.grade_3[0]}</b></p>
                <p>GRADE 4: <b>{this.state.data.predictions.grade_4[0]}</b></p>
              </div>
            )

            : (
              <p><b>Upload you images, Result will appear here</b></p>
            )
          }
        </Card>
      </div>
    );
  }
}

export default HomeRoute;
