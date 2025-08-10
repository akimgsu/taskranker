# Blueprint for the Angular Todo Application

## Overview
This Angular application is a simple todo list manager. It allows users to add new tasks, mark them as complete, and delete them. The application categorizes tasks by difficulty (Easy, Medium, Hard) based on keywords in their descriptions.

## Project Outline

### Initial Version Features:
*   **Task Input:** Users can input new task descriptions.
*   **Task List Display:** Tasks are displayed in a list format, showing their description, completion status, and difficulty.
*   **Task Completion Toggle:** Users can mark tasks as complete or incomplete.
*   **Task Deletion:** Users can remove tasks from the list.
*   **Difficulty Categorization:** Tasks are automatically assigned a difficulty level (Easy, Medium, Hard) based on keywords in the description.
*   **Standalone Components:** All components are standalone.
*   **OnPush Change Detection:** All components use `ChangeDetectionStrategy.OnPush`.
*   **Native Control Flow:** Uses `@if`, `@for`, and `@switch` for template control flow.
*   **Material Design:** Uses Angular Material components for UI elements.
*   **Signal-based State Management:** Utilizes Angular signals for reactive state management.

### Current Features:
*   All features from the initial version.

### Styling and Design:
*   Modern and clean UI design.
*   Visually distinct difficulty tags for tasks (Easy: green, Medium: yellow, Hard: orange/red).
*   Completed tasks are visually differentiated with a strikethrough and muted color.
*   Material Design components are used for consistency.
*   Responsive layout for various screen sizes.

## Plan for Current Change: Separating Component Files

### Objective:
To improve maintainability by separating the inline template and styles of `TodoListComponent` into dedicated `.html` and `.css` files, respectively.

### Steps:

1.  **Move `TodoListComponent`'s inline template to `src/app/todo-list/todo-list.component.html`:**
    *   Read the content of `src/app/todo-list/todo-list.component.ts`.
    *   Extract the `template` string.
    *   Write the extracted template string to `src/app/todo-list/todo-list.component.html`.
2.  **Move `TodoListComponent`'s inline styles to `src/app/todo-list/todo-list.component.css`:**
    *   Extract the `styles` array content from `src/app/todo-list/todo-list.component.ts`.
    *   Join the array elements into a single string.
    *   Write the joined style string to `src/app/todo-list/todo-list.component.css`.
3.  **Update `TodoListComponent` to use external files:**
    *   Modify `src/app/todo-list/todo-list.component.ts` to replace `template` with `templateUrl: './todo-list.component.html'` and `styles` with `styleUrls: ['./todo-list.component.css']`.
4.  **Run `ng build` to verify the changes.**
