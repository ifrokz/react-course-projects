import React from 'react';

const PortfolioItemPage = (props) => (
    <p>Item con el id {props.match.params.id}</p>
);

export default PortfolioItemPage;