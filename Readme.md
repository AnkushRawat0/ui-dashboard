# 💰 Financial Dashboard

A modern, responsive dashboard for managing financial documents. Built with **Next.js**, **React**, and **Tailwind CSS**.

![Dashboard Screenshot](./public/screenshot.png) <!-- Replace with actual screenshot -->

---

## ✨ Features

- 📁 View and manage financial documents
- 🛠️ Perform actions like export, archive, and delete
- 📊 Clean UI with Tailwind CSS
- 🔄 Easy to extend and customize

---

## ⚙️ Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

---

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/financial-dashboard.git
   cd financial-dashboard

2. **Install dependencies**
    npm install
    # or
    yarn install

3.**Run the development server**
npm run dev
# or
yarn dev

4.Open http://localhost:3000 in your browser to see the application.




📁 Project Structure

financial-dashboard/
├── app/                  # Next.js App Router
│   ├── globals.css       # Global styles
│   ├── layout.jsx        # Root layout
│   └── page.jsx          # Main dashboard page
├── components/           # React components
│   ├── action-bar.jsx    # Document actions toolbar
│   ├── documents-table.jsx # Table displaying documents
│   ├── header.jsx        # Application header
│   ├── search-bar.jsx    # Search functionality
│   └── sidebar.jsx       # Navigation sidebar
├── public/               # Static assets
└── tailwind.config.js    # Tailwind CSS configuration