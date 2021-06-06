import api from './base/api';

export default class CharacterService {
    static async heroList(searchTerm, order) {
        const params = {
            nameStartsWith: searchTerm,
            orderBy: order
        }
        
        if (searchTerm === '') {
            const { data } = await api.get('v1/public/characters', {params: {orderBy: order}});
            return {
                copyright: {
                    text: data.copyright,
                    url: data.attribution
                },
                heroes: data.data.results
            }
        } else {
            const { data } = await api.get('v1/public/characters', {params});
            return {
                copyright: {
                    text: data.copyright,
                    url: data.attribution
                },
                heroes: data.data.results
            }
        }
    }

    static async heroListDetails(id) {
        const { data } = await api.get(`v1/public/characters/${id}`);
        return { info: data.data.results };
    }

    static async heroListComics(id) {
        const params = {
            orderBy: '-onsaleDate',
            limit: 10
        }

        const { data } = await api.get(`v1/public/characters/${id}/comics`, {params});
        return { comics: data.data.results }
    }

    static addFavorite(hero) {
        const favorites = JSON.parse(localStorage.getItem('heroesList')) || [];
        if(favorites.find(item => item.id === hero.id)) {
            return;
        } 
        favorites.push(hero);
        localStorage.setItem('heroesList', JSON.stringify(favorites));
    }

    static removeFavorite(hero) {
        const favorites = JSON.parse(localStorage.getItem('heroesList')) || [];
        const index = favorites.findIndex(item => item.id === hero.id);
        if(index >= 0) {
            favorites.splice(index, 1);
            localStorage.setItem('heroesList', JSON.stringify(favorites));
        }
    }

    static getFavorites() {
        return JSON.parse(localStorage.getItem('heroesList')) || [];
    }

    static isFavorite(hero) {
        const favorite = JSON.parse(localStorage.getItem('heroesList')) || [];
        const result = favorite.find(item => item.id === hero.id)
        return !!result;
    }
}