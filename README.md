# DesigningHub Quick-Start

1. `cp .env.example .env`
2. `make install`
3. `make dev`
4. open http://localhost:3000
5. login (no UI yet) – obtain JWT via POST `http://localhost:4000/api/v1/auth/login`
   { "email":"demo@designinghub.com","password":"Demo123!" }
