import axios from 'axios'

const fakeApi = axios.create({
    baseURL : '/Data/'
}
)

export default fakeApi;