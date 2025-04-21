# 🧁🍰 Bakery Management System 

A modern solution for bakery inventory management with a microservices architecture. Manage your sweet business with style! 🎂📈

## 🌟 System Highlights

| Feature                | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| 📦 Real-time Inventory | Instant stock updates across all services                                   |
| 🧩 Microservices       | Independent scalable containers                                             |
| 📊 Dashboard Analytics | Beautiful charts showing sales trends (Coming Soon!)                        |
| 📱 Mobile Ready        | Responsive design works on all devices                                      |

## 🏗️ System Architecture
![Project Screenshot](https://github.com/user-attachments/assets/710c1fa9-a972-45ed-ba10-6bcadf10a158)

## 📦 Core Components

| Component               | Technology Stack                            | Purpose                                 |
|-------------------------|---------------------------------------------|-----------------------------------------|
| 🖥️ Frontend            | React + Vite + Tailwind CSS                 | Interactive UI/UX                      |
| ⚙️ API Layer           | Node.js + Express                           | Business logic & endpoints             |
| 🗃️ Database            | PostgreSQL                                  | Reliable data storage                  |
| 📡 Messaging           | RabbitMQ + AMQP                             | Async communication                    |
| 📦 Containerization    | Docker + Docker Compose                     | Service isolation & scaling            |

## 🚀 Getting Started in 4 Steps!

### 1. **Clone & Enter** 🛠️
```bash
git clone https://github.com/Adityasahni04/Indian-Bakery.git
cd Indian-Bakery
```

### 2. **Setup Environment** 🔧
Create `.env` file in project root:
```env
# Database configuration
POSTGRES_USER=aditya
POSTGRES_PASSWORD=aditya
POSTGRES_DB=indianbakery
DB_PORT=5432

# RabbitMQ configuration
RABBITMQ_DEFAULT_USER=username
RABBITMQ_DEFAULT_PASS=userpass
RABBITMQ_HOST=rabbitmq
RABBITMQ_PORT=5672

# Backend environment
DB_HOST=db
DB_USER=aditya
DB_PASSWORD=aditya
DB_NAME=indianbakery

# Frontend
VITE_API_URL=http://localhost:8000
```

### 3. **Launch Services** ✨
```bash
docker-compose up --build -d
```

### 4. **Access Application** 🎉
```
http://localhost:80
```

> 💡 Pro Tip: Run `docker ps` to verify all containers are healthy

## 📚 API Cheat Sheet

| Endpoint               | Method   | Description                      | Success Code |
|------------------------|----------|----------------------------------|--------------|
| `/listproducts`        | `GET`    | List all items                   | 200 OK       |
| `/addproduct`          | `POST`   | Create new product               | 201 Created  |
| `/updateproduct/{id}`  | `PUT`    | Modify existing product          | 200 OK       |
| `/deleteproduct/{id}`  | `DELETE` | Remove product                   | 204 No Content|

### 📄 Example Request Flow

```javascript
// Adding new croissants 🥐
fetch('/addproduct', {
  method: 'POST',
  body: JSON.stringify({
  "name": "Croissant",
  "category": "Pastry",
  "price": 2.99,
  "stock": 50,
  "image": "croissant.jpg"
  })
});
```

## 🗃️ Database Schema

**Products Table**

| Column       | Type        | Example Value     |
|--------------|-----------------|-----------------------------|
| id (PK)      | SERIAL          | 42                          |
| name         | VARCHAR(80)     | "Chocolate Cake"            |
| category     | VARCHAR(50)     | "Cakes"                     |
| price        | DECIMAL(10,2)   | 24.99                       |
| stock        | INTEGER         | 50                          |
| image_url    | VARCHAR(255)    | "upload/cake/chocolate.jpg" |

## 📊 Coming Soon Features

- 🔐 Auth & Roles – User authentication & admin controls
- 🚀 CI/CD Pipeline – Automated testing & deployment
- 🛵 Rapido Delivery – Local bakery delivery API

## 🛠️ Troubleshooting Guide

| Issue                        | Solution                          |
|------------------------------|-----------------------------------|
| Docker build failing         | `docker system prune -a`          |
| Port conflicts               | Check for other services on :80   |
| Database connection issues   | Verify PG credentials in .env     |

## 🤝 Contribution Welcome!

Join our baking squad! 👩🍳👨🍳
1. 🍴 Fork the repository
2. 🛠️ Create your feature branch
3. 📦 Add your improvements
4. 🚀 Open a Pull Request
