// Product Data for PitStop Arena
const sliderData = [
    {
        id: 1,
        title: "Tracks Collection",
        text: "Legendary race circuits from around the world",
        image: "img/tracks_top.jpg",
        category: "tracks"
    },
    {
        id: 2,
        title: "Teams Collection",
        text: "Iconic F1 team posters and memorabilia",
        image: "img/teams_top.jpg",
        category: "teams"
    },
    {
        id: 3,
        title: "Drivers Collection",
        text: "Celebrate the greatest drivers in F1 history",
        image: "img/drivers_top.jpg",
        category: "drivers"
    }
];

const productsData = [
    // Drivers
    {
        id: 1,
        title: "Lewis Hamilton - 7x Champion",
        price: 49.99,
        image: "img/cars/drivers/hamilton1.jpg",
        category: "drivers"
    },
    {
        id: 2,
        title: "Max Verstappen - Red Bull Racing",
        price: 54.99,
        image: "img/cars/drivers/verstappen1.jpg",
        category: "drivers"
    },
    {
        id: 3,
        title: "Fernando Alonso - Legend",
        price: 44.99,
        image: "img/cars/drivers/alonso1.jpg",
        category: "drivers"
    },
    {
        id: 4,
        title: "Ayrton Senna - Icon",
        price: 59.99,
        image: "img/cars/drivers/senna1.jpg",
        category: "drivers"
    },
    {
        id: 5,
        title: "Michael Schumacher - 7x Champion",
        price: 64.99,
        image: "img/cars/drivers/schumacher1.jpg",
        category: "drivers"
    },
    {
        id: 6,
        title: "George Russell - Mercedes",
        price: 42.99,
        image: "img/cars/drivers/russell1.jpg",
        category: "drivers"
    },
    {
        id: 7,
        title: "Kimi Räikkönen - Iceman",
        price: 47.99,
        image: "img/cars/drivers/raikkonen1.jpg",
        category: "drivers"
    },
    {
        id: 8,
        title: "Sebastian Vettel - 4x Champion",
        price: 52.99,
        image: "img/cars/drivers/vettel1.jpg",
        category: "drivers"
    },
    // Teams
    {
        id: 9,
        title: "Red Bull Racing - RB19",
        price: 55.99,
        image: "img/cars/teams/redbull1.jpg",
        category: "teams"
    },
    {
        id: 10,
        title: "Ferrari - Scuderia Ferrari",
        price: 57.99,
        image: "img/cars/teams/ferrari1.jpg",
        category: "teams"
    },
    {
        id: 11,
        title: "Mercedes-AMG Petronas",
        price: 56.99,
        image: "img/cars/teams/mercedes1.jpg",
        category: "teams"
    },
    {
        id: 12,
        title: "McLaren Racing",
        price: 51.99,
        image: "img/cars/teams/mclaren1.jpg",
        category: "teams"
    },
    {
        id: 13,
        title: "Alpine F1 Team",
        price: 48.99,
        image: "img/cars/teams/alpine1.jpg",
        category: "teams"
    },
    {
        id: 14,
        title: "Williams Racing",
        price: 45.99,
        image: "img/cars/teams/williams1.jpg",
        category: "teams"
    },
    // Tracks
    {
        id: 15,
        title: "Monaco Grand Prix",
        price: 62.99,
        image: "img/cars/tracks/monaco1.jpg",
        category: "tracks"
    },
    {
        id: 16,
        title: "Silverstone Circuit",
        price: 58.99,
        image: "img/cars/tracks/silverstone1.jpg",
        category: "tracks"
    },
    {
        id: 17,
        title: "Spa-Francorchamps",
        price: 60.99,
        image: "img/cars/tracks/spa1.jpg",
        category: "tracks"
    }
];

// Export data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sliderData, productsData };
}
