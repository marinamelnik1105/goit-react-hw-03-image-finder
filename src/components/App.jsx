import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import * as API from './services/api'
export class App extends Component

{
  state = {
    materials:[],
    value: ''
  }
  async addMaterial(values)
  {
    const material = await API.addMaterial(values)
  console.log(material)}
  // handleChange =({target:{value}})=>
  // {
  // this.setState({value})}
  render()
  {
    return (<div>
      <Searchbar  onSubmit={this.addMaterial} />
  </div>)}
}