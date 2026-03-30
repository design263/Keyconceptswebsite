# Keyconcepts Backend

## Folder Structure

- `src/config` Mongo connection
- `src/controllers` Route handlers
- `src/middlewares` Auth, upload, validation, error handler
- `src/models` Mongoose schemas
- `src/routes` Modular API routes
- `src/utils` Helpers and admin seed script
- `src/resumes` Uploaded resume files

## Run

1. `cd backend`
2. `npm install`
3. Copy `.env.example` to `.env` and update values.
4. `npm run seed:admin`
5. `npm run dev`

## API Routes

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/jobs`
- `GET /api/jobs/:id`
- `POST /api/jobs` (protected)
- `PUT /api/jobs/:id` (protected)
- `PATCH /api/jobs/:id` (protected)
- `DELETE /api/jobs/:id` (protected)
- `POST /api/applications` (multipart with `resume`)
- `GET /api/applications` (protected)
- `GET /api/applications/resume/:fileName` (protected)
- `DELETE /api/applications/:id` (protected)
- `POST /api/contact-leads`
- `GET /api/contact-leads` (protected)
- `DELETE /api/contact-leads/:id` (protected)


> Optional: set `ADMIN_REGISTRATION_KEY` in `.env` to restrict who can register admins.
