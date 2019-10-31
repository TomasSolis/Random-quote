// Collection of quotes

const quotes = [
  { quote: 'Can you imagine what I could do if I could do all I can?',
   source: 'Sun Tzu: The art of war',
   citation: 'Book'
  },
  {
      quote: "I live my life a quarter mile at a time. Nothing else matters: not the mortgage, not the store, not my team and all their bullshit. For those ten seconds or less, I'm free.",
      source: '       ' + 'Dominic Toretto: Fast and the furious',
      
      
  },
  {
      quote: "I have money, it's trust and character I need around me. You know who you choose to be around you, let's you know who you are.",
      source: 'Han: Fast and Furious Tokyo drift ',
      citation:'Movie',
      year: 2006
  },
  {
      quote:"Give every man thy ear, but few thy voice",
      source:"William Shakespeare",
      citation: 'Speech'
  },
  {
      quote:"May I never boast except in the cross of our Lord Jesus Christ, through which the world has been crucified to me, and I to the world.",
      source:"Galatians 6:14. The Holy Bible ",
      citation: "Biblical"
  },
  {
      quote:"For we walk by faith, not by sight",
      source:"2 Corinthians 5:7. The Holy Bible",
      citation: "Biblical"
  },
  {
      quote:"A question that sometimes drives me hazy: am I or are the others crazy?",
      source:"Albert Einstein"
  },
  {
      quote:"Now you understand Just why my head's not bowed. I don't shout or jump about Or have to talk real loud. When you see me passing It ought to make you proud.",
      source:"Maya Angelou: Phenomenal Woman",
      citation: 'Poetry',
  },
  {
      quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
      source:"Robert Louis Stevenson",
      citation: 'Poetry',
  },
  {
    quote:"The greatest glory in living lies not in never falling, but rising everytime we fall.",
    source:"Nelson Mandela",
    
  
  },
  {
    quote:"Success is not final; failure is not fatal: It is the courage to continue that counts.",
    source:"Winston S. Churchill"
  
  },
  {
    quote:"It's better to fail in originality that to succeed in imitation.",
    source:"Herman Melville"
  
  },
  {
    quote:"Nothing is impossible, the word itself says, 'I/'m possible!'",
    source:"Audrey Hepburn"
  
  },
  {
    quote:"Winning isnt everthing, but wanting to win is.",
    source:"Vince Lombardi"
  
  },
  {
    quote:"An investment in knowledge pays the best interst.",
    source:"Benjamin Franklin"
  
  },
  {
    quote:"Education must not simply teach work - it must teach Life.",
    source:"W.E.B. Du Bois"
  
  },
  {
    quote:"Knowledge speaks, but wisdom listens.",
    source:"Jimi Hendrix"
  
  },
  {
    quote:"If you are not willing to risk the usual, you will have to settle for ordinary.",
    source:"Jim Rohn"
  
  },
  {
    quote:"The only place where success comes before work is the dictionary.",
    source:"Vidal Sassoon"
  
  },
  {
     quote:"Once you accept your flaws, no one can use them against you.",
     source: "Tyrion Lannister: Game of Thrones"
  },
  {
    quote:"BURN!",
    source:"Michael Kelso: That 70's Show"
    
  },
  {
    quote:"I just wanna say...when my time comes, I want to be buried face down, so that anyone who doesn't like me can kiss my ass!",
    source:"Red Forman: That 70's Show"
  },
  {
    quote:"God, what did you have for breakfast this morning? Carnation Instant Bitch?",
    source:"Eric Forman: That 70's Show"
  },
  {
    quote:"Everybody wants their first make-out to be special, in some place romantic like Ireland or Disney World.",
    source:"Jackie Burkhart: That 70's Show",
    citation: "Comedy T.V.",
    year: 2000
  },
  {
    quote:"The three true branches of the government are: military, corporate and Hollywood.",
    source:"Steven Hyde: That 70's Show",
    citation: 'Comedy T.V.',
    year: 1998
  }

    
  ];

//getRandomQuote function pulls random quotes from the array of objects.
function getRandomQuote (){
    // Random number generator
    let quoteIndex =  Math.floor(Math.random() * quotes.length);
    return quotes[quoteIndex];
    
}


//printQuote function calls getRandomQuote function and assigns it to the printRandomQuote variable.
function printQuote (){
  //sets a value for the variables lsited below.
  let html = '';

  //calls the getRandomQuote for the list of quotes and properties in the array of objects.
  let printRandomQuote = getRandomQuote();

  // displays quote from html file 
  html+= '<p class = "quote">' + printRandomQuote.quote + '</p>';

  //displays all object properties if filled in.
  html += '<p class = "source">' + printRandomQuote.source;
  
  // if statment used to test if the quote object has a citation property. If so, produces a concatinated string . 
  if("citation" in printRandomQuote){
    html += '<span class = "citation">' + printRandomQuote.citation + '</span>';

  }
  // if statment used to test if the quote object has a year property. If so, produces a concatinated string . 
  if ("year" in printRandomQuote){
    html+= '<span class = "year">' + printRandomQuote.year + '</span>' + '</p>';

  }
  //displays html content
 document.getElementById("quote-box").innerHTML = html;

}
//automatic random quote when page is first loaded
printQuote();


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false); 







