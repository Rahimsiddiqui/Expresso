# Design Spec - Custom Control Colors

Apply semantic colors to the Recording and Paused states in the Controls component for better visual feedback.

## User Review Required

> [!IMPORTANT]
> This change modifies the visual state of the primary recording controls.

- None

## Proposed Changes

### Controls UI
#### `src/components/Controls.jsx`
- Update the mapping logic to apply status-specific colors when active.
- **Recording State:** `bg-red-500 text-white`
- **Paused State:** `bg-amber-500 text-white`
- Maintain existing layout and transition properties.

## Verification Plan

### Manual Verification
1. Click "Record": Verify background turns red and text turns white.
2. Click "Pause": Verify background turns amber and text turns white.
3. Verify hover states still work for inactive buttons.
4. Verify layout remains stable during state transitions.
