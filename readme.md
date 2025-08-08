# 📝 Todo App

> A modern, responsive todo application built with TypeScript for efficient task management.

[![Made with TypeScript](https://img.shields.io/badge/Made%20with-TypeScript-blue.svg)](https://www.typescriptlang.org/)
[![HTML5](https://img.shields.io/badge/HTML-5-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS-3-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)

## ✨ Features

- ➕ **Add Tasks** - Create new todos with a clean interface
- ✏️ **Edit Tasks** - Modify existing tasks inline
- 🗑️ **Delete Tasks** - Remove completed or unwanted tasks
- ☑️ **Toggle Completion** - Mark tasks as done/undone
- 📊 **Real-time Stats** - Track total, completed, and pending tasks
- 🎨 **Visual Feedback** - Strike-through and opacity changes for completed tasks
- 🧹 **Clear All** - Remove all tasks with one click
- 📱 **Responsive Design** - Works on all device sizes

## 🚀 Demo

![Todo App Demo](./demo.gif)

*Add a screenshot or GIF of your app here*

## 🛠️ Technologies

| Technology | Purpose |
|------------|---------|
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) | Type-safe development |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Markup structure |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Styling and layout |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | DOM manipulation |

## 📁 Project Structure

```
todo-app/
├── 📄 index.html          # Main HTML file
├── 🎨 styles.css          # Styling
├── 📝 script.ts           # TypeScript source
├── ⚙️ script.js           # Compiled JavaScript
├── 📖 README.md           # Documentation
└── 📸 assets/             # Images and demos
    ├── demo.gif
    └── screenshot.png
```

## ⚡ Quick Start

### Prerequisites

- 🌐 Modern web browser
- 📝 Code editor (VS Code recommended)
- 🔧 TypeScript compiler (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

2. **Open in browser**
   ```bash
   # Simply double-click index.html
   # or serve with live server
   npx serve .
   ```

3. **For TypeScript development** (optional)
   ```bash
   # Install TypeScript globally
   npm install -g typescript
   
   # Compile TypeScript to JavaScript
   tsc script.ts
   
   # Watch for changes
   tsc script.ts --watch
   ```

## 📚 Usage Guide

### Adding a New Task
1. Type your task in the input field
2. Press **Enter** or click **Submit**
3. Your task appears at the top of the list

### Managing Tasks
| Action | Method |
|--------|---------|
| **Complete** | ☑️ Click the checkbox |
| **Edit** | ✏️ Click "Edit" button |
| **Delete** | 🗑️ Click "Delete" button |
| **Clear All** | 🧹 Use clear function |

### Statistics Panel
- 📊 **Total**: All tasks count
- ✅ **Completed**: Finished tasks
- ⏳ **Pending**: Remaining tasks

## 🔧 Code Overview

### Core Interface
```typescript
interface Todo {
    id: number;
    todo: string;
    completed: boolean;
}
```

### Key Functions
| Function | Purpose |
|----------|---------|
| `handleSubmit()` | Adds new tasks |
| `appendTodo()` | Creates DOM elements |
| `deleteTodo()` | Removes tasks |
| `editTodo()` | Modifies existing tasks |
| `updateStats()` | Updates statistics |
| `clearTodos()` | Clears all tasks |

## 🎨 Customization

### Styling
Edit `styles.css` to customize:
- 🎨 **Colors**: Change theme colors
- 🔤 **Typography**: Modify fonts and sizes
- 📱 **Layout**: Adjust spacing and responsive breakpoints
- 🌙 **Dark Mode**: Add theme switching

### Functionality
Extend `script.ts` for:
- 💾 **Local Storage**: Persist data
- 🏷️ **Categories**: Task grouping
- 📅 **Due Dates**: Add deadlines
- 🔍 **Search**: Filter tasks
- ⭐ **Priority**: Task importance

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 60+ | ✅ Fully supported |
| Firefox | 55+ | ✅ Fully supported |
| Safari | 11+ | ✅ Fully supported |
| Edge | 79+ | ✅ Fully supported |

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes
   ```bash
   git commit -m 'Add: amazing feature'
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
