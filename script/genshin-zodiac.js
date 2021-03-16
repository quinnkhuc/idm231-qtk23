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

const help = document.getElementById('help');

const changeableContentDiv = document.getElementById('changeable-content-div');

const submit = document.getElementById('submit');

const audio = document.getElementById('audio');

//Add event listeners
aries.addEventListener('click', function(){
    whichCharacter('aries');
})
taurus.addEventListener('click', function(){
    whichCharacter('taurus');
})
gemini.addEventListener('click', function(){
    whichCharacter('gemini');
})
cancer.addEventListener('click', function(){
    whichCharacter('cancer');
})
leo.addEventListener('click', function(){
    whichCharacter('leo');
})
virgo.addEventListener('click', function(){
    whichCharacter('virgo');
})
libra.addEventListener('click', function(){
    whichCharacter('libra');
})
scorpio.addEventListener('click', function(){
    whichCharacter('scorpio');
})
sagittarius.addEventListener('click', function(){
    whichCharacter('sagittarius');
})
capricorn.addEventListener('click', function(){
    whichCharacter('capricorn');
})
aquarius.addEventListener('click', function(){
    whichCharacter('aquarius');
})
pisces.addEventListener('click', function(){
    whichCharacter('pisces');
})

help.addEventListener('click', function(){
    renderHelp();
    removeActiveClass()
    help.classList.add('active');
})

submit.addEventListener('click', checkValidDate);

//Function declarations
function emptyDiv(){
    while(changeableContentDiv.firstChild){
        changeableContentDiv.removeChild(changeableContentDiv.firstChild);
    }
}

function checkValidDate(){
    let birthday = new Date(document.getElementById('date').value)

    if(birthday.toString() == 'Invalid Date'){
        alert('You must enter a valid birthday!');
    }
    else{
        let day = birthday.getUTCDate();
        let month = birthday.getUTCMonth() + 1;
        userInfo(day, month);
    }
}

function userInfo(day, month){
    let sign = '';

    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        sign = "capricorn";
      } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        sign = "sagittarius";
      } else if ((month == 10 && day >= 24) || (month == 11 && day <= 21)) {
        sign = "scorpio";
      } else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {
        sign = "libra";
      } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        sign = "virgo";
      } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        sign = "leo";
      } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        sign = "cancer";
      } else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
        sign = "gemini";
      } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        sign = "taurus";
      } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        sign = "aries";
      } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        sign = "pisces";
      } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        sign = "aquarius";
      }

      whichCharacter(sign);
}

