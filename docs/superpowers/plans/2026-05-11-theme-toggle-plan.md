# Implementation Plan - Theme Toggle

Implement global theme management with React Context to fix ReferenceError and enable dark mode.

## User Review Required

> [!IMPORTANT]
> I will be creating a new directory `src/context` for the theme state.

- None

## Proposed Changes

### Theme Context
#### [NEW] `src/context/ThemeContext.jsx`
- Create `ThemeContext` and `ThemeProvider`.
- Initialize theme from `localStorage` inside `useEffect` to avoid SSR issues.
- `toggleTheme` function to switch between 'light' and 'dark'.
- `useEffect` to apply/remove `.dark` class on `document.documentElement`.

### Layout Integration
#### `src/app/layout.jsx`
- Import `ThemeProvider` and wrap `{children}`.

### Cleanup & Fixes
#### `src/app/page.jsx`
- Remove broken `useState` and `localStorage` logic.
- Simplify to just return `Navbar` (or content).

### Navbar UI
#### `src/components/Navbar.jsx`
- Use `useTheme` hook from context.
- Render `Sun` or `Moon` icon from `lucide-react`.
- Style toggle button for better UX.

## Verification Plan

### Automated Tests
- No existing test framework detected (checked directory structure). I will focus on manual verification unless requested to setup vitest/jest.

### Manual Verification
1. Load app: confirm no ReferenceError.
2. Click toggle icon in Navbar.
3. Verify `<html>` element gets `dark` class.
4. Verify colors change (background becomes `#031427`).
5. Refresh page: verify theme persists from `localStorage`.
