import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './search-bar-styles.css';
import search from '../../images/search.svg';
import Loading from './loading';

const SearchBar = (props) => {
  const { onSearchResult } = props;
  const [loading, setLoading] = useState(false);
  const fetchBlockchainData = async (blockHash) => {
    setLoading(true);

    const response = await fetch(`https://blockchain.info/rawblock/${blockHash}`);
    const result = await response.json();

    if (response.ok) {
      onSearchResult(result);
    } else {
      onSearchResult();
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchBlockchainData(e.target.value);
    }
  };

  return (
    <div className="search-wrapper">
      <div className="prefix">
        {loading ? <Loading loading={loading} /> : <img src={search} width="20" height="20" alt="search" />}
      </div>
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
