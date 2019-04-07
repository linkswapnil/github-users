export const fetchProfileInfo = payload => {

  return new Promise((resolve, reject)=>{
    const promise = fetch(`https://api.github.com/users/${payload.loginId}`);
    const error = {
      error: 'Unable to fetch User Profile'
    };
    promise.then((res) => {
      if(res.status === 200){
        resolve(res.json())
      }else{
        reject(error);
      }
    })
    .catch((err)=>{
      reject(err);
    })
  })
}

export const fetchRepos = payload => {

  return new Promise((resolve, reject)=>{
    const promise = fetch(`https://api.github.com/users/${payload.loginId}/repos?sort=${payload.sortOption}`);
    const error = {
      repos:[],
      error: 'Unable to fetch User Repositories'
    };
    promise.then((res) => {
      if(res.status === 200){
        resolve(res.json())
      }else{
        reject(error);
      }
    })
    .catch((err)=>{
      reject(err);
    })
  })
}
