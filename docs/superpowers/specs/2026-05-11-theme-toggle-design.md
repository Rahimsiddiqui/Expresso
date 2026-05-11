# Theme Management Design

## Overview
Implement a global theme management system using React Context. This will solve the `ReferenceError` in `page.jsx` and provide a robust way to toggle dark mode across the entire application.

## Components

### 1. ThemeContext (`src/context/ThemeContext.jsx`)
- **State**: `theme` ('light' | 'dark').
- **Persistence**: Save to `localStorage`.
- **Side Effect**: Toggle the `.dark` class on the `<html>` element.
- **Hydration**: Handle the transition from server to client to avoid mismatch.

### 2. ThemeProvider Wrapper
- Wrap the application in `src/app/layout.jsx`.

### 3. Navbar Integration
- Import `Sun` and `Moon` icons from `lucide-react`.
- Toggle button that calls `toggleTheme()` from context.

## Verification Plan
- **Unit Tests**: Test `ThemeContext` logic (toggle, persistence).
- **Manual Test**: Click toggle, verify `localStorage` updates, verify `dark` class on `html`, verify CSS variables change.
