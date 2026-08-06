import axios from 'axios'
import { API_URL, API_KEY, DEBUG } from './config'

axios.defaults.headers.common['x-api-key'] = API_KEY

export async function getTasks() {
  var res = await axios.get(API_URL + '/tasks?key=' + API_KEY)
  if (DEBUG) console.log('tasks', res.data, 'key used:', API_KEY)
  return res.data
}

export async function login(email, password) {
  console.log('login with', email, password)
  const res = await axios.post(API_URL + '/login', { email, password })
  localStorage.setItem('token', res.data.token)
  localStorage.setItem('password', password) // pour le remember me
  return res.data
}

export async function deleteTask(id) {
  return axios.get(API_URL + '/tasks/delete/' + id)
}
