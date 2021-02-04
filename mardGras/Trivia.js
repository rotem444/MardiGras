
let triviaAraay = `[
    {
        "question": "The Battle of New Orleans was the last major military conflict of which war?",
        "options":[
            "Civil War",
            "Revolutionary War",
            "War of 1812",
            "French-Indian War"
        ],
        "answer": 2
 
    },
    {
        "question": "when New-Orleans was founded?",
        "options":[
            "1718",
            "1950",
            "1986",
            "1770"
        ],
        "answer": 0
 
    },
    {
        "question": "Which of the following is NOT a nickname of the city of New Orleans?",
        "options":[
            "The Big Easy",
            "Crescent City",
            "The City that Care Forgot",
            "Cajun Capital"
        ],
        "answer": 3
 
    },
    {
        "question": "The famous stadium in New Orleans carries which name?",
        "options":[
            "Silver Dome",
            "Louisiana Arena",
            "Saints Stadium",
            "Superdome"
        ],
        "answer": 3
 
    },
    {
        "question": "While known internationally for this holiday, not many know the meaning of its name. What does the French term 'Mardi Gras' mean in English?",
        "options":[
            "Parade Season",
            "Tourist Trap",
            "Drunken Revelry",
            "Fat Tuesday"
        ],
        "answer": 3
 
    },
    {
        "question": "The French Quarter features a small park named Jackson Square, which bears a monument of this namesake. Who is this Jackson for whom Jackson Square is named?",
        "options":[
            "Stonewall Jackson",
            "Andrew Jackson",
            "Michael Jackson",
            "Hancock Lee Jackson"
        ],
        "answer": 1
 
    },
    {
        "question": "Which country ruled New Orleans when most of its French Quarter was developed?",
        "options":[
            "France",
            "Spain",
            "Germany",
            "United Kingdom"
        ],
        "answer": 1
 
    },
    {
        "question": "New Orleans is regarded to be the 'birthplace' of which musical medium?",
        "options":[
            "Jazz",
            "Blues",
            "Rap",
            "Soul"
        ],
        "answer": 3
 
    },
    {
        "question": "While most people have heard of gumbo (if not enjoyed a bowl of it), not many know of the word's origin. From which international region does the name originate?",
        "options":[
            "France",
            "Southeast Asia",
            "Mexico",
            "West Africa"
        ],
        "answer": 3
 
    },
    {
        "question": "Who is the current mayor of New Orleans?",
        "options":[
            "Barack Obama",
            "LaToya Cantrell",
            "Donald Trump",
            "yuval hamebolbal"
        ],
        "answer": 2
 
    }
    
 
 ]`
 triviaAraay = JSON.parse(triviaAraay)
 let container = $(".container");
 
 let options, questionNamber, questionSlider, points;
 
 const initGame = () =>{
 
     container.html(``)
     for(let i = 1; i <= 10; i++){
         container.append(`<div class="questionNamber"><br>${i}</div>`)
 }
     container.append(`<div id="question">${triviaAraay[0].question}</div>`)
     for(let i = 0; i <= 3; i++){
         container.append(`<div class="option">${triviaAraay[0].options[i]}</div>`)
 }
     container.append(`<div id="points">points: <span>0</span>`)
     questionNamber = points = 0;
     questionSlider = $(".questionNamber");
     options = $(".option");
     questionSlider.eq(0).css({"border-width": "5px", "background-color":"#f2cc0f"})
     options.each(function (_index) { 
     $(this).click(function () { 
         if(triviaAraay[questionNamber].answer == _index){
            $("#points span").html(points += 10)
            questionSlider.eq(questionNamber).css({"background-color": "#8cbf3f", "border-width": "0"}).prepend("&#10003;");
         }else{
             questionSlider.eq(questionNamber).css({"background-color": "red", "border-width": "0"}).prepend("&#10060;");
         }
         if(++questionNamber == 10){
             $("#question, .option, #points").remove();
             container.append(`<div class="gameOver">you got ${points} points <br><br><br><br><br><button>click to try again</button></div>`);
             $("button").click(initGame);
         }else{
             $(questionSlider[questionNamber]).css({"background-color": "#f2cc0f","border-width":"5px"});
             $("#question").html(triviaAraay[questionNamber].question);
             options.html(triviaAraay[questionNamber].options[_index])
         }
         
     });
 });
 }
 
 $("button").click(initGame)
