# Kanban Board

Kanban Board is a task management application designed to help teams and individuals organize their work visually. The board allows users to create, track, and manage tasks through different stages of completion using columns.

## Table of Contents
- [Overview](#overview)
- [Preview](#preview)
- [Link](#link)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development](#development)
- [Public Info](#public-info)
- [Acknowledgment](#acknowledgments)

### Overview
The Kanban Board project is aimed at providing a simple yet powerful tool for task management. With an intuitive drag-and-drop interface, users can easily manage tasks across various stages of a project. The board is built using modern web technologies, ensuring a responsive and efficient user experience.

### Preview
![](/public/boardtodo.png)

### Links

- Solution URL: [Github Repository](https://github.com/Hemazyn/todo-advanced)
- Live Site URL: [Netlify Link](https://boardtodo.netlify.app)

### Features
- **Task Management**: Create, edit, and delete tasks.
- **Column Customization**: Add, edit, and remove columns.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Persistent Data**: Tasks and board states are saved locally or can be integrated with a backend service.

### Project Structure
``` plaintext
└── 📁todo_board
    └── .DS_Store
    └── .eslintrc.cjs
    └── .gitignore
    └── README.md
    └── index.html
    └── package-lock.json
    └── package.json
    └── postcss.config.js
    └── 📁public
        └── boardtodo.png
        └── vite.svg
    └── 📁src
        └── .DS_Store
        └── App.jsx
        └── 📁Hooks
            └── useDarkMode.jsx
        └── 📁assets
            └── favicon-32x32.png
            └── icon-add-task-mobile.svg
            └── icon-board.svg
            └── icon-check.svg
            └── icon-chevron-down.svg
            └── icon-chevron-up.svg
            └── icon-cross.svg
            └── icon-dark-theme.svg
            └── icon-hide-sidebar.svg
            └── icon-light-theme.svg
            └── icon-show-sidebar.svg
            └── icon-vertical-ellipsis.svg
            └── logo-dark.svg
            └── logo-light.svg
            └── logo-mobile.svg
        └── 📁components
            └── Center.jsx
            └── Column.jsx
            └── ElipsisMenu.jsx
            └── EmptyBoard.jsx
            └── Header.jsx
            └── HeaderDropdown.jsx
            └── Sidebar.jsx
            └── Subtask.jsx
            └── Task.jsx
        └── 📁data
            └── data.json
        └── index.css
        └── main.jsx
        └── 📁modals
            └── AddEditBoardModal.jsx
            └── AddEditTaskModal.jsx
            └── DeleteModal.jsx
            └── TaskModal.jsx
        └── 📁redux
            └── boardsSlice.js
            └── store.js
    └── tailwind.config.js
    └── vite.config.js
```

### Installation
To set up the Kanban Board project locally, follow these steps:

#### Prerequisites
- Node.js (>= 14.x)
- npm (>= 6.x)
#### Steps
1. Clone the repository:
``` sh
git clone https://github.com/Hemazyn/todo-advanced
cd kanban-board
```
2. Install dependencies:
``` sh
npm install
```
Development
To start the development server, run:

``` sh
npm run dev
```
This will launch Vite and serve the project at http://localhost:5173

### Public Info
- Website - [Emmanuel Tofumi](https://devemma.netlify.app)
- Twitter - [@imanuel_tofunmi](https://twitter.com/imanuel_tofunmi)

### Acknowledgments
- Special thanks to the creators of [ViteJs](https://vitejs.dev), [React](https://react.dev) and [Tailwind CSS](https://tailwindcss.com).

Feel free to customize the `README.md` as needed to better fit your project specifics and personal preferences.
