import axios from "axios";

const axiosBase = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}`,
});


export default async function deleteData(params: string) {
    return new Promise(async (resolve, reject) => {
        const output = await axiosBase.delete(`/${params}`).catch(err => {
            console.log(err)
            reject('error: ' + err);
        })
        if (output) {
            console.log(output)
            resolve(output.data);
        }
    });
}
