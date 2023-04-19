import { useCallback, useMemo, useState } from "react";
<<<<<<< HEAD
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
      requestStatus(false, null, cards, card);
      snack("success", "The business card has been Liked");
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

/* 
const getFromDatabase = async (getData, errorCatch) => {
  try {
    const { data } = await getData(); // call getData as a function
    return data;
  } catch (error) {
    console.log(errorCatch);
    return Promise.reject(error.message);
  }
};

export const getCards = () =>
  getFromDatabase(
    () => axios.get(`${apiUrl}/cards`), // wrap axios.get in a function
    "getCards error",
  );

*/

/* 
import { useState } from "react";
=======
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
import useAxios from "../../hooks/useAxios";
import { useSnack } from "../../providers/SnackbarProvider";
import { useUser } from "../../users/providers/UserProvider";
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
  const [card, setCard] = useState(null);
  useAxios();
  const snack = useSnack();
  const { user } = useUser();

  const requestStatus = (loading, errorMessage, cards, card = null) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

<<<<<<< HEAD
  const handleGetCards = async () => {
=======
  const handleGetCards = useCallback(async () => {
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    try {
      setLoading(true);
      const cards = await getCards();
      requestStatus(false, null, cards);
      snack("success", "All the cards are here!");
    } catch (error) {
      requestStatus(false, error, null);
    }
<<<<<<< HEAD
  };

  const handleGetMyCards = async () => {
=======
  }, []);

  const handleGetMyCards = useCallback(async () => {
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    try {
      setLoading(true);
      const cards = await getMyCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
<<<<<<< HEAD
  };

  const handleDeleteCard = async (cardId) => {
=======
  }, []);

  const handleDeleteCard = useCallback(async (cardId) => {
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    try {
      setLoading(true);
      await deleteCard(cardId);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
<<<<<<< HEAD
  };

  //handleGetCard
  const handleGetCard = async (cardId) => {
=======
  }, []);

  //handleGetCard
  const handleGetCard = useCallback(async (cardId) => {
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    try {
      setLoading(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
      return card;
    } catch (error) {
      requestStatus(false, error, null);
    }
<<<<<<< HEAD
  };

  //handleUpdateCard
  const handleUpdateCard = async (cardId, cardFromClient) => {
=======
  }, []);

  //handleUpdateCard
  const handleUpdateCard = useCallback(async (cardId, cardFromClient) => {
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    try {
      setLoading(true);
      const card = await editCard(cardId, cardFromClient);
      requestStatus(false, null, null, card);
      snack("success", "The business card has been successfully updated");
    } catch (error) {
      requestStatus(false, error, null);
    }
<<<<<<< HEAD
  };

  //handleLikeCard
  const handleLikeCard = async (cardId) => {
=======
  }, []);

  //handleLikeCard
  const handleLikeCard = useCallback(async (cardId) => {
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    try {
      const card = await changeLikeStatus(cardId);
      requestStatus(false, null, cards, card);
      snack("success", "The business card has been Liked");
    } catch (error) {
      requestStatus(false, error, null);
    }
<<<<<<< HEAD
  };
  //handleGetFavCards
  const handleGetFavCards = async () => {
=======
  }, []);
  //handleGetFavCards
  const handleGetFavCards = useCallback(async () => {
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    try {
      setLoading(true);
      const cards = await getCards();
      const favCards = cards.filter((card) => card.likes.includes(user.id));
      requestStatus(false, null, favCards);
    } catch (error) {
      requestStatus(false, error, null);
    }
<<<<<<< HEAD
  };

  //handleCreateCard
  const handleCreateCard = async (cardFromClient) => {
=======
  }, []);

  //handleCreateCard
  const handleCreateCard = useCallback(async (cardFromClient) => {
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    try {
      setLoading(true);
      const card = await createCard(cardFromClient);
      requestStatus(false, null, null, card);
      snack("success", "A new business card has been created");
    } catch (error) {
      requestStatus(false, error, null);
    }
<<<<<<< HEAD
  };

  return {
    card,
    cards,
    isLoading,
    error,
=======
  }, []);

  const value = useMemo(() => {
    return { isLoading, cards, card, error };
  }, [isLoading, cards, card, error]);

  return {
    value,
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
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
<<<<<<< HEAD

*/
=======
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
