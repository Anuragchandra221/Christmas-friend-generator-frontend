import { base_url,random,reset,searchQuery, count } from "./constants"
import axios from "axios"
const get_random = ()=>{
    return axios.get(`${base_url}${random}`)
}
const reset_db = ()=>{
    return axios.get(`${base_url}${reset}`)
}

const find_friend = (name)=>{
    return axios.post(`${base_url}${random}/`,{"name":name})
}

const search = (query)=>{
    return axios.get(`${base_url}${searchQuery}/${query}`)
}
const countNumber = ()=>{
    return axios.get(`${base_url}${count}`)
}
export {
    get_random, reset_db, find_friend, search, countNumber
}