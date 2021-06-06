import { useState } from 'react';
import CharacterService from '../../services/character.service';

const useFavorite = () => {
  const [favoritedAmout, setFavoritedAmount] = useState(CharacterService.getFavorites().length);
  
  const addFavorite = (item) => {
    const favoriteList = CharacterService.getFavorites();
    if(favoriteList.length < 5) {
      CharacterService.addFavorite(item);
    }
    setFavoritedAmount(CharacterService.getFavorites().length);
  }

  const removeFavorite = (item) => {
    CharacterService.removeFavorite(item);
    setFavoritedAmount(CharacterService.getFavorites().length);
  }

  return { favoritedAmout, addFavorite, removeFavorite }
}

export default useFavorite;
