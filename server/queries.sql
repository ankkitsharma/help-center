CREATE TABLE card (
    id SERIAL PRIMIARY KEY,
    title VARCHAR,
    description VARCHAR,
    created_at TIMESTAMP Default CURRENT_TIMESTAMP,
    updated_at TIMESTAMP Default CURRENT_TIMESTAMP
)

INSERT INTO card (title, description) VALUES ($1, $2)