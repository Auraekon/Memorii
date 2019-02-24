import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import {
  Button,
  Typography
} from '@material-ui/core';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import styles from './DocumentFrame.css';


@inject('memoriiStore')
@observer
class DocumentFrame extends Component {
  constructor (props) {
    super(props);
  }
  
  getParent(document) {
    if (document.parentID != "") {
      return this.props.memoriiStore.getDocument(document.parentID);
    } else return false;
  }
  
  linkChainer(document) {
    var moreParents = true;
    var linkChain = [];
    var currentScrutinizedDocument = document;
    while (moreParents) {
      moreParents = false;
      if (currentScrutinizedDocument = this.getParent(currentScrutinizedDocument)) {
        linkChain.push(currentScrutinizedDocument.ID);
        moreParents = true;
      }
    }
    console.log(linkChain);
    return linkChain;
  }

  render() {
    const changeCurrentBrowsedDocument = this.props.memoriiStore.changeCurrentBrowsedDocument;
    var currentDocument = this.props.currentBrowsedDocument;
    var linkChain = this.linkChainer(currentDocument);
    var childDocuments = [];
    if (currentDocument.data.childDocuments) {
      currentDocument.data.childDocuments.forEach(childDocument => {
        childDocuments.push(this.props.memoriiStore.getDocument(childDocument));
      })
    }
  return (
    <div style={styles.mainContainer}>
      <div style={styles.historyBar}>
      
      </div> 
      <div style={styles.topBar}>
      <div style={styles.topBarReturnButtonContainer}>
      <Button
      onClick={() => this.props.memoriiStore.changeCurrentBrowsedDocument(this.getParent(currentDocument))}
      >
        <AccessAlarmIcon/>
      </Button>
      
      </div>
      <div style={styles.topBarReaderToolbar}>
      
      </div> 
      </div>

      <div style={styles.documentReaderList}> 
      {childDocuments.map(d => {
        return <div onClick={() => this.props.memoriiStore.changeCurrentBrowsedDocument(d)} style={styles.memoriiTabContainer}>{d.name}</div>
      })}
      </div>
    </div>
  );
}
}
export default DocumentFrame;