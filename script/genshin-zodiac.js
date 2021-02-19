//Bind HTML elements to JS variables
const aries = document.getElementById('aries');
const taurus = document.getElementById('taurus');
const gemini = document.getElementById('gemini');
const cancer = document.getElementById('cancer');
const leo = document.getElementById('leo');
const virgo = document.getElementById('virgo');
const libra = document.getElementById('libra');
const scorpio = document.getElementById('scorpio');
const sagittarius = document.getElementById('sagittarius');
const capricorn = document.getElementById('capricorn');
const aquarius = document.getElementById('aquarius');
const pisces = document.getElementById('pisces');

const changeableContentDiv = document.getElementById('changeable-content-div');

//Add event listeners
aries.addEventListener('click', function(){
    userClick('aries');
})
taurus.addEventListener('click', function(){
    userClick('taurus');
})
gemini.addEventListener('click', function(){
    userClick('gemini');
})
cancer.addEventListener('click', function(){
    userClick('cancer');
})
leo.addEventListener('click', function(){
    userClick('leo');
})
virgo.addEventListener('click', function(){
    userClick('virgo');
})
libra.addEventListener('click', function(){
    userClick('libra');
})
scorpio.addEventListener('click', function(){
    userClick('scorpio');
})
sagittarius.addEventListener('click', function(){
    userClick('sagittarius');
})
capricorn.addEventListener('click', function(){
    userClick('capricorn');
})
aquarius.addEventListener('click', function(){
    userClick('aquarius');
})
pisces.addEventListener('click', function(){
    userClick('pisces');
})

//Function declarations
function emptyDiv(){
    while(changeableContentDiv.firstChild){
        changeableContentDiv.removeChild(changeableContentDiv.firstChild);
    }
}

