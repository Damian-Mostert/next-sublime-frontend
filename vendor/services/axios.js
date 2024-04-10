import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: "Bearer " +process.env.NEXT_PUBLIC_BUILDER_API_WRITE_KEY, 
    },
})

export default axios
