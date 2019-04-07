import React from 'react';
import '../styles/Pagination.scss'

export default class Pagination extends React.Component{
  constructor (props){
    super(props);
    this.NEXT = 'Next';
    this.PREVIOUS = 'Previous'
    this.state = {
      pages : [],
      currentPage:1,
      totalPages: 0
    }
  }
  handlePageClick(page){
    let self = this;
    let currentPage = this.state.currentPage;
    let currentPages = this.state.pages;
    if(page === this.NEXT || page === this.PREVIOUS){
      currentPages = currentPages.map((p)=>{
        if(typeof p === "number")
         if(page === self.NEXT){
           return p+1;
         }
         else{
           return p-1;
         }
         else
          return p;
      })
    }
    if(page === this.NEXT){
      currentPage = currentPage+1;
    }else if(page === this.PREVIOUS){
      currentPage = currentPage-1;
    }else{
      currentPage = page;
    }
    this.setState({pages: currentPages, currentPage});
    this.props.onPageSelectionChange({
      searchCriteria: this.props.searchCriteria,
      currentPage
    })
  }
  componentWillReceiveProps(props){
    const totalPages = Math.ceil(props.totalItems / props.itemsPerPage);
    let pages = [];
    if(totalPages > this.props.maxPages){
      for(let i=1;i<=this.props.maxPages;i++){
        pages.push(i)
      }
      pages.unshift(this.PREVIOUS);
      pages.push(this.NEXT);
    }else{
      for(let i=1;i<=totalPages;i++){
        pages.push(i)
      }
    }
    this.setState({pages, totalPages, currentPage: 1});
  }
  render(){
    let self = this;
    return(
      <div className="pagination">
        <ul>
        {
          this.state.pages.map(p => {
          let page;
          if(p === self.PREVIOUS && this.state.currentPage === 1){
            page = <a href="#" className="disabled">{p}</a>;
          }else if(p === self.NEXT && this.state.currentPage === this.state.totalPages){
            page = <a href="#" className="disabled">{p}</a>;
          }
          else if(p === this.state.currentPage){
            page = <a href="#" className="active">{p}</a>;
          }else{
            page = <a href="#" onClick={(e)=>{this.handlePageClick(p)}}>{p}</a>;
          }
          return(
            <li key={p}>
              {page}
            </li>
          )
        })}
        </ul>
      </div>)
  }
}
