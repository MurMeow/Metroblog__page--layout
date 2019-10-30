import React, {Component, Fragment } from 'react';
import './style.scss'
import  Item from '../item/item'

class Banner extends Component {

  constructor(props) {
    super(props);
  };


  render() {
    return (
      <Fragment>
        <main className="content global-container flex">
          <div className="mainBlock">

            <div className="slider_article">
              <div className="slider_article__images">
                <img src="images/Shape_2.svg" className="phone"/>
                <img src="images/Shape_3.svg" className="monitor"/>
              </div>
              <div className="slider_article__content">
                <h4>Lorem Ipsum is simply cssauthor.com</h4>
                <p align="justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries , but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                  PageMaker
                  including versions of Lorem Ipsum.
                </p>
                <div className="arrows">
                  <a href="#">
                    <div className="left-arrow">
                      <i className="i_left-arrow"></i>
                    </div>
                  </a>
                  <a href="#">
                    <div className="right-arrow">
                      <i className="i_left-arrow"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="news-bord flex">
              <Item
                    title="Apple i phone variations"
                    date="30/12/12"
                    author="By : Mariya"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not only five centuries , but also the
                  leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                  publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum."
              />
              <Item
                title="The standard chunk Lorem Ipsum"
                date="30/12/12"
                author="By : Andriana Solorzana"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not only five centuries , but also the
                  leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                  publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum."
              />
              <Item
                title="This book is one of treatise ethics"
                date="30/12/12"
                author="By : Andriana Solorzana"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not only five centuries , but also the
                  leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                  publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum."
              />
              <Item
                title="Apple i phone variations"
                date="30/12/12"
                author="By : Mariya"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not only five centuries , but also the
                  leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                  publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum."
              />
              <Item
                title="The standard chunk Lorem Ipsum"
                date="30/12/12"
                author="By : Andriana Solorzana"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not only five centuries , but also the
                  leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                  publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum."
              />
              <Item
                title="This book is one of treatise ethics"
                date="30/12/12"
                author="By : Andriana Solorzana"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not only five centuries , but also the
                  leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                  publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum."
              />
              <Item
                title="Apple i phone variations"
                date="30/12/12"
                author="By : Mariya"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not only five centuries , but also the
                  leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                  publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum."
              />
              <Item
                title="The standard chunk Lorem Ipsum"
                date="30/12/12"
                author="By : Andriana Solorzana"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not only five centuries , but also the
                  leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                  publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum."
              />
              <Item
                title="This book is one of treatise ethics"
                date="30/12/12"
                author="By : Andriana Solorzana"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not only five centuries , but also the
                  leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                  publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum."
              />
            </div>

          </div>

          <div className="signboards">

            <div className="board_advertising">
              <div className="heading">
                <p align="center">The ultimate apple</p>
                <p className="guid">i pad Guide</p>
              </div>

                <img src="images/ipadBig.svg" alt="ipad" className="ipadBig"/>
                <img src="images/ipadSmall.svg" alt="ipad"  className="ipadSmall"/>
                <img src="images/css.svg" alt="css"  className="css"/>

            </div>

            <div className="board_join">
              <div className="counter-weeks">
                <p className="counter">12</p>
                <p>WEEK</p>
              </div>
              <h2>Lorem Ipsum</h2>
              <p align="center" className="text">Lorem Ipsum is simply dummy</p>
              <button className="board_join__button" type='button'>JOIN US NOW!</button>
            </div>

            <div className="board_form-mailing">
              <h4 align="center">Join our mailing </h4>
              <p align="justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
              <form>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="email address"/>
                <button type='button'>SIGN ME UP!</button>
              </form>
            </div>

          </div>

        </main>
      </Fragment>

    );
  };

}


export default Banner;