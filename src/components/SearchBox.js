import React from 'react';
import '../styles/SearchBox.scss'
import {SearchIcon} from './icons/Search'
export default class SearchBox extends React.Component{
  constructor (props){
    super(props);
    this.state = {loading:false}
  }
  handleChange(e){
    this.props.onSearchInputChange({
      searchCriteria: e.currentTarget.value
    });
  }
  componentWillReceiveProps(newProps){
    this.setState({loading : newProps.isLoading});
  }
  render(){
    return(
        <div className="search-box">
          {this.state.loading ? <img className="spinner" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" alt=""/>
            :  <SearchIcon width="16" height="16"/>}
          <input placeholder="Find a member..." type="text" onChange={(e)=> {this.handleChange(e)}}/>
      </div>)
  }
}