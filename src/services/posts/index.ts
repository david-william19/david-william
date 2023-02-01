import axios from "axios"
import { Posts } from "../../types/posts"

export const getPosts = async() => {
    let response = await axios.get('https://dev.to/api/articles?username=davidwilliam_')
    return response.data
}

