const projectsContainer = document.querySelector(".projects");

const projectInformation = [
    {
        "title": "CSM",
        "Para1": "A concept site about a museum and its options. It's made mostly static with some dynamic areas - and a booking page done without any JS.",
        "Para2": "This site was my second project - and was playground for vanilla HTML and CSS",
        "Color": "#2B0606", 
        "src" : "https://laughing-edison-5ee172.netlify.app",
        "img" : "../assets/CSM-Backgrop.jpg",
        "txtColor": "#F88787"
    },
    {
        "title": "Anime Facts",
        "Para1": "A quick demo of pulling through API - in form of a Anime Facts site. This was a API playground to learn how to fetch content",
        "Para2": "If the API is down - let me know and ill have it up and running in no time!",
        "Color": "#0C3601", 
        "src" : "https://sharp-thompson-c35ea2.netlify.app",
        "img" : "../assets/Anime-Facts-Backdrop.jpg",
        "txtColor": "#9BFB83"
    },
    {
        "title": "Westie Addict",
        "Para1": "Blog site with wordpress integration - Filler posts but can be developed into a proper Blog. - Might already have been!",
        "Para2": "This is the latest Project and was my Exam - integrating Wordpress and getting a simple yet, effective design!",
        "Color": "#551313", 
        "src" : "https://jocular-torte-76e22b.netlify.app",
        "img" : "../assets/Blog-backdrop.png",
        "txtColor": "#E9AAAA"
    },
    {
        "title": "Gamehub",
        "Para1": "A concept site where gamers can gather - sell and buy used and new games.",
        "Para2": "Highly community driven to share games - instead of buying new ones over and over. - This was also hooked up to Wordpress as a REST API.",
        "Color": "#331A3F", 
        "src" : "https://peaceful-ritchie-993224.netlify.app",
        "img" : "../assets/Gamehub-backdrop.png",
        "txtColor": "#9F89F8"
    }
];


function getProjects () {
    projectsContainer.innerHTML = "";
    projectInformation.forEach(project => {
        let title = project.title;
        let pOne = project.Para1;
        let pTwo = project.Para2;
        let color = project.Color;
        let src = project.src;
        let img = project.img;
        let txtColor = project.txtColor;
        let finishedContent = "";
        if (pTwo) {
            finishedContent = 
                `<p>${pOne}</p>
                <p>${pTwo}</p>`
        } else {
            finishedContent = `<p>${pOne}</p>`
        }

        
        projectsContainer.innerHTML += `
        <div class="cards" style="
            background-color:${color}; 
            background-image:url(${img});
            color: ${txtColor};
            ">
            <div class="max-w">
                <h2>${title}</h2>
                ${finishedContent}
                <a href="${src}" style="
                color: ${txtColor};
                ">View Page</a>
            </div>
        </div>

        `
    });
}

getProjects();
