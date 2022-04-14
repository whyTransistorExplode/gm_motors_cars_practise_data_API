import React, {Component} from 'react';
import {PDFReader} from 'reactjs-pdf-reader';
import contants from "../../../../contants/contants";

class PdfRead extends Component {
  render() {
    return (

      <div style={{overflow: 'scroll', height: 600}}>
        <PDFReader url={`${contants.API_PREFIX}attachment/${this.props.match.params.id}`}/>
      </div>
    );
  }
}

PdfRead.propTypes = {};

export default PdfRead;
