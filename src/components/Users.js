import React from 'react';
import '../styles/Users.scss'
import {SearchIcon} from './icons/Search'

export default function Users(props){
  let message='';
    if(props.searchCriteria === ''){
      message='Enter Search Criteria';
    }else if(!props.error && !props.isLoading && props.items.length === 0){
      message = 'We couldn’t find any matching members.'
    }else if (props.error){
      message = props.error;
    }else{
      message='';
    }
    return (
      <div className="user-list">
        {message.length > 0 ?
          <div className="blankslate">
          <SearchIcon width="32" heigth="32"/>
          <h3>{message}</h3>
        </div>: ''}
        <ul className="table-list">
        {props.items.map((u)=>{
          return(
            <li className="table-list-item" key={u.node_id}>
              <div className="table-list-cell">
                <img className="avator" alt="Avator" src={u.avatar_url}/>
              </div>
              <div className="table-list-cell">
                <div className="user-name">
                  <a href={`/users/${u.login}`}> {u.login}</a>
                </div>
              </div>
            </li>
          )
        })}
        </ul>
      </div>
    )
}
