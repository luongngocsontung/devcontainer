# PlayStation Project

A monorepo built with Nx containing NestJS API and ReactJS client applications for the PlayStation project.

## 🏗️ Project Structure

```
playstation/
├── apps/
│   ├── api/           # Main NestJS API application
│   ├── client/        # ReactJS client application
│   └── api-e2e/       # End-to-end tests for the API
├── .devcontainer/     # Development container configuration
└── package.json       # Root package.json with workspace configuration
```

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

| Variable      | Description                          | Default       | Required |
| ------------- | ------------------------------------ | ------------- | -------- |
| `PORT`        | Port number for the API server       | `3000`        | No       |
| `ENV`         | Environment (development/production) | `development` | No       |
| `DB_HOST`     | PostgreSQL database host             | -             | Yes      |
| `DB_PORT`     | PostgreSQL database port             | -             | Yes      |
| `DB_USER`     | PostgreSQL database username         | -             | Yes      |
| `DB_PASSWORD` | PostgreSQL database password         | -             | Yes      |
| `DB_NAME`     | PostgreSQL database name             | -             | Yes      |
| `HOST`        | Host for the API server              | `localhost`   | Yes      |

### Example `.env` file:

```env
PORT=3000
ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=password
DB_NAME=playstation
HOST=localhost
```

## 🚀 Getting Started

### Prerequisites

- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- [VS Code](https://code.visualstudio.com/) with the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### 1. Start Development Container

1. **Open the project in VS Code**

   ```bash
   code .
   ```

2. **Start the Dev Container**

   - When prompted, click "Reopen in Container" or
   - Press `Cmd/Ctrl + Shift + P` and run "Dev Containers: Reopen in Container"

3. **Environment File Setup**
   - The devcontainer will automatically copy your `.env` file to `.devcontainer/.env`
   - This allows the docker-compose configuration to access your environment variables
   - Make sure you have a `.env` file in the root directory before starting the container

### 2. Install Dependencies

Once inside the devcontainer, install the project dependencies:

```bash
npm install
```

### 3. Run the Project

To run all applications in the monorepo:

```bash
npm run dev:all
```

This command will:

- Start the main API application (`apps/api`) on port 3000
- Start the React client application (`apps/client`) on port 4200
- Watch for file changes and automatically restart services
- Run all applications in parallel

## 🛠️ Available Scripts

### Root Level Scripts

```bash
# Development
npm run dev:all          # Run all applications (API + Client)
npm run dev:api          # Run only the API application
npm run dev:client       # Run only the client application

# Build
npm run build:all        # Build all applications
npm run build:api        # Build only the API application
npm run build:client     # Build only the client application

# Testing
npm run test:all         # Run tests for all applications
npm run test:api         # Run tests for the API application
npm run test:client      # Run tests for the client application

# Linting
npm run lint:all         # Lint all applications
npm run lint:api         # Lint the API application
npm run lint:client      # Lint the client application
```

### Nx Commands

```bash
# List all available targets
npx nx show projects

# Run a specific target for a project
npx nx [target] [project]

# Generate new components/modules
npx nx generate @nx/nest:controller [name] --project=api
npx nx generate @nx/nest:service [name] --project=api
npx nx generate @nx/react:component [name] --project=client
npx nx generate @nx/react:page [name] --project=client
```

## 🗄️ Database

The project uses PostgreSQL as the database. Make sure you have:

1. **PostgreSQL running** (either locally or in a container)
2. **Database created** with the name specified in your `.env` file
3. **Correct credentials** in your `.env` file

### Database Configuration

- The API application uses TypeORM for database management
- In development mode, `synchronize: true` is enabled (auto-creates tables)
- Make sure your database is accessible from the devcontainer

### Client Configuration

- The React client uses Vite as the build tool
- Development server runs on port 4200 by default
- Hot module replacement (HMR) is enabled for fast development
- The client is configured to work with the API running on port 3000

## 🧪 Testing

```bash
# Run unit tests
npx nx test api
npx nx test client

# Run e2e tests
npx nx e2e api-e2e

# Run tests with coverage
npx nx test api --coverage
npx nx test client --coverage
```

## 📁 Project Structure Details

### API Application (`apps/api/`)

- **Main entry point**: `src/main.ts`
- **Configuration**: Uses `@nestjs/config` for environment variables
- **Database**: TypeORM with PostgreSQL
- **Modules**:
  - `AppModule`: Main application module
  - `ScenariosModule`: Business logic module

### Client Application (`apps/client/`)

- **Main entry point**: `src/main.tsx`
- **Framework**: React 19 with TypeScript
- **Build tool**: Vite
- **Routing**: React Router DOM
- **Styling**: SCSS support
- **Testing**: Jest with React Testing Library

### E2E Tests (`apps/api-e2e/`)

- **Test setup**: `src/support/test-setup.ts`
- **Global setup**: `src/support/global-setup.ts`
- **Global teardown**: `src/support/global-teardown.ts`

## 🔍 Troubleshooting

### Dev Container Issues

- **Container won't start**: Check if Docker is running and you have sufficient resources
- **Environment variables not working**: Ensure `.env` file exists in the root directory
- **Port conflicts**: Check if ports 3000 (API) and 4200 (Client) are available
- **Client not accessible**: Ensure the client is configured to bind to `0.0.0.0` in devcontainer

### Database Issues

- **Connection refused**: Verify PostgreSQL is running and accessible
- **Authentication failed**: Check database credentials in `.env`
- **Database not found**: Create the database with the name specified in `DB_NAME`

### TypeScript/Decorator Issues

- **Decorator errors**: The project uses legacy decorators, ensure `experimentalDecorators: true` in tsconfig
- **Build errors**: Run `npm install` to ensure all dependencies are installed

## 📝 Development Notes

- The project uses **Nx** for monorepo management
- **NestJS** is used for the API framework
- **React 19** with **TypeScript** is used for the client application
- **Vite** is used as the build tool for the client
- **TypeORM** handles database operations
- **PostgreSQL** is the primary database
- Development container provides a consistent environment across different machines

## 📄 License

This project is licensed under the MIT License.
