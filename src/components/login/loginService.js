import { fetch, post } from '../../utils/httpUtil';
const BASE_URL = "xyz";
const loginService = {
    login: (payload) => {
        return post(BASE_URL + `/login`, payload);
    },
}
export default loginService;