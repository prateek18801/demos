# Kong API Gateway and Microservice Setup

### Installation:

1. **Prerequisites:**
   - Install docker and docker compose.

2. **Download Kong Docker Compose File:**
   - Create a `docker-compose.yml` file with configuration:

     ```yaml
     version: '2'
     services:
       kong:
         image: kong:latest
         ports:
           - "8000:8000"
           - "8001:8001"
           - "8443:8443"
           - "8444:8444"
         environment:
           KONG_DATABASE: "postgres"
           KONG_PG_HOST: "kong-database"
           KONG_PG_USER: "kong"
           KONG_PG_PASSWORD: "kong"
           KONG_PG_DATABASE: "kong"
         depends_on:
           - kong-database
         healthcheck:
           test: ["CMD", "kong", "health"]
           interval: 10s
           timeout: 10s
           retries: 10
       kong-database:
         image: postgres:9.6
         environment:
           POSTGRES_DB: "kong"
           POSTGRES_USER: "kong"
           POSTGRES_PASSWORD: "kong"
     ```

3. **Run Kong:**
   - Execute the following command in the directory where your `docker-compose.yml` is located:

     ```bash
     docker-compose up
     ```

   - Kong should now be running on `http://localhost:8000`.

4. **Access Kong's Admin API:**
   - Open the Kong Admin API at `http://localhost:8001`.

### Setting Up a Microservice:

1. **Add a Service:**
   - Use Kong's Admin API or the Kong Dashboard to add a service representing your microservice.

     ```bash
     curl -i -X POST --url http://localhost:8001/services/ --data 'name=microservice' --data 'url=http://your-microservice-url'
     ```

2. **Add a Route:**
   - Associate a route with your microservice to define how requests will reach it.

     ```bash
     curl -i -X POST --url http://localhost:8001/services/microservice/routes --data 'paths[]=/microservice'
     ```
