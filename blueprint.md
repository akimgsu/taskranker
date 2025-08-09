# Blueprint

## Project Overview:
This application is a simple todo list that allows users to add tasks, get an AI-generated difficulty ranking for each task, and mark tasks as complete. Tasks will be color-coded based on their difficulty.

## Style Guide

### Visual Design & Aesthetics

This application aims for a modern, visually appealing, and intuitive user experience. The following principles guide the design:

1.  **Fonts**: Use expressive and relevant typography. Emphasize font sizes for clarity (e.g., hero text, headlines, keywords). The primary font is the default Material Design font (Roboto).
2.  **Color**: Employ a vibrant and energetic color palette.
    *   **Primary Action Color**: `#3f51b5` (Indigo) for buttons and key elements.
    *   **Warn/Delete Color**: Material's `warn` color (a shade of red) for delete actions.
    *   **Difficulty Colors**:
        *   Easy: `#4CAF50` (Green)
        *   Medium: `#FFC107` (Amber)
        *   Hard: `#FF5722` (Deep Orange)
3.  **Visual Effects**: Utilize multi-layered drop shadows to create a sense of depth. Cards (`mat-card`) have a `box-shadow` of `0 4px 8px rgba(0,0,0,0.1)` and a `border-radius` of `8px` to appear "lifted" and modern.
4.  **Iconography**: Incorporate Material Design icons to enhance user understanding. The `delete` icon is used for removing tasks.
5.  **Interactivity**: Interactive elements have clear feedback. List items change background color on hover, and buttons use Material Design's built-in ripple effects.
6.  **Layout**: The layout is clean and responsive, with balanced spacing. Content is centered within a container with a `max-width` of `800px` for optimal readability on larger screens.

## Detailed Outline (Features Implemented):
*   **Initial Version:**
    *   Basic Angular project setup.
    *   No specific features implemented yet.

## Current Requested Change: Implement Todo List with AI Difficulty Ranking

### Plan Overview:
The plan is to create a todo list application using Angular, where users can add tasks, and an AI will rank the difficulty of each task. The tasks will be displayed with color coding based on their difficulty, and users can mark tasks as complete. Angular Material will be used for the UI components.

### Phased Implementation Plan:

#### Phase 1: Project Setup and Initial Component Structure
*   Create `blueprint.md` file.
*   Add Angular Material to the project.
*   Create a `Task` interface to define the structure of a task.
*   Create a `TodoService` to manage tasks (add, mark complete, etc.).
*   Create a `TodoListComponent` to display the list of tasks.
*   Create a `TaskInputComponent` for adding new tasks.
*   Integrate `TaskInputComponent` and `TodoListComponent` into `AppComponent`.
*   Set up basic routing (if necessary, though for a simple todo, it might not be initially).

#### Phase 2: AI Integration for Difficulty Ranking
*   Implement a method in `TodoService` that simulates AI ranking (initially, this can be a placeholder that returns a random difficulty).
*   Integrate this AI ranking into the task creation process.

#### Phase 3: Angular Material UI and Styling
*   Apply Angular Material components to `TaskInputComponent` (e.g., `mat-form-field`, `mat-button`).
*   Apply Angular Material components to `TodoListComponent` (e.g., `mat-list`, `mat-checkbox`, `mat-card`).
*   Implement color coding for tasks based on difficulty using CSS.

#### Phase 4: Refinement and Error Handling
*   Review and refactor code for adherence to best practices (signals, `OnPush`, control flow).
*   Add basic error handling and user feedback.
*   Run `ng build` to check for compilation errors and fix them.
