import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import * as api from './services/api'

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
    this.setState({isLoad:true})
  
    try {
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
    this.setState({isLoad: false})}
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
 
  { const { hits , isVisible, isLoad, error, empty} = this.state;
    return (<div>
      <Searchbar onSubmit={this.handleSubmit} />
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