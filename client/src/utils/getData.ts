import axios from "axios";

const axiosBase = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}`,
});


export default async function getData(params: string, input?: unknown) {
    return new Promise(async (resolve, reject) => {
        const data = await axiosBase.get(`/${params}`).catch(err => {
            reject('error: ' + err);
        })
        if (data) {
            resolve(data.data);
        }
    });
}
