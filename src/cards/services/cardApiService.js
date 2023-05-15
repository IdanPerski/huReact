import axios from "axios";

const apiUrl = "http://localhost:8181";

export const getFromDatabase = async (getData, errorCatch) => {
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
export const getMyCards = () =>
  getFromDatabase(
    () => axios.get(`${apiUrl}/cards/my-cards`),
    "getMyCards error",
  );
export const deleteCard = (cardId) =>
  getFromDatabase(
    () => axios.delete(`${apiUrl}/cards/${cardId}`),
    "deleteCard error",
  );

export const createCard = (card) =>
  getFromDatabase(
    () => axios.post(`${apiUrl}/cards/`, card),
    "createCard error",
  );

export const editCard = (cardId, normalaizedCard) =>
  getFromDatabase(
    () => axios.put(`${apiUrl}/cards/${cardId}`, normalaizedCard),
    "editCard error",
  );

export const getCard = (cardId) =>
  getFromDatabase(
    () => axios.get(`${apiUrl}/cards/${cardId}`),
    "getCard error",
  );
// export const getSearchedCard = (cardId) =>
//   getFromDatabase(
//     () => axios.get(`${apiUrl}/cards/${cardId}`),
//     "getSearchedCard error",
//   );

//_________for the searchBar___________________
export const getSearchedCard = (cardIds) =>
  getFromDatabase(
    () => Promise.all(cardIds.map((id) => axios.get(`${apiUrl}/cards/${id}`))),
    "getCards error",
  );

export const changeLikeStatus = async (cardId) => {
  try {
    const { data } = await axios.patch(`${apiUrl}/cards/${cardId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

/////////short changeLikeStatus////////
/*  export const changeLikeStatus = ((cardId) =>
    getFromDatabase(
      () => axios.patch(`${apiUrl}/cards/${cardId}`), // wrap axios.get in a function
      "changeLikeStatus error",
    ); */
/* 

///////////////////////////////////////////////


//_________for the searchBar___________________
export const getCards = (cardIds) =>
  getFromDatabase(
    () => Promise.all(cardIds.map(id => axios.get(`${apiUrl}/cards/${id}`))),
    "getCards error",
  );





export const getMyCards = async () => {
  console.log("get my cards");
  try {
    const response = await axios.get(`${apiUrl}/cards/my-cards`);
    const data = response.data;
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const deleteCard = async (cardId) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/cards/${cardId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getCard = async (cardId) => {
  try {
    const { data } = await axios.get(`${apiUrl}/cards/${cardId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const createCard = async (card) => {
  try {
    const { data } = await axios.post(`${apiUrl}/cards/`, card);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const editCard = async (cardId, normalaizedCard) => {
  try {
    const { data } = await axios.put(
      `${apiUrl}/cards/${cardId}`,
      normalaizedCard
    );
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15



// export const getCard = async (cardId) => {
//   try {
//     const { data } = await axios.get(`${apiUrl}/cards/${cardId}`);
//     return data;
//   } catch (error) {
//     return Promise.reject(error.message);
//   }
// };

// export const getCards = async () => {
//   try {
//     const { data } = await axios.get(`${apiUrl}/cards`);

//     return data;
//   } catch (error) {
//     console.log("getCards error");
//     return Promise.reject(error.message);
//   }
// };

// export const getMyCards = async () => {
//   try {
//     const { data } = await axios.get(`${apiUrl}/cards/my-cards`);

//     return data;
//   } catch (error) {
//     console.log("getMyCards error");
//     return Promise.reject(error.message);
//   }
// };

// export const createCard = async (card) => {
//   try {
//     const { data } = await axios.post(`${apiUrl}/cards/`, card);
//     return data;
//   } catch (error) {
//     return Promise.reject(error.message);
//   }
// };
/////////short createCard////////

/* export const editCard = async (cardId, normalaizedCard) => {
  try {
    const { data } = await axios.put(
      `${apiUrl}/cards/${cardId}`,
      normalaizedCard,
    );
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
}; */
