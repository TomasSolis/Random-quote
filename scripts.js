const quotes = [
  { quote: 'Can you imagine what I could do if I could do all I can?',
   source: 'Sun Tzu: The art of war'
  },
  {
      quote: "I live my life a quarter mile at a time. Nothing else matters: not the mortgage, not the store, not my team and all their bullshit. For those ten seconds or less, I'm free.",
      source: 'Dominic Toretto: The fast and the furious',
      citation: 'Movie',
      year: 2001
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
      source:"Maya Angelou: Phenomenal Woman"
  },
  {
      quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
      source:"Robert Louis Stevenson"
  },
  {
    quote:"The greatest glory in living lies not in never falling, but rising everytime we fall.",
    source:"Nelson Mandela"
  
  },
  {
    quote:"Success is not final; failure is not fatal: It is the courage to continue that counts.",
    source:"Winston S. Churchill"
  
  },
  {
    quote:"It better to fail in originality that to succeed in imitation.",
    source:"Herman Melville"
  
  },
  {
    quote:"Nothing is impossible, the word itself says, 'I/'m possible!'",
    source:"Audrey Hepburn"
  
  },
  {
    quote:"Winning isnt everthing, but wanting to win is.",
    source:"Vinve Lombardi"
  
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
    source:"Jackie Burkhart: That 70's Show"
  },
  {
    quote:"The three true branches of the government are: military, corporate and Hollywood.",
    source:"Steven Hyde: That 70's Show"
  }

    
  ];


function getRandomQuote (quotes){
    // Random number generator
    let quoteIndex =  Math.floor(Math.random() * quotes.length);
    return quotes[quoteIndex];
    
}



function printQuote (){
  let html = '';
  let printRandomQuote = getRandomQuote();
  // displays quote from html file 
  html+= '<p class = "quote">' + printRandomQuote.quote + '</p>';
  //displays all object properties if every object is filled in.
  html += '<p class = "source">' + printRandomQuote.source;
  
  
  if("citation" in printRandomQuote){
    html += '<span class = "citation">' + printRandomQuote.citation + '</span>';

  }
  if ("year" in printRandomQuote){
    html+= '<span class = "year">' + printRandomQuote.year + '</span>' + '</p>';

  }
  //displays html content
 document.getElementById("quote-box").innerHTML = html;

}


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false); ``` 