import { useCallback, useMemo, useState } from "react";
import { useSnack } from "../../providers/SnackBarProvider";

import useAxios from "../../hooks/useAxios";
import { useUser } from "../../user/providers/UseProvider";
import {
  changeLikeStatus,
  createCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getMyCards,
} from "../services/cardApiService";
export default function useCards() {
  const [cards, setCards] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const snack = useSnack();
  const [card, setCard] = useState(null);
  const { user } = useUser();
  useAxios();

  const requestStatus = (loading, errorMessage, cards, card = null) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  const handleGetCards = async () => {
    setLoading(true);
    try {
      const data = await getCards();
      requestStatus(false, null, data);
      snack("success", "cards uploaded succsesfuly!");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleGetMyCards = async () => {
    setLoading(true);
    try {
      const data = await getMyCards();
      requestStatus(false, null, data);
      snack("success", "Your cards uploaded succsesfuly!");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleDeleteCard = async (cardId) => {
    try {
      setLoading(true);
      await deleteCard(cardId);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const handleGetCard = useCallback(async (cardId) => {
    setLoading(true);
    try {
      const data = await getCard(cardId);
      console.log(data);
      requestStatus(false, error, null, data);
      snack("success", "card uploaded succsesfuly!");
      return data;
    } catch (error) {
      requestStatus(false, error, null);
   
    }
  }, []);

  //handleUpdateCard
  const handleUpdateCard = useCallback(async (cardId, cardFromClient) => {
    try {
      setLoading(true);
      const card = await editCard(cardId, cardFromClient);
      requestStatus(false, null, null, card);
      snack("success", "The business card has been successfully updated");
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  //handleCreateCard
  const handleCreateCard = useCallback(async (cardFromClient) => {
    console.log("clicked");
    try {
      setLoading(true);
      const card = await createCard(cardFromClient);
      console.log(card);
      requestStatus(false, null, null, card);
      snack("success", "A new business card has been created");
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  //handleGetFavCards
  const handleGetFavCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      const favCards = cards.filter((card) => card.likes.includes(user.id));
      requestStatus(false, null, favCards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  //handleLikeCard
  const handleLikeCard = useCallback(async (cardId) => {
    try {
      const card = await changeLikeStatus(cardId);
      const { updatedCard, LikesBeforeUpdate, LikesAfterUpdate } = card;
      requestStatus(false, null, cards, updatedCard);
      if (LikesBeforeUpdate < LikesAfterUpdate) {
        snack("success", "The business card has been Liked");
      } else {
        snack("success", "like Card removed");
      }
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const value = useMemo(() => {
    return { isLoading, cards, card, error };
  }, [isLoading, cards, card, error]);

  return {
    value,
    handleGetCards,
    handleGetMyCards,
    handleDeleteCard,
    handleGetCard,
    handleUpdateCard,
    handleCreateCard,
    handleGetFavCards,
    handleLikeCard,
  };
}
