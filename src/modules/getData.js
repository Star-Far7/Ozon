const getData = () => {
  return fetch(
    "https://test-27bee-default-rtdb.firebaseio.com/goods.json"
  ).then((response) => {
    return response.json();
  });
};
export default getData;
