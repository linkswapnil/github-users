import React from 'react';
import UserContainer from '../containers/users.container';
import SearchContainer from '../containers/searchbox.container';
import PaginationContainer from '../containers/pagination.container';
export const UserSearch = ()=> (
   <main className="container">
      <SearchContainer/>
      <UserContainer items={[]} searchCriteria='' loading={false}/>
      <PaginationContainer maxPages={7} totalItems={0} itemsPerPage={30}/>
   </main>
)

