import React, { useState } from 'react';

import logo from '../logo.svg';
import SearchBar from './components/search-bar';
import BlockInfo from './components/block-info';
import BlockTranscations from './components/block-transactions';

const Home = () => {
  const [result, setResult] = useState();

  return (
    <>
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <span>Search Blockchain Data</span>
      </header>
      <SearchBar onSearchResult={setResult} />
      {result && <BlockInfo blockData={result} />}
      {result && <BlockTranscations transactions={result.tx} />}
    </>
  );
};

export default Home;
