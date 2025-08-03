#approach description

I use chatgpt to generate the seed dataset and I use VS Code copilot to assist with code completion. I have completed of creating almost all the endpoints.

# Base URL
The base URL for the API is `https://engineering-resource-management-api.onrender.com`.

# api documentation
## Endpoints
## authentication
- `POST /api/auth/login`: Authenticate user and return JWT token.
- `GET /api/auth/profile`: Get user profile information.

## Engineers
- `GET /api/engineers`: Get a list of all engineers.
- `GET /api/engineers/:id/capacity`: Get capacity details of a specific engineer.

## Projects
- `GET /api/projects`: Get a list of all projects.
- `POST /api/projects`: Create a new project.
- `GET /api/projects/:id`: Get details of a specific project.

## Assignments
- `GET /api/assignments`: Get a list of all assignments.
