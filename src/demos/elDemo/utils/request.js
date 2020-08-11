/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import axios from "axios";
// import { Message, MessageBox } from "element-ui";
// import store from "@/store";
// import router from "@/router";


//创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_API, //api的base_url
    timeout: 10000, //请求超时时间
    withCredentials: true, //携带cookie
    crossDomain: true
});

//request 拦截器
service.interceptors.request.use(config => {
    return config;
});

//response 拦截器
service.interceptors.response.use(config => {
    return config;
});

export default service;