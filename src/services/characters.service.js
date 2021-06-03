import api from './base/api';

const charactersApi = async (searchTerm, order) => {
    const params = {
        nameStartsWith: searchTerm,
        orderBy: order
    }
    
    if (searchTerm === '') {
        const {data} = await api.get('v1/public/characters', {params: {orderBy: order}});
        return {
            copyright: {
                text: data.copyright,
                url: data.attribution
            },
            heroes: data.data.results
        }
    } else {
        const {data} = await api.get('v1/public/characters', {params});
        return {
            copyright: {
                text: data.copyright,
                url: data.attribution
            },
            heroes: data.data.results
        }
    }
};

export default charactersApi;
