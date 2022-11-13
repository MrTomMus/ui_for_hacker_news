import axios from "axios";


export function getIdNews() {
   return axios
        .get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
        .then(data => {
            return data
        })
       
}

export function getNews(newsId) {
    return axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`)
            .then(data => {
                return data
            })
}

export function getComments(newsId) {
    return axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`)
            .then(data => {
                return data
            })
}

