import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import {
  Button
} from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';
import Search from '@material-ui/icons/Search';
import styles from './MemoriiFolderReaderTopBar.css';

const MemoriiFolderReaderTopBar = inject("memoriiStore")(observer((props) => {
  var currentDocument = props.currentBrowsedDocument;
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
}));
export default MemoriiFolderReaderTopBar