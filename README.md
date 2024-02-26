# TIDINGS - AN RSS AGGREGATOR
A fullstack RSS news aggregator
<br>
<br>
# TO RUN
backend: 
- cd /tidings/backend 
- strapi start 
- npm run start <-- only in production, cannot edit
- npm run develop http://localhost:1337/
         
frontend: 
- cd /tidings/frontend 
- npm run dev 
- http://localhost:3000/
          
webscraper: 
- go build WebScraperService 
- go run WebScraperService