function whichCharacter(sign){
    let characterName = '';
    let dateRange = '';
    let imgSrc = '';
    let characterDescription = '';
    let audioSrc = '';
    
    emptyDiv();
    removeActiveClass();

    //Add new content to changeable-div
    switch(sign){
        case 'aries':
            aries.classList.add('active');

            characterName = 'Noelle';
            dateRange = 'March 21th - April 19th';
            imgSrc = 'images/genshin-zodiac/character-posters/noelle.jpg';
            characterDescription = 'Aries are willful, courageous, independent, and idealist. This represents Noelle greatly. Noelle has much greater dreams and ambitions than other maids in the Knights of Favonius. Just like everyone in the city of Mondstadt, she dreams of becoming a knight and donning the honored armor. Even if her skills are not enough to pass the rigorous selection trials, she still not gives up and keeps trying her hardest.';
            audioSrc = 'audio/noelle.mp3';
            
            addCharacterContent(imgSrc, dateRange, characterName, characterDescription, audioSrc);
            break;

        case 'taurus':
            taurus.classList.add('active');

            characterName = 'Diluc';
            dateRange = 'April 20th - May 20th';
            imgSrc = 'images/genshin-zodiac/character-posters/diluc.jpg';
            characterDescription = 'Taurus are reliable, practical, and responsible, and none other character in Genshin Impact represents a Taurus better than Diluc. As the wealthiest gentleman in Mondstadt, Diluc always presents himself as the epitome of perfection. But behind the courteous visage burns a zealous soul that has sworn to protect Mondstadt at all costs, allowing him to mercilessly vanquish all those who threaten his city.';
            audioSrc = 'audio/diluc.mp3';
            
            addCharacterContent(imgSrc, dateRange, characterName, characterDescription, audioSrc);
            break;

        case 'gemini':
            gemini.classList.add('active');

            characterName = 'Fischl';
            dateRange = 'May 21th - June 21th';
            imgSrc = 'images/genshin-zodiac/character-posters/fischl.jpg';
            characterDescription = "Geminis are gentle, curious, and adaptable. These are the traits that greatly represent Fischl. Fischl is a mysterious girl who travels with a night raven named Oz. She serves as an investigator in the Adventurers' Guild. Through her unique abilities, eccentric character, and hard work, Fischl has become a rising star among the Adventurers' Guild's investigators, earning the recognition of all.";
            audioSrc = 'audio/fischl.mp3';
                
            addCharacterContent(imgSrc, dateRange, characterName, characterDescription, audioSrc);
            break;
            
        case 'cancer':
            cancer.classList.add('active');

            characterName = 'Tartaglia';
            dateRange = 'June 22th - July 22th';
            imgSrc = 'images/genshin-zodiac/character-posters/tartaglia.jpg';
            characterDescription = 'Cancers are caring and protective, which all fit Tartaglia too well. He is self-confident, solipsistic, and thriving on the sensation of being alive. Tartaglia is extremely reliable at accomplishing the tasks given to him, no matter how difficult they may be. Towards those he cares about, he dedicates himself to them wholeheartedly. He cares deeply for his family and is completely loyal to the Tsaritsa.';
            audioSrc = 'audio/tartaglia.mp3';
                    
            addCharacterContent(imgSrc, dateRange, characterName, characterDescription, audioSrc);
            break;
        
        case 'leo':
            leo.classList.add('active');

            characterName = 'Amber';
            dateRange = 'July 23th - August 22th';
            imgSrc = 'images/genshin-zodiac/character-posters/amber.jpg';
            characterDescription = "Leos are cheerful, passionate, and outgoing, just like Amber. A righteous and accomplished knight, she fulfills her duties and does things by the Knights of Favonius handbook. She is charismatic and friendly, and she has no problem talking to strangers as if she's already acquainted with them. She is passionate in all things she does, be it when it comes to helping others or taking out hilichurl camps.";
            audioSrc = 'audio/amber.mp3';
                        
            addCharacterContent(imgSrc, dateRange, characterName, characterDescription, audioSrc);
            break;
        
        case 'virgo':
            virgo.classList.add('active');

            characterName = 'Ningguang';
            dateRange = 'August 23th - September 22th';
            imgSrc = 'images/genshin-zodiac/character-posters/ningguang.jpg';
            characterDescription = "Virgos are analytic, hard-working, and practical, and Ningguang is a perfect example of a typical Virgo. Ningguang is an entrepreneur with a great head on her shoulders. She started from the bottom and worked her way up to being one of the most powerful women in Liyue. She has bold ambitions, but she does not let them get in the way when the safety of Liyue is challenged.";
            audioSrc = 'audio/ningguang.mp3';
                            
            addCharacterContent(imgSrc, dateRange, characterName, characterDescription, audioSrc);
            break;

        case 'libra':
            libra.classList.add('active');

            characterName = 'Xingqiu';
            dateRange = 'September 23th - October 23th';
            imgSrc = 'images/genshin-zodiac/character-posters/xingqiu.jpg';
            characterDescription = 'Libras are diplomatic, gracious, social, and fair-minded, which are all the traits that Xingqiu possesses. Xingqiu is one of the most studious characters in the game. When he is first encountered, he is busy trying to find a book. While his main focus does seem to be on reading, he also is able to manage large business transactions with ease due to his calm demeanor and excellent bargaining skills.';
            audioSrc = 'audio/xingqiu.mp3';
                            
            addCharacterContent(imgSrc, dateRange, characterName, characterDescription, audioSrc);
            break;

        case 'scorpio':
            scorpio.classList.add('active');

            characterName = 'Keqing';
            dateRange = 'October 24th - November 21th';
            imgSrc = 'images/genshin-zodiac/character-posters/keqing.jpg';
            characterDescription = 'Scorpios are passionate, brave, determined, and ambitious, which are all Keqing’s notable traits. Keqing is a workaholic, demanding herself to work "ten times harder than the average human." She also has a strong sense of responsibility and will not stop until a task has been completed perfectly - and by her standards, that means everything related to that task is also resolved.';
            audioSrc = 'audio/keqing.mp3';
                            
            addCharacterContent(imgSrc, dateRange, characterName, characterDescription, audioSrc);
            break;

        case 'sagittarius':
            sagittarius.classList.add('active');

            characterName = 'Kaeya';
            dateRange = 'November 22th - December 21th';
            imgSrc = 'images/genshin-zodiac/character-posters/kaeya.jpg';
            characterDescription = 'Sagittarius are idealistic, unstoppable, generous, and open-minded, much like Kaeya. Kaeya is a confident and charming individual with a flair for the dramatic. He enjoys putting his enemies and allies into high-stress situations and challenging their values. He also seems to get a kick out of telling bald-faced lies, but this tendency becomes a talent when it comes to his role as the brains of the Knights of Favonius.';
            audioSrc = 'audio/kaeya.mp3';
                            
            addCharacterContent(imgSrc, dateRange, characterName, characterDescription, audioSrc);
            break;

        case 'capricorn':
            capricorn.classList.add('active');

            characterName = 'Zhongli';
            dateRange = 'December 22th - January 19th';
            imgSrc = 'images/genshin-zodiac/character-posters/zhongli.jpg';
            characterDescription = "Capricorns are responsible, discipline, and good-mannered. None other in Genshin Impact fits this description better than Zhongli. Zhongli is a character who is well versed in Liyue’s history and culture. He holds very philosophical ideas towards money and has great respect for Liyue's traditions. Despite being the Geo archon, Zhongli is extremely humble and deeply cares for his country.";
            audioSrc = 'audio/zhongli.mp3';
                            
            addCharacterContent(imgSrc, dateRange, characterName, characterDescription, audioSrc);
            break;

        case 'aquarius':
            aquarius.classList.add('active');

            characterName = 'Beidou';
            dateRange = 'January 20th - February 18th';
            imgSrc = 'images/genshin-zodiac/character-posters/beidou.jpg';
            characterDescription = 'Aquarius are independent, progressive, original, and rebellious, which are the exact traits of Beidou. Beidou is considered to be one of the strongest women in Liyue as she is the captain of the Crux Fleet. Children look up to Beidou for her strengths, and criminals fear her wrath. She is incredibly well-versed in survival but is also more than happy to sit down and have a drink with friends.';
            audioSrc = 'audio/beidou.mp3';
                            
            addCharacterContent(imgSrc, dateRange, characterName, characterDescription, audioSrc);
            break;

        case 'pisces':
            pisces.classList.add('active');

            characterName = 'Qiqi';
            dateRange = 'February 19th - March 20th';
            imgSrc = 'images/genshin-zodiac/character-posters/qiqi.jpg';
            characterDescription = 'Pisces are intuitive, gentle, compassionate, and sensitive. These pretty much describe Qiqi. Qiqi is extremely hard working, despite the fact that she is a zombie. She is great with herbs and is incredibly diligent when trying to find plants and has a notebook to keep up with her memories. Qiqi is innocent and is able to heal those around her even in the middle of a tough battle.';
            audioSrc = 'audio/qiqi.mp3';
                            
            addCharacterContent(imgSrc, dateRange, characterName, characterDescription, audioSrc);
            break;

        default:

    }
}

