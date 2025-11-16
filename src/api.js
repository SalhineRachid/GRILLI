import axios from 'axios'

const fakeApi = axios.create({
    baseURL : '/'
}
)

export default fakeApi;