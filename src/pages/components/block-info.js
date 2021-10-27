/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import './block-info-styles.css';

const BlockInfo = (props) => {
  const { blockData } = props;

  if (!blockData) {
    return null;
  }

  const { bits, fee, n_tx, hash, nonce, time, size, height, weight, mrkl_root, block_index } = blockData;

  return (
    <div className="block-info">
      <h3>Block {block_index}</h3>
      <div className="block-info-item">
        <div>Hash</div>
        <div>{hash}</div>
      </div>
      <div className="block-info-item">
        <div>Timestamp</div>
        <div>{time ? format(new Date(time * 1000), 'yyyy-MM-dd hh:mm') : '-'}</div>
      </div>
      <div className="block-info-item">
        <div>Height</div>
        <div>{height}</div>
      </div>
      <div className="block-info-item">
        <div>Number of Transactions</div>
        <div>{n_tx}</div>
      </div>
      <div className="block-info-item">
        <div>Merkle root</div>
        <div>{mrkl_root}</div>
      </div>
      <div className="block-info-item">
        <div>Bits</div>
        <div>{bits ? bits.toLocaleString() : '-'}</div>
      </div>
      <div className="block-info-item">
        <div>Weight</div>
        <div>{weight ? weight.toLocaleString() : '-'} WU</div>
      </div>
      <div className="block-info-item">
        <div>Size</div>
        <div>{size ? size.toLocaleString() : '-'} bytes</div>
      </div>
      <div className="block-info-item">
        <div>Nonce</div>
        <div>{nonce ? nonce.toLocaleString() : '-'}</div>
      </div>
      <div className="block-info-item">
        <div>Fee Reward</div>
        <div>{fee ? fee / 100000000 : 0} BTC</div>
      </div>
    </div>
  );
};

BlockInfo.propTypes = {
  blockData: PropTypes.object,
};

BlockInfo.defaultProps = {
  blockData: null,
};

export default BlockInfo;
