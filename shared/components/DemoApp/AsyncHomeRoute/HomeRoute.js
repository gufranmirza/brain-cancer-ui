import React from 'react';

import Upload from 'antd/lib/upload';
import Icon from 'antd/lib/icon';
import Card from 'antd/lib/card';

import ImageList from './imageList';

class HomeRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        predictions: undefined
      }
    }
    this.handleResponse = this.handleResponse.bind(this)
  }

  handleResponse (eve) {
    this.setState({
      data: eve.data
    })
  }

  isResult (grade) {
    let predictions = this.state.data.predictions
    predictions = Object.keys(predictions).sort((a,b) => {
      return predictions[b]-predictions[a]
    })

    return predictions[0] === grade
  }

  render() {
    return (
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
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

        {this.state.data.predictions
          ? (
            <div>
              <Card
                style={{
                  textAlign: 'center',
                  fontSize: '18px',
                  background: this.isResult('grade_1') ? "#77e878" : "#fff"
                }}
              >
                <span>GRADE 1: <b>{this.state.data.predictions.grade_1}</b></span>
              </Card>
              <Card
                style={{
                  textAlign: 'center',
                  fontSize: '18px',
                  background: this.isResult('grade_2') ? "#77e878" : "#fff"
                }}
              >
                <span>GRADE 2: <b>{this.state.data.predictions.grade_2}</b></span>
              </Card>
              <Card
                style={{
                  textAlign: 'center',
                  fontSize: '18px',
                  background: this.isResult('grade_3') ? "#77e878" : "#fff"
                }}
              >
                <span>GRADE 3 <b>{this.state.data.predictions.grade_3}</b></span>
              </Card>
              <Card
                style={{
                  textAlign: 'center',
                  fontSize: '18px',
                  background: this.isResult('grade_4') ? "#77e878" : "#fff"
                }}
              >
                <span>GRADE 4: <b>{this.state.data.predictions.grade_4}</b></span>
              </Card>
            </div>
          )
          : (
            <Card style={{textAlign: 'center', fontSize: '18px'}}>
              No file has been uploaded for analysis
            </Card>
          )
        }
        {this.state.data.predictions &&
          <ImageList
            image_data={this.state.data.image_data}
            zip_id={this.state.data.zip_id}
            result_id={this.state.data.result_id}
          />
        }
      </div>
    );
  }
}

export default HomeRoute;
