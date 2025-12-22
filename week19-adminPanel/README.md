# 🧩 Modern Admin Dashboard
A modern admin panel built with React and provides a seamless management experience with real-time data, intuitive UI, and powerful tools for enterprise applications.

## 🚀 Features

- ⚡ **Vite + React** setup for ultra-fast development
- 🎨 **TailwindCSS** v4.1 for utility-first styling
- 📋 **Formik + Yup** for handling the forms of the project
- **React Query** for smart data synchronization
- **Axios** for HTTP requests with interceptors
- **Swagger** Integration for API documentation
- ➕ Add new product
- ✏️ Edit existing products
- 🗑️ Delete product
- 🔔 toast notifications
- 🔍 Search products

## 🎯 Upcomming features
1. Dashboard widgets
2. Product categories & filtering
3. Sorting products (price, inventory, newest)
4. delete multiple products
5. theme Switching
6. Responsive UI
7. Role-Based Access Control
8. Refactor the state management



## 🧠 Project Structure
```
├── src/
│ ├── components/
│ │ └── Dashboard/
| | | └── Layout.jsx
| | | └── Navbar.jsx
| | | └── ProductsHeader.jsx
| | | └── ProductsPagination.jsx
| | | └── ProductsTable.jsx
| | | └── ProductsTableRow.jsx
│ │ └── Modal/
| | | └── Modal.jsx
| | | └── DeleteProductModal.jsx
| | | └── InputModal.jsx
| | | └── ProductModalForm.jsx
| | | └── RenderModalContent.jsx
| | | └── ProductsTableRow.jsx
│ │ └── AuthInput.jsx
│ │ └── EmptyState.jsx
│ │ └── ErrorMessage.jsx
│ │ └── Form.jsx
│ │ └── Loader.jsx
│ │ └── Search.jsx
│ ├── context/
│ │ └── AuthContent.jsx
│ ├── pages/
│ │ ├── auth/
│ │ |   └──  Login.jsx
│ │ |   └──  Register.jsx
│ │ └── Dashboard.jsx
│ │ └── NotFound.jsx
│ ├── routes/
│ │ └── AppRoutes.jsx
│ │ └── ProtectedRoute.jsx
│ ├── utils/
│ │ └── authFormSchema.js
│ │ └── httpErrorCodes.js
│ │ └── modalFormSchema.js
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx

```

## 📦 Installation

```bash
# Clone this repo
git clone https://github.com/sadranafe/sadranafe-bootcamp.git

# Move into the project folder
cd sadranafe-bootcamp
cd week19-adminPanel

# Install dependencies
npm install

# Start the development server
npm run dev

```


```
# for using Swagger
npm start
```

built with ❤️ by sadra nafe