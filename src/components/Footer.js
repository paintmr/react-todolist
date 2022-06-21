import React, { Component } from 'react';

class Footer extends Component {
  render() {
    // 把FooterContainer中的setFilter重命名为setListFilter
    const { filter, setFilter: setListFilter } = this.props;
    return (
      <div>
        <span>Show:</span>
        <button disabled={filter === "all"} onClick={() => setListFilter("all")}>All</button>
        <button disabled={filter === "active"} onClick={() => setListFilter("active")}>Active</button>
        <button disabled={filter === "completed"} onClick={() => setListFilter("completed")}>Completed</button>
      </div>
    );
  }
}

export default Footer;