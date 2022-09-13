import axios from 'axios';
const LOGIN_USER_KEY = 'WD_FORUM_LOGIN_USER_KEY';

var baseURL;
if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
    baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
    baseURL = 'http://127.0.0.1:8000';
}

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 * Add requireToken: true in request config, for API that required Authorization token
 */
api.interceptors.request.use(
    config => {
        if (config.requireToken && localStorage.getItem(LOGIN_USER_KEY)) {
            config.headers.common['Authorization'] = JSON.parse(localStorage.getItem(LOGIN_USER_KEY)).token;
        }

        return config;
    },
    err => {
        console.error(err);
    }
);

export default class API {

    getPosts = async () => {
        const post = await api.get('/post/').then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw new Error(error);
        
        });
        return post;
    };
    addPost = async postBody => {
        const formData = new FormData();

        for (const key in postBody) {
            formData.append(key, postBody[key]);
        }

        try {
            const response = await api.post('/posts/add/', formData);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    };
    deletePost = async id => {
        try {
            return await api.delete(`/posts/delete/${id}/`);
        } catch (error) {
            throw new Error(error);
        }
    };



    getItems = async (category) => {
        let url='/items'
        if(category) {
            url += '?category=' + category
            console.log('url',url);
        }
        const items = await api.get(url).then((response) => {
            return response.data
        })
        .catch((error) => {
            throw new Error(error)
        })
        return items
    };



    getReview = async (item_id) => {
        let url = '/reviews'
        if(item_id) {
            url = '/reviews?item_id=' + item_id
            console.log('url', url);
        }
        const review = await api.get(url).then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw new Error(error)
        })
        return review
    };
    writeReview = async (item_id, name, rate, body, likeCount) => {
        const formData = new FormData();
        formData.append('item', item_id);
        formData.append('name', name);
        formData.append('rate', rate);
        formData.append('body', body);
        formData.append('like_count', likeCount);
        const savedReview = await api.post('/reviews/add', formData).then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw new Error(error);
        });
        return savedReview;
    };
}
