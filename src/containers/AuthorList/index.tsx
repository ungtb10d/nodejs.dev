import React from 'react';
import { FormattedMessage } from 'react-intl';
import Author from '../../components/Author';
import styles from './index.module.scss';

interface Props {
  authors: string[];
}

const AuthorList = ({ authors }: Props): null | JSX.Element => (
  <div className={styles.authorList}>
    <FormattedMessage id="containers.authorList.title" />
    <ul>
      {authors.map(
        (author, i): string | JSX.Element =>
          author && (
            <Author index={i} username={author} key={author} size="60" />
          )
      )}
    </ul>
  </div>
);

export default AuthorList;
