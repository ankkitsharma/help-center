CREATE TABLE card (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    created_at TIMESTAMP Default CURRENT_TIMESTAMP,
    updated_at TIMESTAMP Default CURRENT_TIMESTAMP
)

INSERT INTO card (title, description) VALUES ($1, $2)

SELECT * FROM card

SELECT * FROM card WHERE title = '${title}'