import axios from "axios";

const imgUpload = img => {
    let body = new FormData()
    body.set('key', '7f01c6e5ffb1ca09145f331bec070d87')
    body.append('image', img)

    return axios({
        method: 'post',
        url: 'https://api.imgbb.com/1/upload',
        data: body
    });
};
export default (imgUpload)