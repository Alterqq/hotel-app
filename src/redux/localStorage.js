export const storage = (store) => {
  if (store) {
    return localStorage.setItem('state', JSON.stringify(store.getState()))
  } else {
    return localStorage.getItem('state')
  }
}


