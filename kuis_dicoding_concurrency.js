class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NetworkError';
  }
}

// TODO: 1
const fetchingUserFromInternet = () => {
  let isOffline = true;
	return new Promise((resolve, reject) => {
      setTimeout(() => {
    	if (isOffline) {
      		resolve (new NetworkError('Gagal mendapatkan data dari internet'));
   		}else {
    		  reject ({ name: 'John', age: 18 });
    	}}, 500);
    });
};


// TODO: 2
const gettingUserName = () => {
  fetchingUserFromInternet()
    .catch((value) => {
      console.log(value);
      return new Promise((resolve, reject) => {
        if(error){
          resolve(error.name);
        }else{
          reject(user.name);
        }
      });
    })
};
