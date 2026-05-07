CREATE TABLE room (
    id INTEGER PRIMARY KEY AUTOINCREMENT;
    name TEXT NOT NULL,
    floor INTEGER NOT NULL,
    maxConcurrentGames INTEGER NOT NULL
)

# Husk relasjontabell mellom rom og event_pulje (har 3x keys compined som FK)