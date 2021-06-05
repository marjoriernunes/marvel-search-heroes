import api from './base/api';

const characterDetails = async (id) => {
    const { data } = await api.get(`v1/public/characters/${id}`);
    return { info: data.data.results };
}

export default characterDetails;