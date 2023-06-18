> 16 - Jun - 2023

# Assignment - 3

# Cow-Hut-Backend | [Server Url][link]

<br />

## User CRUD Operations:-

| Operation    | Api End Point's       |
| ------------ | --------------------- |
| POST         | /api/v1`/auth/signup` |
| GET - All    | /api/v1`/users`       |
| GET - Single | /api/v1`/users/:id`   |
| PATCH        | /api/v1`/users/:id`   |
| DELETE       | /api/v1`/users/:id`   |

<br />

## Cows CRUD Operations:-

| Operation    | Api End Point's    |
| ------------ | ------------------ |
| POST         | /api/v1`/cows`     |
| GET - All    | /api/v1`/cows`     |
| GET - Single | /api/v1`/cows/:id` |
| PATCH        | /api/v1`/cows/:id` |
| DELETE       | /api/v1`/cows/:id` |

<br />

## Pagination and Filtering routes of Cows

- api/v1/cows?pag=1`&`limit=10
- api/v1/cows?sortBy=price`&`sortOrder=asc
- api/v1/cows?location=Chattogram
  <!-- - api/v1/cows?minPrice=20000&maxPrice=70000 -->
  <!-- - api/v1/cows?searchTerm=Cha -->

[link]: www
