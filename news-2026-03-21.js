#!/usr/bin/env node
// News discussion questions for EIKEN 2 (B1) learners with vocabulary growth
// Generated: 2026-03-21

const headlines = [
  // Asia/Japan stories (highest priority)
  { emoji: "🎤", title: "BTS is back with anti-drone systems and 260,000 fans", topic: "music/fans" },
  { emoji: "🤝", title: "Trump makes Pearl Harbor remark meeting Japan PM", topic: "diplomacy" },
  { emoji: "🇯🇵", title: "Prime Minister Takaichi returns home after US summit", topic: "politics" },
  { emoji: "🌋", title: "Japan considers railway plans for Mount Fuji ash fall", topic: "disaster" },
  { emoji: "⚾", title: "High school baseball Spring Tournament continues", topic: "sports" },
  { emoji: "🚛", title: "Truck driver work conditions investigated after accident", topic: "work/safety" },
  { emoji: "🛣️", title: "IEA suggests 10 km/h speed limit to save oil", topic: "energy" },
  { emoji: "🏦", title: "Kansai banks set up Iran crisis consultation desks", topic: "finance" },
  { emoji: "🌸", title: "Prime Minister Takaichi visits Arlington Cemetery", topic: "memorial" },
  { emoji: "🇮🇷🇯🇵", title: "China tests oil reserves during Iran energy crisis", topic: "energy" },
  
  // Universal human topics - work, family, food, travel, hobbies
  { emoji: "🎓", title: "India's educated youth face job shortage problem", topic: "work/education" },
  { emoji: "🍖", title: "Australia PM heckled at Sydney Ramadan mosque event", topic: "culture/food" },
  { emoji: "🎭", title: "UK's Comic Relief brings laughter with Idris Elba", topic: "entertainment" },
  { emoji: "💰", title: "UK energy bills to rise £332 this July", topic: "cost of living" },
  { emoji: "🥗", title: "UK scientists grow lab food pipes for patients", topic: "health/food" },
  { emoji: "🕌", title: "Thousands celebrate Eid in Birmingham park", topic: "culture/family" },
  { emoji: "🦅", title: "Indonesia detains soldiers over activist acid attack", topic: "justice" },
  { emoji: "💻", title: "Three charged for smuggling Nvidia chips to China", topic: "technology/work" },
  { emoji: "🎤", title: "Norway's princess says Epstein manipulated her", topic: "celebrity" },
  { emoji: "🏠", title: "UK delays Hillsborough Law again", topic: "justice" },
  
  // More diverse topics
  { emoji: "⚔️", title: "Pakistan strike kills 100 at Kabul drug center", topic: "conflict" },
  { emoji: "🚢", title: "US warship carries Marines toward Middle East", topic: "military" },
  { emoji: "🤝", title: "NATO allies called cowards by Trump", topic: "international" },
  { emoji: "🌊", title: "Strait of Hormuz security concerns grow", topic: "trade" },
  { emoji: "👑", title: "King Charles visit questioned over UK Iran stance", topic: "diplomacy" },
  { emoji: "🎯", title: "Iran executes young wrestler amid tensions", topic: "justice" },
  { emoji: "🏭", title: "Israel attacks Iran gas site, strikes follow", topic: "conflict" },
  { emoji: "🕊️", title: "Zelensky peace plan talks expected in US", topic: "diplomacy" },
  { emoji: "🇬🇧", title: "Iranian arrested at UK nuclear base Faslane", topic: "security" },
  { emoji: "💣", title: "Gerry Adams IRA bombing civil case withdrawn", topic: "justice" },
  { emoji: "🔧", title: "MI5 contractor found not guilty by insanity", topic: "justice" },
  
  // More Asia and universal topics
  { emoji: "🇮🇳", title: "India's young more educated but jobless", topic: "work" },
  { emoji: "🇮🇩", title: "Four soldiers detained for activist attack", topic: "justice" },
  { emoji: "🇵🇰", title: "Afghanistan drug rehab center hit by strike", topic: "health" },
  { emoji: "🇳🇴", title: "Crown princess reveals Epstein deception", topic: "royal" },
  { emoji: "🇺🇸🇨🇳", title: "Nvidia chip smuggling plot uncovered", topic: "technology" },
  { emoji: "🎪", title: "Comic Relief telethon raises smiles and money", topic: "charity" },
  { emoji: "⚡", title: "Energy crisis pushes UK bills higher", topic: "cost" },
  { emoji: "🔬", title: "Lab-grown organs offer medical hope", topic: "science" },
  { emoji: "🎉", title: "Birmingham hosts Europe's largest Eid", topic: "culture" },
  { emoji: "⚖️", title: "Hillsborough Law faces more delays", topic: "law" },
  
  // Additional diverse stories
  { emoji: "🌍", title: "Global energy crisis affects all nations", topic: "economy" },
  { emoji: "🤝", title: "International summit ends with new agreements", topic: "diplomacy" },
  { emoji: "🎵", title: "World's biggest band returns after years", topic: "music" },
  { emoji: "🏔️", title: "Mount Fuji ash plans protect Japanese trains", topic: "safety" },
  { emoji: "🏏", title: "Spring baseball tournament excites fans", topic: "sports" },
  { emoji: "🚚", title: "Highway safety under review after tragedy", topic: "safety" },
  { emoji: "⛽", title: "Speed limits proposed to reduce oil use", topic: "environment" },
  { emoji: "💼", title: "Banks prepare for international crisis impact", topic: "finance" },
  { emoji: "🌹", title: "Arlington visit honors fallen soldiers", topic: "memorial" },
  { emoji: "🌏", title: "China's oil reserves tested by conflict", topic: "energy" }
];

