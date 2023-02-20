import axios from "axios";

const axiosBase = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}`,
});

export default async function getDataWithParams(action: string, params: unknown) {
    return new Promise(async (resolve, reject) => {
        const data = await axiosBase.get(`/${action}/${params}`).catch(err => {
            reject('error: ' + err);
        })
        if (data) {
            resolve(data.data);
        }
    });
}
