import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import {
  Button,
  Typography
} from '@material-ui/core';
import styles from './MemoriiFolderReaderMainList.css';


const MemoriiFolderMainList = inject("memoriiStore")(observer((props) => {
  var currentDocument = props.memoriiStore.currentBrowsedDocument;
  var childDocuments = [];
  if (currentDocument.data.childDocuments) {
    currentDocument.data.childDocuments.forEach(childDocument => {
      childDocuments.push(props.memoriiStore.getDocument(childDocument));
    })
  }
return (
    <div style={styles.memoriiFolderReaderListContainer}>
    {childDocuments.map(d => {
      return <div onClick={() => props.memoriiStore.changeCurrentBrowsedDocument(d)} style={styles.memoriiFolderReaderListTabContainer}>{d.name}</div>
    })}
    </div>
)
}));
export default MemoriiFolderMainList;