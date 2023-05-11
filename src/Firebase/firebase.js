import axios from "axios";

export const fetchCustomers = (setLoader, setAddLoader) => {
  return function (dispatch) {
    axios.get('https://todolist-redux-fb1ee-default-rtdb.firebaseio.com/.json')
    .then(data => {
        data = data.data
        let arr = []
        for (const key in data) {
          let obj = {}
          obj = {id: key, ...data[key]}
          arr.push(obj)
        }
        dispatch({type: 'GET_TODOS', card: arr.reverse()})
        if (setLoader) {
          setLoader(false)
        }
        if (setAddLoader) {
          setAddLoader(false)
        }
      })
  }
}
