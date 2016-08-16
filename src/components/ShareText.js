import React, { PropTypes } from 'react';

import { constructShareThread } from '../helpers/utils';

const ShareText = ({ shares }) => {
  return (shares.length === 0) ? null : <p className="share-text">Publié par: {constructShareThread(shares)}</p>
};

ShareText.propTypes = {
  shares: PropTypes.array.isRequired,
};

export default ShareText;
