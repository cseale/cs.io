import React, { Component } from 'react';

export default class Filters extends Component {
  render () {
    return (
      <div className="cf">
        <ul className="filters">
          {this.props.filters.map((filter, index) => {
            const change = () => this.props.onChange(filter);
            const classes = `filter-label ${filter.source.toLowerCase()}`;

            return (
              <li className="filter" key={index}>
                <label className={classes}>
                  <input
                    className="filter-checkbox"
                    type="checkbox"
                    name="sources[]"
                    value={filter.source}
                    onChange={change}
                    checked={filter.active}
                  />
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
