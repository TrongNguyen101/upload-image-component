import request from "../BaseURL";

export const post = async (path, data, option = {}) => {
    const response = await request.post(path, data, option);
    return response;
};