function addCharacterContent(imgSrc, dateRange, characterName, characterDescription, audioSrc){
    audio.src = audioSrc;
    audio.play();

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
    innerControlButtons.classList.add('control-buttons-list');

    const soundButton = document.createElement('button');
    soundButton.classList.add('sound-button');
    soundButton.classList.add('buttons');
    soundButton.classList.add('control-buttons');
    soundButton.classList.add('button-with-gap');
    soundButton.addEventListener('click', () => {
        if(audio.paused){
            audio.play();
        }
        else{
            audio.pause();
        }
    })

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
    innerControlButtons.appendChild(soundButton);
    contentDiv.appendChild(h1);
    contentDiv.appendChild(date);
    contentDiv.appendChild(description);
}

function renderHelp(){
    emptyDiv();

    const innerDiv = document.createElement('div');
    innerDiv.classList.add('inner-div')

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-div');

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Help';
    h1.classList.add('character-h1');

    const description = document.createElement('p');
    description.innerHTML = 'Each zodiac sign shares some special traits with a character in Genshin Impact. To find out which character are you, either click on a character’s avatar, or enter a valid birthday in the form of mm/dd/yyyy and click submit (or hit Return/Enter).';
    description.setAttribute('id', 'help-description');

    const img = document.createElement('img');
    img.src = 'images/genshin-zodiac/character-posters/paimon.jpg';

    const innerControlButtons = document.createElement('div');
    innerControlButtons.classList.add('control-buttons-list');

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
    contentDiv.appendChild(description);
}

function backToMain() {
    emptyDiv();
    removeActiveClass();
    audio.pause();

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
    submit.addEventListener('click', checkValidDate);

    changeableContentDiv.appendChild(h1);
    changeableContentDiv.appendChild(h2);
    changeableContentDiv.appendChild(inputDiv);
    inputDiv.appendChild(date);
    inputDiv.appendChild(submit);
}

function removeActiveClass(){
    help.classList.remove('active');

    aries.classList.remove('active');
    taurus.classList.remove('active');
    gemini.classList.remove('active');
    cancer.classList.remove('active');
    leo.classList.remove('active');
    virgo.classList.remove('active');
    libra.classList.remove('active');
    scorpio.classList.remove('active');
    sagittarius.classList.remove('active');
    capricorn.classList.remove('active');
    aquarius.classList.remove('active');
    pisces.classList.remove('active');
}