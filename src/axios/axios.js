import axios from 'axios';
const token ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTkwODBjYWJhMDg2NmYyY2NkNjg5MzBjZmMzYzhjNSIsInN1YiI6IjVlNmQwOThiYTliOWE0MDAxODlmZDFhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qstriqe8zuyz_MQktUvxaC7T4WaW8zk21vgIzV0Mau0';
export const movieApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json;charset=utf-8',
    },
});