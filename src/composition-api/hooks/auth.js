
export default (requestData) => {
  console.log('111 :>> ', 111)

  const login = () => {
    console.log('login :>> ', requestData)
  }

  return {
    login
  }
}
