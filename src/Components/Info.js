// Movie Covers
import img_1 from '../Images/Brave_Hearth.jpg'
import img_2 from '../Images/Children_Men.jpg'
import img_3 from '../Images/City_of_god.jpg'
import img_4 from '../Images/Code_inigma.jpg'
import img_5 from '../Images/GoneGirl.jpg'
import img_6 from '../Images/Haunted_house.jpg'
import img_7 from '../Images/Idiots.jpg'
import img_8 from '../Images/Interstellar.jpg'
import img_9 from '../Images/knives_out.jpg'
import img_10 from '../Images/OldBoy.jpg'
import img_11 from '../Images/Shutter_island.jpg'
import img_12 from '../Images/The_room.jpg'
import img_13 from '../Images/Velocipastor.jpg'
import img_14 from '../Images/Waking_life.jpg'
import img_15 from '../Images/yeti.jpg'

// Portraits
import portrait_alex from '../Images/Portraits/portrait_alex.png'
import portrait_diogo from '../Images/Portraits/portrait_diogo.png'
import portrait_eduarda from '../Images/Portraits/portrait_eduarda.png'
import portrait_gripe from '../Images/Portraits/portrait_gripe.png'
import portrait_ianis from '../Images/Portraits/portrait_ianis.png'
import portrait_maguz from '../Images/Portraits/portrait_maguz.png'
import portrait_marina from '../Images/Portraits/portrait_marina.png'
import portrait_matinhos from '../Images/Portraits/portrait_matinhos.png'
import portrait_minibix from '../Images/Portraits/portrait_minibix.png'
import portrait_patrao from '../Images/Portraits/portrait_patrao.png'
import portrait_pimentel from '../Images/Portraits/portrait_pimentel.png'
import portrait_ramalho from '../Images/Portraits/portrait_ramalho.png'
import portrait_rodnog from '../Images/Portraits/portrait_rodnog.png'
import portrait_sergio from '../Images/Portraits/portrait_sergio.png'
import portrait_vegui from '../Images/Portraits/portrait_vegui.png'

