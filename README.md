# POC BunJS Monorepo

A full-stack TypeScript monorepo using Bun, featuring a React frontend and Elysia backend with shared types.

## 🏗️ Project Structure

```
poc-bunjs/
├── apps/
│   ├── backend/          # Elysia API server
│   └── frontend/         # React + Vite app
├── packages/
│   └── shared/           # Shared TypeScript types
└── docker-compose.yml    # Development environment
```

## 🚀 Quick Start

### Prerequisites
- [Bun](https://bun.sh) installed locally
- Docker and Docker Compose (for containerized development)

### Local Development (without Docker)

```bash
# Install dependencies
bun install

# Run backend (port 5000)
cd apps/backend
bun run dev

# Run frontend (port 5173)
cd apps/frontend
bun run dev
```

### Docker Development Environment

```bash
# Start both services with hot reload
docker-compose up

# Start in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop everything
docker-compose down

# Rebuild if dependencies change
docker-compose up --build
```

**Services:**
- Backend: http://localhost:5000
- Frontend: http://localhost:5173

## 📦 Technology Stack

### Backend
- **Runtime**: Bun
- **Framework**: Elysia
- **CORS**: @elysiajs/cors

### Frontend
- **Build Tool**: Vite
- **Framework**: React 19
- **Router**: TanStack Router
- **State**: TanStack Query
- **Language**: TypeScript

### Shared
- Shared TypeScript types between frontend and backend

## 🐳 Production Deployment

### Backend
```bash
cd apps/backend
docker build -t poc-bunjs-backend .
docker run -p 5000:5000 poc-bunjs-backend
```

### Frontend
```bash
cd apps/frontend
docker build -t poc-bunjs-frontend .
docker run -p 80:80 poc-bunjs-frontend
```

The frontend uses nginx for optimal static file serving with:
- Gzip compression
- Static asset caching
- SPA routing support
- Security headers

## 📝 Scripts

### Backend
- `bun run dev` - Start development server with hot reload

### Frontend
- `bun run dev` - Start Vite dev server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint

## 🔧 Configuration

### Environment Variables

Create `.env` files as needed:

**Frontend** (`apps/frontend/.env`):
```
VITE_API_URL=http://localhost:5000
```

**Backend** (`apps/backend/.env`):
```
NODE_ENV=development
PORT=5000
```

## 📋 Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/).

AI assistants (e.g., Copilot) must follow this format when generating commit messages.