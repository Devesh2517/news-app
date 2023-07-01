import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap');
</style>

export default class Newscomponent extends Component {


  // static defaultProps = {
  //   country:'in',
  //   pageSize:8,
  //   category:'general'
  // }
  PropTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      keyWord: ''
    }
    this.Nextpage = this.Nextpage.bind(this)
    this.Previouspage = this.Previouspage.bind(this)
    this.Search = this.Search.bind(this)
    document.title = `${this.capitalizefirstword(this.props.category)} News`


  }

  async UpdateNews() {
    this.props.setprogress(10)
    console.log(this.props.apikey)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}${this.state.keyWord}`
    this.setState({ loading: true })
    let data = await fetch(url)
    this.props.setprogress(30)
    let parseData = await data.json()
    this.props.setprogress(70)
    // console.log(parseData)
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    })
    this.props.setprogress(100)
  }

  async componentDidMount() {
    this.UpdateNews();

  }
  async Previouspage() {
    await this.setState({ page: (this.state.page - 1) })
    this.UpdateNews()
  }

  async Nextpage() {
    await this.setState({ page: (this.state.page + 1) })
    this.UpdateNews()

  }
  async Search() {

    await this.setState({ keyWord: `&q=${document.getElementById('Searchvalue').value}` })
    console.log(this.state.keyWord)
    this.UpdateNews()
  }
  capitalizefirstword = (text) => {
    text = text[0].toUpperCase() + text.slice(1)
    return text
  }

  fetchMoreData = async () => {
    
  
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}${this.state.keyWord}`
    this.setState({ page: this.state.page + 1 })
    let data = await fetch(url)
   

    let parseData = await data.json()
   
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
    })

  };

  render() {

    let heading = {
      backgroundColor: 'darkblue',
      color: 'white',
      border: '2px solid red',
      borderRadius: '25px'
    }
    return (


      <>
        <div className="container my-3">
          <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" name='search' id="Searchvalue" style={{ width: '30rem', backgroundColor: 'lightgray', float: 'left' }} />
          <button className="btn btn-dark me-4" onClick={this.Search} type="submit">Search</button>



          <h2 className='text-center my-3' style={heading}>News Updates of {this.capitalizefirstword(this.props.category)}</h2>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >

            <div className="container my-3 justify-content-end">
              <div className="row mx-3 my-3">
                {this.state.articles.map((Element) => {
                  return <div className="col-md-4 my-2" key={Element.url}>
                    <Newsitem title={Element.title ? Element.title : ""} decription={Element.description ? Element.description : ""}
                      imgurl={Element.urlToImage} newsurl={Element.url} author={Element.author} date={new Date(Element.publishedAt).toGMTString()}
                    />
                  </div>
                })}
              </div>
            </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between ">
          <button disabled={this.state.page <= 1} onClick={this.Previouspage} type="button" className="btn " style={{backgroundColor:'red'}}>&laquo; Previous</button>
          <div className="badge bg-danger" style={{ fontFamily: "'Kalam', cursive", fontWeight: "bolder", fontSize: "30px" }}>{this.state.page}</div>
          <button disabled={this.state.page >= Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.Nextpage} style={{backgroundColor:'red'}} type="button" className="btn btn-primary">Next &raquo;</button>
        </div> */}
        </div>
      </>
    )
  }
}
