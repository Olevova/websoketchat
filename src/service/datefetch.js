import axios from "axios";

axios.defaults.baseURL = ' https://dummyjson.com/comments';

export async function getComments() {
    try {
        const getComments = await axios.get();
        console.log(getComments.data.comments);
        return getComments.data.comments
    }
    catch (error) {
        console.log(error);
    }

} 