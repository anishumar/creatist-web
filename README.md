#  Creatist Web

Welcome to the official web platform for **Creatist** — the ultimate collaboration hub designed for the next generation of creative builders. Experience a premium, macOS-inspired interface built for high-performance collaboration.

## 🚀 Quick Start Guide

Follow these steps to clone, install, and run the Creatist web application on your local machine.

### 1. Clone the Project
First, clone the entire Creatist ecosystem and navigate to the web directory:

```bash
git clone https://github.com/anishumar/Creatist.git
cd Creatist/creatist-web
```

### 2. Install Web Dependencies
This project requires [Node.js](https://nodejs.org/) (Version 18+ recommended). Use the following command to install all necessary packages:

```bash
npm install
```

### 3. Configure Environment Variables
The web app needs to know where your backend API is located. Create a `.env.local` file in the `creatist-web` root directory:

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:8080
```

### 4. Launch the Development Server
Start the local server with hot-reloading enabled:

```bash
npm run dev
```
Once started, navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠 Full-Stack Setup (Backend)

The web app requires the **CreatistBackend** to handle user data and collaborations. If you are running the full stack locally, follow these instructions for the Python backend:

### 1. Initialize Python Environment
Navigate to the backend directory and create a dedicated virtual environment:

```bash
cd ../CreatistBackend
python3 -m venv venv

# Activate on macOS/Linux:
source venv/bin/activate

# Activate on Windows:
# venv\Scripts\activate
```

### 2. Install Requirements
Ensure you have the latest dependencies installed within your `venv`:

```bash
pip install -r requirements.txt
```

### 3. Backend Configuration
Copy the provided environment template and fill in your Supabase and SMTP secrets:

```bash
cp .env.example .env
```

### 4. Run the Backend
```bash
python main.py
```

---

## 🏗 Build & Production

To create an optimized production build of the web app:

```bash
npm run build
npm start
```

##  Tech Stack
- **Framework**: [Next.js 14+](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
