# TIDINGS - AN RSS AGGREGATOR
- A fullstack RSS news aggregator.
- Using Next.js on frontend, Strapi on backend and a simple webscraper built in Go.
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
<br>
<br>

# SAMPLE SCREENS
Web:
![image](https://github.com/ahmadizzuddinbinabubakar/tidings_public/assets/106616443/64b7251e-9814-45fb-a6f6-447f3e78575c)
![image](https://github.com/ahmadizzuddinbinabubakar/tidings_public/assets/106616443/894100c5-b151-44ee-9789-f7e01079c2a9)
<br>

Tablet:<br>
<img src="https://github.com/ahmadizzuddinbinabubakar/tidings_public/assets/106616443/a56721b0-7294-4899-a0f6-b8fbcbb5a9d7" width="500">
<br>

Mobile:<br>
<img src="https://github.com/ahmadizzuddinbinabubakar/tidings_public/assets/106616443/79b3ce8f-83d6-48a7-8d44-bcc0c7fc447e" width="250">
<br>
