/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import './block-transactions-styles.css';
import arrowRight from '../../images/arrow_right.svg';

const BlockTranscations = (props) => {
  const { transactions } = props;

  return (
    <div className="block-transactions">
      <h3>Block Transactions</h3>
      {transactions.map((item) => {
        const vBytes = Math.round(item.weight / 4);
        const btcValue = item.out.reduce((prev, cur) => {
          return cur.value + prev;
        }, 0);

        return (
          <div className="block-transactions-item" key={item.hash}>
            <div className="block-transactions-item-fee">
              <span>Fee</span>
              <div>
                <div>{Number(item.fee / 100000000).toFixed(8)} BTC</div>
                <div>
                  ({Number(item.fee / item.size).toFixed(3)} sat/B - {Number(item.fee / item.weight).toFixed(3)} sat/WU
                  - {item.size} bytes)
                </div>
                <div>
                  ({Number(item.fee / vBytes).toFixed(3)} sats/vByte - {vBytes} virtual bytes)
                </div>
              </div>
              <span className="btc-value">{Number(btcValue / 100000000).toFixed(8)} BTC</span>
            </div>
            <div className="block-transactions-info">
              <div className="block-transactions-item-hash">
                <span>Hash</span>
                <div className="hash">{item.hash}</div>
                <span className="time">{format(new Date(item.time * 1000), 'yyyy-MM-dd hh:mm')}</span>
              </div>
              <div className="transaction-wrapper">
                <span className="transaction-label" />
                <div className="transaction-list">
                  <div className="transaction-in">
                    {item.inputs.map(({ index, prev_out }) =>
                      prev_out ? (
                        <div className="tx-info" key={index}>
                          <span className="address">{prev_out.addr}</span>
                          <span className="value">{Number(prev_out.value / 100000000).toFixed(8)} BTC</span>
                        </div>
                      ) : null
                    )}
                  </div>
                  <div className="transaction-out-wrapper">
                    <img src={arrowRight} alt="right arrow" width="24" />
                    <div className="transaction-out">
                      {item.out.map(({ n, addr, value }) =>
                        addr ? (
                          <div className="tx-info" key={n}>
                            <span className="address">{addr}</span>
                            <span className="value">{Number(value / 100000000).toFixed(8)} BTC</span>
                          </div>
                        ) : null
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

BlockTranscations.propTypes = {
  transactions: PropTypes.array,
};

BlockTranscations.defaultProps = {
  transactions: [],
};

export default BlockTranscations;
