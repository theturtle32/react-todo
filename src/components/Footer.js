import React from 'react';
import FilterLink from './FilterLink';

const flatten = a => a.reduce((a,b) => a.concat(b), [])

const Footer = ({
  visibilityFilter,
  onFilterClick
}) => (
    <p>
      Show: {
        flatten(['All', 'Active', 'Completed'].map(filterOption => (
          [
            <FilterLink
              filter={`SHOW_${filterOption.toUpperCase()}`}
              currentFilter={visibilityFilter}
              onClick={filter => onFilterClick(filter)}
            >
              {filterOption}  
            </FilterLink>,
            ', '
          ]
          )
        )).slice(0,-1)
      }
    </p>
)

export default Footer;