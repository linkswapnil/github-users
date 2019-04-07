import React from 'react';
import '../styles/Repos.scss'

export default class Repos extends React.Component{

  constructor (props){
    super(props);
    this.state = {
      sortOptions : ['created', 'updated', 'pushed', 'full_name'],
      sortOption: 'created'
    }
  }

  componentWillMount(){
     this.props.fetchRepos({
       loginId : this.props.loginId,
       sortOption: this.state.sortOption
     });
  }

  handleSortOptionChange(event){
    this.setState({sortOption: event.target.value});
    this.props.fetchRepos({
      loginId : this.props.loginId,
      sortOption: event.target.value
    });
  }

  render() {
    return (
      <div className="repos">
        <label htmlFor="sort"> Sort By: </label>
        <select id="sort" onChange={(e)=>this.handleSortOptionChange(e)}>
          {
            this.state.sortOptions.map((option)=>{
              return (<option key={option}>{option}</option>)
            })
          }
        </select>
        <ul className="table-list">
        {this.props.repos.map((r)=>{
          let language, stargazersCount, forks, updatedAt;
          if(r.language){
            language = <li><span className="language"></span>{r.language}</li>;
          }
          if(r.stargazers_count){
            stargazersCount = <li className="stargazers">
              <svg aria-label="star" className="icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
              <span className="text">{r.stargazers_count}</span>
              </li>;
          }
          if(r.forks){
            forks = <li className="forks">
              <svg aria-label="fork" className="icon" viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img"><path fillRule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
              <span className="text">{r.forks}</span>
              </li>;
          }
          if(r.updated_at){
            updatedAt = <li>Updated {r.updated_at}</li>;
          }
          return(<li className="table-list-item" key={r.id}>
            <div className="table-list-cell">
              <a className="name" href={`${r.svn_url}`}> {r.name}</a>
              <div className="description">{r.description}</div>
              <ul className="details">
                {language}
                {stargazersCount}
                {forks}
                {updatedAt}
              </ul>
            </div>
          </li>)
        })}
        </ul>
      </div>
    )
  }
}
