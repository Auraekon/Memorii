import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import {
  Button,
  Typography
} from '@material-ui/core';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import styles from './MemoriiFolderReaderMainList.css';


@inject('memoriiStore')
@observer
class MemoriiFolderReaderMainList extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    const changeCurrentBrowsedDocument = this.props.memoriiStore.changeCurrentBrowsedDocument;
    var currentDocument = this.props.currentBrowsedDocument;
    var childDocuments = [];
    if (currentDocument.data.childDocuments) {
      currentDocument.data.childDocuments.forEach(childDocument => {
        childDocuments.push(this.props.memoriiStore.getDocument(childDocument));
      })
    }
  return (
      <div style={styles.memoriiFolderReaderListContainer}>
      {childDocuments.map(d => {
        return <div onClick={() => this.props.memoriiStore.changeCurrentBrowsedDocument(d)} style={styles.memoriiFolderReaderListTabContainer}>{d.name}</div>
      })}
      </div>
  );
}
}
export default MemoriiFolderReaderMainList;