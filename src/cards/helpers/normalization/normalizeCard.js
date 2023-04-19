const normalizeCard = (card) => {
  return {
    title: card.title,
    subtitle: card.subtitle,
    description: card.description,
    phone: card.phone,
    email: card.email,
    web: card.webUrl,
    image: {
      url: card.imageUrl,
      alt: card.imageAlt,
    },
    address: {
      state: card.state,
      country: card.country,
      city: card.city,
      street: card.street,
<<<<<<< HEAD
      houseNumber: Number(card.houseNumber),
      zip: Number(card.zip),
=======
      houseNumber: card.houseNumber,
      zip: card.zip,
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    },
  };
};

export default normalizeCard;
