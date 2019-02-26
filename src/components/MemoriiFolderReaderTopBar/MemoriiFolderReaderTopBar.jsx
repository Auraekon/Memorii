import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import {
  Button,
  Typography
} from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';
import Search from '@material-ui/icons/Search';
import styles from './MemoriiFolderReaderTopBar.css';


@inject('memoriiStore')
@observer
class MemoriiFolderReaderTopBar extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    var currentDocument = this.props.currentBrowsedDocument;
  return (
      <div style={styles.memoriiFolderReaderListContainer}>
      <Button>
      <AddCircle />
      </Button>
      <Button>
      <Search />
      </Button>
      </div>
  );
}
}
export default MemoriiFolderReaderTopBar;