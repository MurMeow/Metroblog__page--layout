import React, { Fragment } from 'react';
import './style.scss'



const Item = (props) => {
  const {
    title, date, author, text
  } = props;


    return (
      <Fragment>
        <div className="item">
          <h4>{title}</h4>
          <div className="data flex">
            <p className="date">{date}</p>
            <p className="name">{author}</p>
          </div>
          <p align="justify" className="text">{text}</p>
        </div>
      </Fragment>
    );
  };

export default Item;