function userClick(zodiacId){
    let characterName = '';
    let dateRange = '';
    let imgSrc = '';
    let characterDescription = '';
    
    emptyDiv();

    //Add new content to changeable-div
    switch(zodiacId){
        case 'aries':
            characterName = 'Noelle';
            dateRange = 'March 20th - April 19th';
            imgSrc = 'images/genshin-zodiac/character-posters/noelle.jpg';
            characterDescription = 'Aries are willful, courageous, independent, and idealist. This represents Noelle greatly. Noelle has much greater dreams and ambitions than other maids in the Knights of Favonius. Just like everyone in the city of Mondstadt, she dreams of becoming a knight and donning the honored armor. Even if her skills are not enough to pass the rigorous selection trials, she still not gives up and keeps trying her hardest.'
            
            addNewContent(imgSrc, dateRange, characterName, characterDescription);
            break;

        case 'taurus':
            characterName = 'Diluc';
            dateRange = 'April 20th - May 19th';
            imgSrc = 'images/genshin-zodiac/character-posters/diluc.jpg';
            characterDescription = 'Taurus are reliable, practical, and responsible, and none other character in Genshin Impact represents a Taurus better than Diluc. As the wealthiest gentleman in Mondstadt, Diluc always presents himself as the epitome of perfection. But behind the courteous visage burns a zealous soul that has sworn to protect Mondstadt at all costs, allowing him to mercilessly vanquish all those who threaten his city.'
            
            addNewContent(imgSrc, dateRange, characterName, characterDescription);
            break;

        case 'gemini':
            characterName = 'Fischl';
            dateRange = 'May 20th - June 19th';
            imgSrc = 'images/genshin-zodiac/character-posters/fischl.jpg';
            characterDescription = "Geminis are gentle, curious, and adaptable. These are the traits that greatly represent Fischl. Fischl is a mysterious girl who travels with a night raven named Oz. She serves as an investigator in the Adventurers' Guild. Through her unique abilities, eccentric character, and hard work, Fischl has become a rising star among the Adventurers' Guild's investigators, earning the recognition of all."
                
            addNewContent(imgSrc, dateRange, characterName, characterDescription);
            break;

        case 'gemini':
            characterName = 'Fischl';
            dateRange = 'May 20th - June 19th';
            imgSrc = 'images/genshin-zodiac/character-posters/fischl.jpg';
            characterDescription = "Geminis are gentle, curious, and adaptable. These are the traits that greatly represent Fischl. Fischl is a mysterious girl who travels with a night raven named Oz. She serves as an investigator in the Adventurers' Guild. Through her unique abilities, eccentric character, and hard work, Fischl has become a rising star among the Adventurers' Guild's investigators, earning the recognition of all."
                
            addNewContent(imgSrc, dateRange, characterName, characterDescription);
            break;
            
        case 'cancer':
            characterName = 'Tartaglia';
            dateRange = 'June 20th - July 19th';
            imgSrc = 'images/genshin-zodiac/character-posters/tartaglia.jpg';
            characterDescription = 'Cancers are caring and protective, which all fit Tartaglia too well. He is self-confident, solipsistic, and thriving on the sensation of being alive. Tartaglia is extremely reliable at accomplishing the tasks given to him, no matter how difficult they may be. Towards those he cares about, he dedicates himself to them wholeheartedly. He cares deeply for his family and is completely loyal to the Tsaritsa.'
                    
            addNewContent(imgSrc, dateRange, characterName, characterDescription);
            break;
        
        case 'leo':
            characterName = 'Amber';
            dateRange = 'July 20th - August 19th';
            imgSrc = 'images/genshin-zodiac/character-posters/amber.jpg';
            characterDescription = "Leos are cheerful, passionate, and outgoing, just like Amber. A righteous and accomplished knight, she fulfills her duties and does things by the Knights of Favonius handbook. She is charismatic and friendly, and she has no problem talking to strangers as if she's already acquainted with them. She is passionate in all things she does, be it when it comes to helping others or taking out hilichurl camps."
                        
            addNewContent(imgSrc, dateRange, characterName, characterDescription);
            break;
        
        case 'virgo':
            characterName = 'Ningguang';
            dateRange = 'August 20th - September 19th';
            imgSrc = 'images/genshin-zodiac/character-posters/ningguang.jpg';
            characterDescription = "Virgos are analytic, hard-working, and practical, and Ningguang is a perfect example of a typical Virgo. Ningguang is an entrepreneur with a great head on her shoulders. She started from the bottom and worked her way up to being one of the most powerful women in Liyue. She has bold ambitions, but she does not let them get in the way when the safety of Liyue is challenged."
                            
            addNewContent(imgSrc, dateRange, characterName, characterDescription);
            break;

        case 'libra':
            characterName = 'Xingqiu';
            dateRange = 'September 20th - October 19th';
            imgSrc = 'images/genshin-zodiac/character-posters/xingqiu.jpg';
            characterDescription = 'Libras are diplomatic, gracious, social, and fair-minded, which are all the traits that Xingqiu possesses. Xingqiu is one of the most studious characters in the game. When he is first encountered, he is busy trying to find a book. While his main focus does seem to be on reading, he also is able to manage large business transactions with ease due to his calm demeanor and excellent bargaining skills.'
                            
            addNewContent(imgSrc, dateRange, characterName, characterDescription);
            break;

        case 'scorpio':
            characterName = 'Keqing';
            dateRange = 'October 20th - November 19th';
            imgSrc = 'images/genshin-zodiac/character-posters/keqing.jpg';
            characterDescription = 'Scorpios are passionate, brave, determined, and ambitious, which are all Keqing’s notable traits. Keqing is a workaholic, demanding herself to work "ten times harder than the average human." She also has a strong sense of responsibility and will not stop until a task has been completed perfectly - and by her standards, that means everything related to that task is also resolved.'
                            
            addNewContent(imgSrc, dateRange, characterName, characterDescription);
            break;

        case 'sagittarius':
            characterName = 'Kaeya';
            dateRange = 'November 20th - December 19th';
            imgSrc = 'images/genshin-zodiac/character-posters/kaeya.jpg';
            characterDescription = 'Sagittarius are idealistic, unstoppable, generous, and open-minded, much like Kaeya. Kaeya is a confident and charming individual with a flair for the dramatic. He enjoys putting his enemies and allies into high-stress situations and challenging their values. He also seems to get a kick out of telling bald-faced lies, but this tendency becomes a talent when it comes to his role as the brains of the Knights of Favonius.'
                            
            addNewContent(imgSrc, dateRange, characterName, characterDescription);
            break;

        case 'capricorn':
            characterName = 'Zhongli';
            dateRange = 'December 20th - January 19th';
            imgSrc = 'images/genshin-zodiac/character-posters/zhongli.jpg';
            characterDescription = "Capricorns are responsible, discipline, and good-mannered. None other in Genshin Impact fits this description better than Zhongli. Zhongli is a character who is well versed in Liyue’s history and culture. He holds very philosophical ideas towards money and has great respect for Liyue's traditions. Despite being the Geo archon, Zhongli is extremely humble and deeply cares for his country."
                            
            addNewContent(imgSrc, dateRange, characterName, characterDescription);
            break;

        case 'aquarius':
            characterName = 'Beidou';
            dateRange = 'January 20th - February 19th';
            imgSrc = 'images/genshin-zodiac/character-posters/beidou.jpg';
            characterDescription = 'Aquarius are independent, progressive, original, and rebellious, which are the exact traits of Beidou. Beidou is considered to be one of the strongest women in Liyue as she is the captain of the Crux Fleet. Children look up to Beidou for her strengths, and criminals fear her wrath. She is incredibly well-versed in survival but is also more than happy to sit down and have a drink with friends.'
                            
            addNewContent(imgSrc, dateRange, characterName, characterDescription);
            break;

        case 'pisces':
            characterName = 'Qiqi';
            dateRange = 'February 20th - March 19th';
            imgSrc = 'images/genshin-zodiac/character-posters/qiqi.jpg';
            characterDescription = 'Pisces are intuitive, gentle, compassionate, and sensitive. These pretty much describe Qiqi. Qiqi is extremely hard working, despite the fact that she is a zombie. She is great with herbs and is incredibly diligent when trying to find plants and has a notebook to keep up with her memories. Qiqi is innocent and is able to heal those around her even in the middle of a tough battle.'
                            
            addNewContent(imgSrc, dateRange, characterName, characterDescription);
            break;

        default:

    }

    function addNewContent(imgSrc, dateRange, characterName, characterDescription){
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('inner-div')

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content-div');

        const h1 = document.createElement('h1');
        h1.innerHTML = characterName;
        h1.classList.add('character-h1');

        const date = document.createElement('p');
        date.innerHTML = dateRange;
        date.classList.add('dateRange');

        const description = document.createElement('p');
        description.innerHTML = characterDescription;

        const img = document.createElement('img');
        img.src = imgSrc;

        const innerControlButtons = document.createElement('div');

        const exitButton = document.createElement('button');
        exitButton.addEventListener('click', function(){
            backToMain();
        });
        exitButton.classList.add('exit-button');
        exitButton.classList.add('buttons');
        exitButton.classList.add('control-buttons');

        changeableContentDiv.appendChild(innerDiv);
        innerDiv.appendChild(img);
        innerDiv.appendChild(contentDiv);
        contentDiv.appendChild(innerControlButtons);
        innerControlButtons.appendChild(exitButton);
        contentDiv.appendChild(h1);
        contentDiv.appendChild(date);
        contentDiv.appendChild(description);
    }
}

function backToMain() {
    emptyDiv();

    const h1 = document.createElement('h1');
    h1.innerHTML = 'GENSHIN ZODIAC';
    h1.classList.add('title');

    const h2 = document.createElement('h2');
    h2.innerHTML = "Which Genshin Impact character are you? Enter your birthday or click on any character's avatar to find out!";

    const inputDiv = document.createElement('div');
    inputDiv.setAttribute('id', 'input');

    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.setAttribute('id', 'date');

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('id', 'submit');
    submit.setAttribute('value', 'SUBMIT');

    changeableContentDiv.appendChild(h1);
    changeableContentDiv.appendChild(h2);
    changeableContentDiv.appendChild(inputDiv);
    inputDiv.appendChild(date);
    inputDiv.appendChild(submit);
}