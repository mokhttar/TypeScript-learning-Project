"use strict";
// const ReviewStar = document.getElementById("Reviews");
const UserBack = document.querySelector(".UserBack");
const cardContainer = document.querySelector(".cardContainer");
const reviews = [
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
const properties = [
    {
        image: "",
        title: "test Website",
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
function DisplayProprities(properties) {
    properties.map((element, index) => {
        const Card = document.createElement("div");
        Card.classList.add("card");
        const image = document.createElement("img");
        image.src = element.image;
    });
}
function addStars(reviews) {
    let somme = 0;
    for (let i = 0; i < reviews.length; i++) {
        somme = somme + reviews[i].stars;
    }
    return somme;
}
function checkStatus(me) {
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
