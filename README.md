# Superhero Database Frontend
[Live Demo](https://superherod.netlify.app/)
A simple and visually appealing React.js frontend for browsing superheroes using the public Superhero API.  
Features include browsing superheroes with pagination, searching by name, sorting by name, and viewing full details of each superhero.

---

## Features

- Browse a paginated list of superheroes  
- Search superheroes by name (partial or exact match)  
- Sort superheroes by name (ascending / descending)  
- View detailed information for each superhero  
- Responsive UI built with Tailwind CSS  

---

## Technologies Used

- React.js 
- Tailwind CSS  
- Axios or Fetch API for HTTP requests  

---

## Getting Started

Follow the instructions below to run this project locally.

### Prerequisites

- Node.js (v14 or above recommended)  
- npm or yarn package manager  

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Foysal79/superhero_DB.git
cd superhero_DB

```
2 . Install dependencies:
```bash
npm install
```
or
```bash
yarn install
```
### Running the App Locally

Start the development server:
```bash
npm start
```
or
```bash
yarn start
```

### Build for Production
Create an optimized production build:

```bash
npm run build
```
or
```bash
yarn build
```
---
## API Reference

### List API

`https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records`

Supports the following query parameters:

- **page** (integer): Page number (default: 1)  
- **perPage** (integer): Number of records per page (default: 5)  
- **filter** (string): Filter syntax, for example, `name~'Spider'` to perform a partial name match  
- **sort** (string): Sort by `name` (ascending) or `-name` (descending)  



### Details API

`https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records/{id}`

Replace `{id}` with the superhero's unique ID to fetch detailed information about that superhero.

---

## Contact

**Foysal Nur Ontor Shikder**  
GitHub: [https://github.com/Foysal79](https://github.com/Foysal79)  
Email: *foysal.nur.onthor@gmail.com*

