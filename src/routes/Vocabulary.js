import React from 'react';
import { connect } from 'dva';
import styles from './Vocabulary.css';
import VocabularyComponent from '../components/Vocabulary/Vocabulary';
import MainLayout from '../components/MainLayout/MainLayout';

function Vocabulary({ location }) {
  return (
    <MainLayout>
      <div className={styles.normal}>
        <VocabularyComponent />
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Vocabulary);
