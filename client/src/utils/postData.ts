import axios from "axios";

const axiosBase = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}`,
});


export default async function postData(params: string, data: unknown) {
    return new Promise(async (resolve, reject) => {
        const output = await axiosBase.post(`/${params}`, data).catch(err => {
            reject('error: ' + err);
        })
        if (output) {
            resolve(output.data);
        }
    });
}
