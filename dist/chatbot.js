/* Cryp Tok Solutions chat widget — keyword bot, no network calls. Gold bubble, bottom right. */
(function(){
"use strict";
var EMAIL="itscryptok@gmail.com";
var MAIL_LINK='<a href="mailto:'+EMAIL+'">'+EMAIL+'</a>';
var MAIL_BTN='<br><a class="cx-cta" href="mailto:'+EMAIL+'">&#9993; Email us</a>';
var IG='<a href="https://instagram.com/itscryptok" target="_blank" rel="noopener">Instagram: itscryptok</a>';
var TT='<a href="https://tiktok.com/@itsCaptaintok" target="_blank" rel="noopener">TikTok: itsCaptaintok</a>';

var R={
  services:'Here is what we do:<br>'+
    '<strong>1. Website only</strong> &mdash; a modern, fast website for your business. <strong>$250 setup, $20/month hosting.</strong><br>'+
    '<strong>2. Website + SEO + AI chatbot</strong> &mdash; rank higher on Google plus an AI chatbot that answers customers and books appointments 24/7. <strong>$420 setup, $50/month hosting.</strong><br>'+
    '<strong>3. Everything + DM/SMS chatbot</strong> &mdash; the AI chatbot also answers your social media DMs, text messages and WhatsApp. <strong>$910 setup, $250/month hosting.</strong>',
  price:'<strong>Our packages:</strong><br>'+
    '<strong>1. Website only</strong> &mdash; <strong>$250 setup, $20/month hosting.</strong><br>'+
    '<strong>2. Website + SEO + AI chatbot</strong> &mdash; <strong>$420 setup, $50/month hosting.</strong><br>'+
    '<strong>3. Everything + DM/SMS chatbot</strong> &mdash; <strong>$910 setup, $250/month hosting.</strong>',
  bot:'An <strong>AI chatbot</strong> answers your customers&rsquo; questions instantly, <strong>24/7</strong> &mdash; booking appointments and capturing leads even at midnight. On your <strong>website, Instagram and Facebook DMs, text SMS, and WhatsApp</strong>. No missed calls, no lost sales.',
  website:'<strong>Website only: $250 setup, $20/month hosting</strong> &mdash; a modern, fast website built for your business. Want the Google ranking boost and chatbot too? See package 2.'+MAIL_BTN,
  seo:'Our <strong>Website + SEO + AI chatbot</strong> package (<strong>$420 setup, $50/month hosting</strong>) builds your site to rank higher on Google and includes the 24/7 AI chatbot.',
  dm:'Our top package (<strong>$910 setup, $250/month hosting</strong>) puts the AI chatbot on your <strong>social media DMs, text SMS and WhatsApp</strong> &mdash; every message answered instantly.',
  book:'Tell us about your business and we&rsquo;ll take it from there:'+MAIL_BTN,
  contact:'Contact us by DM on '+IG+', '+TT+', or email '+MAIL_LINK+'.',
  sample:'You&rsquo;re looking at it! &#128521; This gold chat bubble is a live sample of our AI chatbot. Ask me about our services or prices.',
  thanks:'You&rsquo;re so welcome! Ready when you are &mdash; anything else I can help with?',
  fallback:'I want to make sure you get the right answer &mdash; email us at '+MAIL_LINK+' and we&rsquo;ll help you right away!'
};
var QUICK=["Services & prices","AI chatbot","Contact us","Email us"];

function match(t){
  if(/(price|cost|how much|much for|\brate\b|pricing|charge|package|plan)/.test(t)) return "price";
  if(/(dm\b|sms|text|whatsapp|instagram|tiktok|social)/.test(t)) return "dm";
  if(/(seo|rank|google|search)/.test(t)) return "seo";
  if(/(chatbot|bot\b|ai\b|assistant)/.test(t)) return "bot";
  if(/(website|site|web\b)/.test(t)) return "website";
  if(/(sample|demo|example|try)/.test(t)) return "sample";
  if(/(book|call|start|sign up|signup|interested|get started)/.test(t)) return "book";
  if(/(contact|reach|email|dm\b|phone|number)/.test(t)) return "contact";
  if(/(service|offer|do you do|what.*do)/.test(t)) return "services";
  if(/(thank|thanks|thx)/.test(t)) return "thanks";
  return null;
}

var fab, panel, msgs, quick, form, input, opened=false, greeted=false;

function el(html){var d=document.createElement("div");d.innerHTML=html;return d.firstChild;}

function build(){
  if(document.getElementById("cxFab"))return; /* already initialized */
  document.body.appendChild(el(
    '<button class="cx-fab" id="cxFab" aria-label="Chat with Cryp Tok Solutions" aria-expanded="false" aria-controls="cxPanel">'+
    '<span aria-hidden="true">&#128172;</span><span class="cx-dot" id="cxDot" aria-hidden="true"></span></button>'));
  document.body.appendChild(el(
    '<div class="cx-panel" id="cxPanel" hidden role="dialog" aria-label="Chat with Cryp Tok Solutions">'+
    '<div class="cx-head"><div class="cx-ava" aria-hidden="true">C</div>'+
    '<div><strong>Cryp Tok Solutions</strong><small>Websites &amp; AI chatbots for small business</small></div>'+
    '<button class="cx-close" id="cxClose" aria-label="Close chat">&times;</button></div>'+
    '<div class="cx-msgs" id="cxMsgs" aria-live="polite"></div>'+
    '<div class="cx-quick" id="cxQuick"></div>'+
    '<form class="cx-form" id="cxForm"><input id="cxInput" type="text" placeholder="Type your question&hellip;" '+
    'aria-label="Type your question" autocomplete="off" maxlength="300">'+
    '<button type="submit" aria-label="Send">&#10148;</button></form></div>'));
  fab=document.getElementById("cxFab"); panel=document.getElementById("cxPanel");
  msgs=document.getElementById("cxMsgs"); quick=document.getElementById("cxQuick");
  form=document.getElementById("cxForm"); input=document.getElementById("cxInput");
  fab.addEventListener("click",toggle);
  document.getElementById("cxClose").addEventListener("click",toggle);
  form.addEventListener("submit",function(e){e.preventDefault();send(input.value);input.value="";});
  quick.addEventListener("click",function(e){
    if(e.target.tagName!=="BUTTON")return;
    var t=e.target.textContent; addUser(t); respond(t);
  });
  document.addEventListener("keydown",function(e){
    if(e.key==="Escape"&&!panel.hidden)toggle();
  });
}
function toggle(){
  var open=panel.hidden;
  if(open){panel.hidden=false;fab.setAttribute("aria-expanded","true");
    document.getElementById("cxDot").hidden=true;
    if(!greeted){greeted=true;
      say("Hi! &#128075; Welcome to <strong>Cryp Tok Solutions</strong> &mdash; we build websites and AI chatbots for small businesses. How can I help you today?");
      setQuick(QUICK);}
    setTimeout(function(){input.focus();},250);
  }else{panel.hidden=true;fab.setAttribute("aria-expanded","false");fab.focus();}
}
function setQuick(list){
  quick.innerHTML="";
  list.forEach(function(t){var b=document.createElement("button");b.type="button";b.textContent=t;quick.appendChild(b);});
}
function scroll(){msgs.scrollTop=msgs.scrollHeight;}
function addUser(t){var d=document.createElement("div");d.className="cx-msg cx-user";d.textContent=t;msgs.appendChild(d);scroll();}
function say(html,delay){
  var tp=document.createElement("div");tp.className="cx-typing";tp.innerHTML="<i></i><i></i><i></i>";
  msgs.appendChild(tp);scroll();
  setTimeout(function(){tp.remove();
    var d=document.createElement("div");d.className="cx-msg cx-bot";d.innerHTML=html;
    msgs.appendChild(d);scroll();
  },delay||700);
}
function send(raw){
  var t=(raw||"").trim(); if(!t)return;
  addUser(t); respond(t);
}
function respond(t){
  var low=t.toLowerCase();
  if(/^(hi|hey|hello|good (morning|afternoon|evening)|yo)\b/.test(low)){say("Hello! &#128075; How can I help &mdash; services &amp; prices, the AI chatbot, or contacting us?");setQuick(QUICK);return;}
  if(low.indexOf("email us")>-1){say("You can reach us any time at "+MAIL_LINK+".");setQuick(QUICK);return;}
  var k=match(low);
  if(k==="price"){say(R.price);}
  else if(k==="services"){say(R.services);}
  else if(k==="bot"){say(R.bot);}
  else if(k==="website"){say(R.website);}
  else if(k==="seo"){say(R.seo);}
  else if(k==="dm"){say(R.dm);}
  else if(k==="book"){say(R.book);}
  else if(k==="contact"){say(R.contact);}
  else if(k==="sample"){say(R.sample);}
  else if(k==="thanks"){say(R.thanks);}
  else{say(R.fallback);}
  setQuick(QUICK);
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",build);
else build();
})();
