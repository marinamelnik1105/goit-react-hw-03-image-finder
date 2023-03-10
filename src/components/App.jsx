import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import * as api from './services/api'
import { BallTriangle } from 'react-loader-spinner'
export class App extends Component

{
  state = {
    search: '',
    page: 1,
    error: null,
    hits: [],
    isVisible: false,
    isLoad: false,
    empty: false,
    loader:false,
  }
  componentDidUpdate(prevProps, prevState)
  {
    if (prevState.search !== this.state.search || prevState.page !== this.state.page) {
    this.getImages(this.state.search,this.state.page)}
  }
  showMoreImg=()=> this.setState(prev=>({page :prev.page +1}))
  getImages = async (query, page) =>
  {
    if (!query) return;
    this.setState({isLoad:true, loader:true})
  
    try {
      this.setState({loader:true})
      const { hits, total, totalHits } = await api.getImages(query, page)
      if (hits.length === 0) { this.setState({ empty: true })}
      console.log({hits,total,totalHits})
      this.setState(prevState => ({
        hits: [...prevState.hits, ...hits],
        isVisible:(hits.length >= 12) 
      }))
    } catch(error) {
      this.setState({ error: error })
    } finally {
    this.setState({isLoad: false, loader:false})}
  }
  onSubmit = (e) =>
  {
    e.preventDefault();

    this.props.onSubmit(this.state.search)
  }
  

  handleSubmit = ({ value }) => this.setState({
    search:value,
    page: 1,
    error: null,
    hits: [],
    isVisible: false,
    isLoad: false,
    empty:false,
  })
  render()
 
  { const { hits , isVisible, isLoad, error, empty, loader} = this.state;
    return (<div>
      <Searchbar onSubmit={this.handleSubmit} />
            {loader && <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#664da9"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />}
      <ul>{hits.map(({ id, webformatURL, tags }) =>
      (<li key={id}>
        <img src={webformatURL}alt={tags} />
      </li>))}
        
      </ul>
      {isVisible && <button onClick={this.showMoreImg}>{isLoad ? 'Loading...' : 'Load more'}</button>} 
      {error && <p>Oops</p>}
      {empty && <p>Sorry. There are no images...</p>}
  </div>)}
}