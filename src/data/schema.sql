CREATE TABLE room (
    id INTEGER PRIMARY KEY AUTOINCREMENT;
    name TEXT NOT NULL,
    floor INTEGER NOT NULL,
    maxConcurrentGames INTEGER NOT NULL,
    notes TEXT NOT NULL DEFAULT ""
    is_disabled BOOLEAN NOT NULL DEFAULT 1
)

# Husk relasjontabell mellom rom og event_pulje (har 3x keys compined som FK)