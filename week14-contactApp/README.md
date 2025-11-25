# 🧩 Contact APP

A modern and minimal **Contact App** built with **React** and **TailwindCSS** to efficiently handle adding, editing, searching, and deleting contacts.    

## 🚀 Features

- ⚡ **Vite + React** setup for ultra-fast development  
- 🎨 **TailwindCSS v4.1** for utility-first styling  
- ➕ **Add new contacts**
- ✏️ **Edit existing contacts**
- 🗑️ **Delete contacts**
- 🔔 **Custom toast notifications**
- 🔍 **Search contacts by name or email**

## 📌 Project Versions Overview
### Version 1 — Basic State Management (useState + Prop Drilling)
In the first version of the project, state was managed locally inside each component using useState. To update or share data between components, props were passed down multiple levels, which introduced unnecessary coupling and complexity.
- Heavy use of multiple useState hooks
- Prop drilling across several component layers

### Version 2 — Centralized State Management (Context API + useReducer)
In the second version, the state management architecture was fully refactored.
All global state and related logic were centralized using Context API and useReducer, providing a cleaner, scalable, and more predictable structure.
- No more prop drilling
- State managed in a single, predictable reducer
- Shared state accessible across the project via Context
- A clean initialState + structured action types
- Clear separation between logic and UI

### Version 2.1.0 — Form validation Refactor (current version)
This update focuses on fully upgrading and restructuring the form validation system:
- Change manual validation to formik + yup
- Improve form handling flow
- Enhance resuability accross from components
- More accurate and stable error handling and input state management

## 🧠 Project Structure
```
src
│
├── components
│ |
| ├── Context
| | ├── ContactAppContext.jsx
│ |
| ├── reducers
| | ├── ContactAppReducer.jsx
│ |
| ├── contact
│ │ ├── Contact.jsx
│ │ ├── ContactApp.jsx
│ │ └── ContactAvatar.jsx
│ │
│ └── contactPanel
│ ├── ContactsHeaderPanel.jsx
│ ├── ContactsMainPanel.jsx
│ ├── ContactsPanel.jsx
│ ├── EmptyState.jsx
│ ├── ErrorMessage.jsx
│ ├── Model.jsx
│ ├── ModelInput.jsx
│ ├── SearchBar.jsx
│ ├── SideBar.jsx
│ ├── Sort.jsx
│ └── Toast.jsx
│
├── utils
│ └── contactAppEditSchema.js
│
├── App.jsx
├── index.css
└── main.jsx
```

## 📦 Installation

```bash
# Clone this repo
git clone https://github.com/sadranafe/sadranafe-bootcamp.git

# Move into the project folder
cd sadranafe-bootcamp
cd week14-contactApp

# Install dependencies
npm install

# Start the development server
npm run dev

```
