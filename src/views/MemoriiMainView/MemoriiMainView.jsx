import React, { Component } from 'react';
import { Grid, CircularProgress} from '@material-ui/core';
import { observer, inject } from 'mobx-react';
import {
  Typography,
} from '@material-ui/core';
import text from 'texts/fi';
import DocumentFrame from 'components/DocumentFrame/DocumentFrame';


@inject('memoriiStore')
@observer
export default class MemoriiMainView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.memoriiStore.changeCurrentBrowsedDocument();
  }

  render() {
    console.log(this.props.memoriiStore.documents[0])
    return (
      <Grid item xs={12}>
        <DocumentFrame
        currentBrowsedDocument={this.props.memoriiStore.currentBrowsedDocument}
         />
      </Grid>
    );
  }
}