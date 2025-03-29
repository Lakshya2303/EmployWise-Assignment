This project is a **User Management System** built with React that allows you to:
- ✅ View a list of users
- ✏️ Edit user details
- ❌ Delete users
- 📄 Paginate through user lists

The project uses **reqres.in** as a fake REST API for demonstration purposes.

---

## 📚 **Tech Stack**
- ⚛️ **React:** Frontend UI
- 🎨 **CSS:** UI Styling
- 📡 **Axios:** For API requests
- 🌐 **reqres.in:** Fake API for CRUD operations

---

## ⚡️ **Getting Started**

1️⃣ **Clone the Repository**
git clone https://github.com/Lakshya2303/EmployWise-Assignment.git
cd EmployeWise-Assignment
2️⃣ **Install Dependencies**
npm install
3️⃣ Run the Application
npm start
The application will run on http://localhost:3000


🔗 API Configuration
The APIs are configured in:
/src/services/api.js

✅ API Base URL
const BASE_URL = 'https://reqres.in/api';

📡 Endpoints:
GET /users?page=1 - Fetch paginated users
GET /users/:id - Get user details by ID
PUT /users/:id - Update user details
DELETE /users/:id - Delete user

🎨 CSS Styles & UI Consistency
All CSS is maintained in:
/src/styles/styles.css

⚙️ Known Limitations & Considerations
Data Consistency: Since we are using reqres.in, changes to user data (edit/delete) will not persist after a page refresh.

Pagination Limitation: The API returns only 6 users per page. But it has been modified to return 3 users per page for better demonstration.

Fake API Restriction: PUT and DELETE requests only mock the behavior, and changes are reflected temporarily on the frontend.

📌 Assumptions/Considerations
Project is developed for learning and demonstration purposes.

API changes are not persistent due to the use of a fake API (reqres.in).

Pagination only supports a limited number of results.


