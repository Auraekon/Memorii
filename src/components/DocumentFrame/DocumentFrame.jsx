import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import {
  Button
} from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';
import styles from './DocumentFrame.css';
import MemoriiFolderReaderMainList from '../MemoriiFolderReaderMainList/MemoriiFolderReaderMainList';
import MemoriiFolderReaderTopBar from '../MemoriiFolderReaderTopBar/MemoriiFolderReaderTopBar';


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

  getReader(document) {  
    switch(document.typeID) {
      case "folder":
      return {
        readerMainList:
        <MemoriiFolderReaderMainList
        currentBrowsedDocument={document}
        />,
        readerTopBar:
        <MemoriiFolderReaderTopBar
        currentBrowsedDocument={document}
        />,
      };
      case "text":
      case "image":
      default:
      return null;
    }
  }

  componentDidMount() {
    this.props.memoriiStore.changeCurrentBrowsedDocument();
  }

  render() {
    var currentDocument = this.props.memoriiStore.currentBrowsedDocument;
    var linkChain = this.linkChainer(currentDocument);
    var readerComponents = this.getReader(currentDocument);
  return (
    <div style={styles.mainContainer}>
      <div style={styles.historyBar}>
      
      </div>
      <div style={styles.topBar}>
      <div style={styles.topBarReturnButtonContainer}>
      <Button
      onClick={() => this.props.memoriiStore.changeCurrentBrowsedDocument(this.getParent(currentDocument))}
      >
        <ArrowBack/>
      </Button>
      </div>
      <div style={styles.topBarReaderToolbar}>

      {readerComponents && readerComponents.readerTopBar}

      </div> 
      </div>

      {readerComponents && readerComponents.readerMainList}
      
    </div>
  );
}
}
export default DocumentFrame;

