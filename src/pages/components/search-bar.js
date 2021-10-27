/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import './search-bar-styles.css';
import search from '../../images/search.svg';

const SearchBar = (props) => {
  const { onSearchResult } = props;
  const fetchBlockchainData = async (blockHash) => {
    const response = await fetch(`https://blockchain.info/rawblock/${blockHash}`);
    const result = await response.json();

    if (response.ok) {
      onSearchResult(result);
    } else {
      console.log(result);
      onSearchResult();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchBlockchainData(e.target.value);
    }
  };

  return (
    <div className="search-wrapper">
      <img src={search} width="20" height="20" alt="search" />
      <input type="search" onKeyDown={handleKeyDown} placeholder="Please input the block hash" />
    </div>
  );
};

SearchBar.propTypes = {
  onSearchResult: PropTypes.func,
};

SearchBar.defaultProps = {
  onSearchResult: (value) => value,
};

export default SearchBar;
