import axios from "axios";

const imgUpload = img => {
    let body = new FormData()
    body.set('key', '518904f9fbbbab10c862cd2d81c9e6d9')
    body.append('image', img)

    return axios({
        method: 'post',
        url: 'https://api.imgbb.com/1/upload',
        data: body
    });
};
export default (imgUpload)