# **PROJECT: “StudentHub” – A MERN Student Management Portal**

## **About this Project**

I built student hub as an implementation of the MERN stack while learning it for my Web Technologies course. It serves as both a learning project and a simple full-stack development application.

### **AI Assistance**

AI/LLM tools were used to support learning, explanation, and development during the creation of this MERN project.

---

<br />

StudentHub is a full-stack web app where users can:

### **Frontend (React)**

* View all students  
* Add student using React form  
* Update and delete  
* Upload profile pictures  
* Navigate via React Router  
* Use Context for theme  
* UseReducer for complex form state  
* UseEffect for fetching API data

### **Backend (Node \+ Express)**

* Build REST API endpoints:  
  * GET /students  
  * POST /students  
  * PUT /students/:id  
  * DELETE /students/:id  
* Middleware  
* File uploads with Multer  
* Input validation  
* Error handling

### **Database (MongoDB)**

* Store student documents  
* CRUD operations  
* Filters & pagination

### **(Optional Final Phase)**

* Deploy using NextJS frontend \+ Express backend or full NextAPI.

<br />

## **PHASE 1 — React Fundamentals (Frontend)**

### **A. React Basics & Component System**

* What is React (from WT U3 p.1–4)  
* React Elements, Components, JSX (p.5–11)  
* Props (p.11–12)  
* Conditional Rendering (p.12–13)  
* Rendering Lists & Keys (p.14–15)  
* Event Handling (p.16–22)

### **B. React State Management**

* useState (p.23–29)  
* React Forms – controlled form handling (p.42–43)  
* Updating objects & arrays in state  
* Complex components & lifting state up

### **C. Intermediate Hooks**

* useEffect (p.30–32)  
* useRef for DOM & persistent values (p.36–39)  
* useContext (p.33–36)  
* useReducer (p.40–42)

### **D. React Router**

* Basic routing  
* Route components  
* Navigation  
* Dynamic routing  
  (Hosting frontend from backend if desired)

### **PROJECT MILESTONE 1:**  
 - Build the **React Frontend** of our project (UI \+ forms \+ routing)

<br />

## **PHASE 2 — NodeJS Fundamentals (Backend Foundation)**

### **A. Node.js Architecture**

* What is Node? Event loop, async model  
* Callbacks (WT U3 topic list)  
* Node core modules  
* Node Modules (CommonJS/ESM)  
* Buffers & Streams  
* File System module (fs)

### **B. Running React on NodeJS**

(Hosting frontend from backend if desired)

### **PROJECT MILESTONE 2:**  
 - Build a **Node server**  
 - Learn how Node handles files, requests, async behaviour

<br />

## **PHASE 3 — ExpressJS (Server \+ APIs)**

### **A. ExpressJS: Introduction (WT U4 p.23–27)**

* Installing Express  
* Basic server  
* Routing  
* URL building  
* Route params  
* JSON parsing  
* Folder structure

### **B. REST APIs (WT U4 p.18–22)**

* GET, POST, PUT, DELETE  
* Request vs Response  
* Query Params vs Route Params  
* Status codes  
* Error handling

### **C. Express Middleware**

* Built-in middleware  
* Custom middleware  
* Error-handling middleware

### **D. Handling Form Data & File Upload**

* express.urlencoded  
* express.json  
* Multer for file uploads

### **PROJECT MILESTONE 3:**  
 - Build the **backend REST API** with Express  
 - Connect React UI to real backend endpoints  
 - Add file upload endpoints

<br />

## **PHASE 4 — MongoDB (Database Layer)**

### **A. MongoDB Basics (WT U4 p.1–6)**

* Documents  
* Collections  
* BSON  
* CRUD operations  
* Comparison with RDBMS

### **B. MongoDB NodeJS Driver (p.13–17)**

* Connecting Node → MongoDB  
* insertOne, insertMany  
* find, filtering, projection  
* updateOne, updateMany  
* deleteOne, deleteMany

### **C. Advanced MongoDB Operations**

* Query operators  
* Sorting, skipping, limiting  
* Index basics

### **PROJECT MILESTONE 4:**  
 - Connect Express → MongoDB  
 - Implement database-backed CRUD  
 - Full MERN app functional end-to-end

<br />

## **PHASE 5 — Next.js (Advanced React Framework)**

### **A. Introduction to NextJS**

* File-based routing  
* Server components  
* API routes  
* Using Next.js instead of CRA/Vite  
   (We do this AFTER building MERN so it makes sense.)

### **PROJECT MILESTONE 5:**  
 - Compare React vs NextJS  
 - Optionally migrate frontend to NextJS
