import React ,{Component ,Fragment} from "react";
import Header from "./components/header/header"
import Banner from "./components/banner/banner"
import Content from "./components/content/content"
import Footer from "./components/footer/footer"



export default class Index extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Fragment>
        <Header />
        <Banner />
        <Content />
        <Footer/>
      </Fragment>
    )
  }

}