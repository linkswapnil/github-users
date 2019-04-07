export const fetchUsers = payload => {

  return new Promise((resolve, reject)=>{
    const page = payload.currentPage || 1;
    const promise = fetch(`https://api.github.com/search/users?q=${payload.searchCriteria}&page=${page}`);
    const error = {
      items:[],
      total_count: 0,
      error: 'Unable to fetch'
    };
    promise.then((res) => {
      if(res.status === 200){
        resolve(res.json())
      }else{
        reject(error);
      }
    })
    .catch(()=>{
     reject(error);
    })
  })
}