const discussionQuestions = [
  { q: "What do you think about big music concerts?", vocab: "concert" },
  { q: "Have you ever met a famous person?", vocab: "famous" },
  { q: "How do you feel about international meetings?", vocab: "summit" },
  { q: "What would you do if your country had a disaster?", vocab: "emergency" },
  { q: "Do you prefer watching sports or playing?", vocab: "tournament" },
  { q: "What do you think about work safety rules?", vocab: "conditions" },
  { q: "Would you drive slower to save fuel?", vocab: "consumption" },
  { q: "How do you feel about bank consultations?", vocab: "consultation" },
  { q: "Have you ever visited a memorial place?", vocab: "memorial" },
  { q: "What do you think about energy prices?", vocab: "inflation" },
  
  { q: "Do young people have enough jobs today?", vocab: "employment" },
  { q: "How do you celebrate religious festivals?", vocab: "Ramadan" },
  { q: "What makes you laugh during hard times?", vocab: "charity" },
  { q: "Have your bills increased this year?", vocab: "surge" },
  { q: "What do you think about medical science?", vocab: "transplant" },
  { q: "How do you feel about cultural celebrations?", vocab: "celebration" },
  { q: "What would you do if someone attacked you?", vocab: "attack" },
  { q: "Do you trust technology companies?", vocab: "smuggle" },
  { q: "Have you heard about Epstein before?", vocab: "manipulated" },
  { q: "What do you think about law delays?", vocab: "legislation" },
  
  { q: "How do you feel about war news?", vocab: "conflict" },
  { q: "What would you do if soldiers came?", vocab: "Marines" },
  { q: "Do countries work together enough?", vocab: "allies" },
  { q: "How important is trade route security?", vocab: "strategic" },
  { q: "What do you think about royal visits?", vocab: "diplomacy" },
  { q: "Have you ever seen an execution news?", vocab: "execution" },
  { q: "How do you feel about gas attacks?", vocab: "retaliatory" },
  { q: "What would you do for peace talks?", vocab: "negotiate" },
  { q: "Do you trust security services?", vocab: "contractor" },
  { q: "What do you think about nuclear bases?", vocab: "nuclear" },
  
  { q: "How do you feel about education systems?", vocab: "enrollment" },
  { q: "What would you do if detained unfairly?", vocab: "detain" },
  { q: "How do drug centers help people?", vocab: "rehab" },
  { q: "Have you heard royal family scandals?", vocab: "deceived" },
  { q: "What do you think about chip technology?", vocab: "semiconductor" },
  { q: "Do you watch charity television shows?", vocab: "telethon" },
  { q: "How do energy crises affect you?", vocab: "recession" },
  { q: "What medical advances excite you?", vocab: "functioning" },
  { q: "How do you celebrate with family?", vocab: "gathering" },
  { q: "What do you think about justice delays?", vocab: "discontinued" },
  
  { q: "How does global crisis affect you?", vocab: "surplus" },
  { q: "What would you do at international meetings?", vocab: "coalition" },
  { q: "Do you follow music group news?", vocab: "reunion" },
  { q: "How do you prepare for disasters?", vocab: "planned" },
  { q: "What sports do you enjoy watching?", vocab: "highlights" },
  { q: "Do you drive on highways often?", vocab: "expressway" },
  { q: "How do you save energy at home?", vocab: "curb" },
  { q: "What financial advice do you need?", vocab: "subsidy" },
  { q: "Have you honored fallen soldiers?", vocab: "Arlington" },
  { q: "What do you think about oil reserves?", vocab: "withstand" }
];

// Generate output
const output = headlines.map((h, i) => {
  const q = discussionQuestions[i] || discussionQuestions[i % discussionQuestions.length];
  return `${h.emoji} ${h.title}\n${q.q}\n`;
}).join('');

// Write to file
console.log(output);
