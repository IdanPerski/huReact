import { useState, useCallback, useMemo } from "react";

import { login, signup } from "../services/usersApiService";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../providers/UseProvider";
import useAxios from "../../hooks/useAxios";
import normalizeUser from "../helpers/normalization/normalizeUser";

const useUsers = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { user, setUser, setToken } = useUser();

  useAxios();

  const requestStatus = useCallback(
    (loading, errorMessage, user = null) => {
      setLoading(loading);
      setUser(user);
      setError(errorMessage);
    },
    [setUser],
  );

  const handleLogin = useCallback(async (user) => {
    try {
      console.log(user, 35);
      const token = await login(user);
      console.log("awaitimg...");
      setTokenInLocalStorage(token);
      setToken(token);
      const userFromLocalStorage = getUser();
      requestStatus(false, null, userFromLocalStorage);
      navigate(ROUTES.CARDS);
    } catch (error) {
      console.log("catched error at handleLogin");
      requestStatus(false, error, null);
    }
  });

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
  }, [setUser]);

  const handleSignup = useCallback(
    async (userFromClient) => {
      try {
        const normalizedUser = normalizeUser(userFromClient);
        await signup(normalizedUser);
        await handleLogin({
          email: userFromClient.email,
          password: userFromClient.password,
        });
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [requestStatus, handleLogin],
  );
  /*
 
UPDATE USER
 
 const handleSignup = useCallback(
    async (userUpdate) => {
      try {
        const normalizedUser = normalizeUser(userUpdate);
        await signup(normalizedUser);
        await handleLogin({
          email: userUpdate.email,
          password: userUpdate.password,
        });
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [requestStatus, handleLogin],
  );


    //handleUpdateCard
  const handleUpdateCard = async (cardId, cardFromClient) => {
    try {
      setLoading(true);
      const card = await editCard(cardId, cardFromClient);
      requestStatus(false, null, null, card);
      snack("success", "The business card has been successfully updated");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  
  const handleUpdateUser = async (cardId, cardFromClient) =>{

  }
  
  */

  const value = useMemo(
    () => ({ isLoading, error, user }),
    [isLoading, error, user],
  );

  return {
    value,
    handleLogin,
    handleLogout,
    handleSignup,
  };
};

export default useUsers;
