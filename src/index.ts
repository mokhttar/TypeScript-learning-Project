// const ReviewStar = document.getElementById("Reviews");
const UserBack = document.querySelector(".UserBack");
const cardContainer = document.querySelector(".cardContainer");

const reviews: {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];

const me = {
  username: { firstname: "benhatta", lastName: "mokhttar" },
  isReturning: true,
};

const properties: {
  image: string;
  title: string;
  price: number;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: string;
  };
  contact: string;
  isAvailable: boolean;
}[] = [
  {
    image: "./assets/img1.jpeg",
    title: "Algeria Store ",
    price: 34,
    location: {
      firstLine: "no 23",
      city: "setif",
      code: 19000,
      country: "Algeria",
    },
    contact: "mokttarbenhatta@gmail.com",
    isAvailable: true,
  },
  {
    image: "./assets/img2.jpeg",
    title: "Canada Store",
    price: 34,
    location: {
      firstLine: "no 23",
      city: "setif",
      code: 19000,
      country: "Algeria",
    },
    contact: "mokttarbenhatta@gmail.com",
    isAvailable: true,
  },
  {
    image: "./assets/img3.jpeg",
    title: "France Store",
    price: 34,
    location: {
      firstLine: "no 23",
      city: "setif",
      code: 19000,
      country: "Algeria",
    },
    contact: "mokttarbenhatta@gmail.com",
    isAvailable: true,
  },
];

function DisplayProprities(
  properties: {
    image: string;
    title: string;
    price: number;
    location: {
      firstLine: string;
      city: string;
      code: number;
      country: string;
    };
    contact: string;
    isAvailable: boolean;
  }[]
) {
  properties.map((element, index) => {
    const Card = document.createElement("div");
    Card.classList.add("card");
    const image = document.createElement("img");
    image.classList.add("card-img");
    image.src = element.image;
    Card.appendChild(image);
    const title = document.createElement("h3");
    title.innerText = element.title;
    Card.appendChild(title);

    if (cardContainer) {
      cardContainer.appendChild(Card);
    } else {
      console.log("adding some bulshit");
    }
  });
}

function addStars(
  reviews: { name: string; stars: number; loyaltyUser: boolean; date: string }[]
): number {
  let somme = 0;
  for (let i = 0; i < reviews.length; i++) {
    somme = somme + reviews[i].stars;
  }

  return somme;
}

function checkStatus(me: {
  username: { firstname: string; lastName: string };
  isReturning: boolean;
}) {
  if (me.isReturning == true) {
    if (UserBack) {
      UserBack.innerHTML =
        "Welcome back, " + me.username.firstname + " " + me.username.lastName;
    }
  }
}
checkStatus(me);
DisplayProprities(properties);
// if (ReviewStar) {
//   ReviewStar.innerHTML = "Reviews: " + addStars(reviews);
// } else {
//   console.error('Element with ID "Reviews" not found.');
// }
