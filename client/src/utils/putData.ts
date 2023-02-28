import axios from "axios";

const axiosBase = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}`,
});

export default async function putData(action: string, input: any) {
    return new Promise(async (resolve, reject) => {
        const data = await axiosBase.put(`/${action}`, input).catch(err => {
            reject('error: ' + err);
        })
        if (data) {
            resolve(data.data);
        }
    });
}