// Array containing all movies info
const Info = [
    {
        id:  1,
        title: "Braveheart",
        coverImg: img_1,
        year: 1995,
        moviePicker: "Diogo Pinto",
        profilePic: portrait_diogo,
        genres: "Biography, History, War",
        duration: "2h58m",
        rate: 8.4,
        rateRT: "75%",
        rateMT: 68,
        trailer: "https://www.youtube.com/watch?v=wj0I8xVTV18"
    },
    {
        id:  2,
        title: "Children Of Men",
        coverImg: img_2,
        year: 2006,
        moviePicker: "Quim",
        profilePic: portrait_maguz,
        genres: "Action, Sci-Fi, Thriller",
        duration: "1h49m",
        rate: 7.9,
        rateRT: "92%",
        rateMT: 84,
        trailer: "https://www.youtube.com/watch?v=2VT2apoX90o"
    },
    {
        id:  3,
        title: "City Of God",
        coverImg: img_3,
        year: 2002,
        moviePicker: "RodNog",
        profilePic: portrait_rodnog,
        genres: "Crime, Drama",
        duration: "2h10m",
        rate: 8.6,
        rateRT: "91%",
        rateMT: 79,
        trailer: "https://www.youtube.com/watch?v=dcUOO4Itgmw"
    },
    {
        id:  4,
        title: "The Imitation Game",
        coverImg: img_4,
        year: 2014,
        moviePicker: "Conceição",
        profilePic: portrait_patrao,
        genres: "Biography, Thriller, War",
        duration: "1h54m",
        rate: 8.0,
        rateRT: "90%",
        rateMT: 71, 
        trailer: "https://www.youtube.com/watch?v=nuPZUUED5uk"
    },
    {
        id:  5,
        title: "Gone Girl",
        coverImg:img_5,
        year: 2014,
        moviePicker: "Sérgio",
        profilePic: portrait_sergio,
        genres: "Drama, Mistery, Thriller",
        duration: "2h29m",
        rate: 8.0,
        rateRT: "88%",
        rateMT: 79,
        trailer: "https://www.youtube.com/watch?v=0VGD_jLyE9Y"
    },
    {
        id:  6,
        title: "A Haunted House",
        coverImg: img_6,
        year: 2013,
        moviePicker: "Ianis",
        profilePic: portrait_ianis,
        genres: "Comedy, Fantasy, Horror",
        duration: "1h26m",
        rate: 5.0,
        rateRT: "9%",
        rateMT: 20,
        trailer: "https://www.youtube.com/watch?v=J50vA5VLR6k"
    },
    {
        id:  7,
        title: "3 Idiots",
        coverImg: img_7,
        year: 2009,
        moviePicker: "Eduarda",
        profilePic: portrait_eduarda,
        genres: "Comedy, Drama",
        duration: "2h50m",
        rate: 8.4,
        rateRT: "100%",
        rateMT: 67,
        trailer: "https://www.youtube.com/watch?v=K0eDlFX9GMc"
    },
    {
        id:  8,
        title: "Interstellar",
        coverImg: img_8,
        year: 2014,
        moviePicker: "Minibix",
        profilePic: portrait_minibix,
        genres: "Adventure, Drama, Sci-Fi",
        duration: "2h49m",
        rate: 8.6,
        rateRT: "72%",
        rateMT: 74,
        trailer: "https://www.youtube.com/watch?v=Hd45707pEDI"
    },
    {
        id:  9,
        title: "Knives Out",
        coverImg: img_9,
        year: 2019,
        moviePicker: "Marina",
        profilePic: portrait_marina,
        genres: "Comedy, Crime, Drama, Thriller",
        duration: "2h10m",
        rate: 7.9,
        rateRT: "97%",
        rateMT: 82,
        trailer: "https://www.youtube.com/watch?v=xi-1NchUqMA"
    },
    {
        id:  10,
        title: "OldBoy",
        coverImg: img_10,
        year: 2003,
        moviePicker: "Alex",
        profilePic: portrait_alex,
        genres: "Action, Drama, Thriller",
        duration: "2h",
        rate: 8.4,
        rateRT: "82%",
        rateMT: 77,
        trailer: "https://www.youtube.com/watch?v=vdQfLoMh1N0"
    },
    {
        id:  11,
        title: "Shutter Island",
        coverImg: img_11,
        year: 2010,
        moviePicker: "Jocki",
        profilePic: portrait_pimentel,
        genres: "Mystery, Thriller",
        duration: "2h18m",
        rate: 8.2,
        rateRT: "68%",
        rateMT: 63,
        trailer: "https://www.youtube.com/watch?v=v8yrZSkKxTA"
    },
    {
        id:  12,
        title: "The Room",
        coverImg: img_12,
        year: 2003,
        moviePicker: "Ramalho",
        profilePic: portrait_ramalho,
        genres: "Drama",
        duration: "1h39m",
        rate: 3.6,
        rateRT: "26%",
        rateMT: 9,
        trailer: "https://www.youtube.com/watch?v=9-dIdFXeFhs"
    },
    {
        id:  13,
        title: "The Velocipastor",
        coverImg: img_13,
        year: 2018,
        moviePicker: "Vegui",
        profilePic: portrait_vegui,
        genres: "Action, Comedy, Horror",
        duration: "1h15m",
        rate: 5.0,
        rateRT: "61%",
        rateMT: 100,
        trailer: "https://www.youtube.com/watch?v=7Nyb0GqAjKM"
    },
    {
        id:  14,
        title: "Waking Life",
        coverImg: img_14,
        year: 2001,
        moviePicker: "Gripe",
        profilePic: portrait_gripe,
        genres: "Animation, Drama, Fantasy",
        duration: "1h39m",
        rate: 7.7,
        rateRT: "80%",
        rateMT: 83,
        trailer: "https://www.youtube.com/watch?v=uk2DeTet98o"
    },
    {
        id:  15,
        title: "Yeti: Curse of the Snow Demon",
        coverImg: img_15,
        year: 2008,
        moviePicker: "Matinhos",
        profilePic: portrait_matinhos,
        genres: "Action, Horror, Thriller",
        duration: "1h27m",
        rate: 3.3,
        rateRT: "0%",
        rateMT: 100,
        trailer: "https://www.youtube.com/watch?v=slyh9Lmy-2w"
    }
]   

export default Info;