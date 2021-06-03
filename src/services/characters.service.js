import api from './base/api';

const charactersApi = async (searchTerm) => {
    const params = {
        nameStartsWith: searchTerm
    }
    if (searchTerm === '') {
        const {data} = await api.get('v1/public/characters');
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
