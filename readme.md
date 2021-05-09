# Dota Friend Tracker

Dota Friend tracker är en SPA utvecklad med React. Dota Friend Tracker använder sig av Dotas öppna api för att söka efter spelare och hämta ut information om en viss spelare, exempelvis MMR. Med Dota Friend Tracker är det sedan möjligt att favoritisera en spelare och på de sättet "tracka" en spelare.

## Instruktioner

1. Navigera till projektkatalogen med powershell/terminal
2. Kör "npm install"
3. Kör "npm start"

## Varför react?

För att skapa Dota Friend Tracker hade det gått lika bra att använda Vue eller Angular istället för React. Den primära anledningen till att vi använde React isället för Vue eller Angular är för att vi helt enkelt vill bli bättre på React. Anledningen till att vi vill bli bättre på React är mest på grund av dess populäritet. På sidan [hotframeworks](https://hotframeworks.com/) finns en lista som rangordnar olika frameworks beroende på Github Score och Stack Overflow Score. React toppar den listan [listan](https://hotframeworks.com/). I en undersökning utförd 2018 av [stackoverflow](https://insights.stackoverflow.com/survey/2018) visar att react ligger högt på listan av ramverk utvecklare älskar och vill ha mer av. I [en artikel från zerotomastery](https://zerotomastery.io/blog/tech-trends-showdown-react-vs-angular-vs-vue/) skriver författarna att det finns mer dokumentation och information om React jämfört med Angular och Vue. 

Den primära anledningen till att vi inte använder Vue är för enligt [zerotomastery](https://zerotomastery.io/blog/tech-trends-showdown-react-vs-angular-vs-vue/) så är Vue de ramverk med minst antal jobbanonnser på LinkedIn. Med react och Angular på en delad förstaplats.

Den primära anledningen till att vi inte använder Angular är för Angular är baserad på TypeScript och vi vill använda vanlig JavaScript. Det är möjligt att skriva vanlig javascript med Angular men Angular har viss funktionalitet som inte går att implementera lika lätt med javascript, exemplvis annotaions. Samt att i princip all dokumentation för Angular är för Typescript. 

TypeScripts fördelar är något som vi diskuterade tidigt i projektet, med statisk typing kan högre readability uppnås och skapa en bättre struktur samt minska risken för felbenämning. Trots alla fördelar så fann vi att tiden det hade tagit att läsa på och bli bekväma med TypeScript-syntax och den extra kod som krävs för en effektiv TypeScript struktur inte vägde upp tillräckligt för ett projekt av denna storleken.  

I [Why We Chose Angular Over React](https://medium.com/@jacobfriesen/why-we-chose-angular-over-react-e633b9d5d155) nämns att Reacts fokus på prestanda har resulterat i att applikationer skapade i React upplevs ha komplex kod. Detta är dock inget vi känner effekterna av på grund av projektets storlek. 

Viktigt att nämna men kanske orelevant för en jämförelse är att vi använde oss av React i JS-Ramverk labben, vilket innebär att vi redan har en ide om hur React fungerar och det blir en mindre inlärningskurva i början av projektet. Detta är även en utmärkt möjlighet att skaffa oss en djupare förståelse för React.

### Sammanfattning:

* React är det mest populära javascript ramverket för frontend

* [Vue har lägst populäritet i västvärden](https://zerotomastery.io/blog/tech-trends-showdown-react-vs-angular-vs-vue/).

* Angular är baserad på typescript.

* Det finns mer material(dokumentation och liknande) om React på grund av dess populäritet. 

* Vi har redan lite erfarenhet med React och vill lära oss mer om React.