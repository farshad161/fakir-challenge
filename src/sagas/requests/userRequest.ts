import axios, { AxiosResponse } from "axios";
import { Users } from '../../actions/index';

const url = 'https://jsonplaceholder.typicode.com/users';


export function requestGetUsers(): Promise<AxiosResponse<Users[]>> {
    return axios.get<Users[]>(url);

}