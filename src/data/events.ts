import { Event } from "@/types/Events";

export const testEvents: Event[] = [
    {
        id: "event-001",
        title: "Dungeons & Dragons: Den svarte myren",
        description:
            "Et nybegynnervennlig D&D-eventyr med fokus på utforskning og rollespill.",
        metadata: {
            createdAt: "2026-05-19T08:00:00Z",
            updatedAt: "2026-05-19T08:00:00Z",
            authorId: "author-001",
            type: "roleplaying-game",
            subtype: "D&D 5e",
            durationHours: 4,
            maxPlayers: 5,
            audience: "teens",
            beginnerFriendly: true,
            englishFriendly: true,
            roomId: "room-1",
            floor: 7
        },
        slots: ["friday-evening", "saturday-morning"],
        media: {
            coverImage: "/game.png",
            previewImage: "/game.png",
        },
        content: [
            "Landsbyen Dunmere har blitt stille etter at merkelige lys ble observert ute i myrområdene. Eventyrere må undersøke hva som har skjedd og avdekke sannheten bak forsvinningene.",
            "Denne sesjonen fokuserer tungt på rollespill og historiefortelling. Spillere oppfordres til å samhandle med NPC-er, løse mysterier og tenke kreativt.",
            "Kamp vil forekomme, men er ikke hovedfokus. Spillet passer både nye og erfarne spillere, og ferdige karakterark vil være tilgjengelige.",
            "Ta gjerne med egne terninger hvis du har, men ekstra sett vil være tilgjengelig ved bordet.",
        ],
    },

    {
        id: "event-002",
        title: "Dungeons & Dragons: Den svarte myren",
        description:
            "Et nybegynnervennlig D&D-eventyr med fokus på utforskning og rollespill.",
        metadata: {
            createdAt: "2026-05-18T12:00:00Z",
            updatedAt: "2026-05-18T15:00:00Z",
            authorId: "author-002",
            type: "board-game",
            subtype: "Terraforming Mars",
            durationHours: 5,
            maxPlayers: 4,
            audience: "adults",
            beginnerFriendly: false,
            englishFriendly: true,
            roomId: "room-4",
            floor: 7
        },
        slots: ["saturday-evening"],
        media: {
            coverImage: "/game.png",
            previewImage: "/game.png",
        },
        content: [
            "Spillere konkurrerer i en strukturert Terraforming Mars-turnering med Prelude-utvidelsen.",
            "Rundene vil være tidsbegrenset for å sikre god flyt gjennom hele arrangementet.",
            "Deltakere må møte opp minst 15 minutter før start for registrering og oppsett.",
        ],
    },

    {
        id: "event-003",
        title: "Magic: The Gathering Commander Night",
        description:
            "Casual multiplayer Commander pods with rotating tables throughout the evening.",
        metadata: {
            createdAt: "2026-05-15T09:00:00Z",
            updatedAt: "2026-05-16T10:00:00Z",
            authorId: "author-003",
            type: "card-game",
            subtype: "MTG Commander",
            durationHours: 6,
            maxPlayers: 20,
            audience: "all",
            beginnerFriendly: true,
            englishFriendly: true,
            roomId: "room-2",
            floor: 7
        },
        slots: ["friday-evening"],
        media: {
            coverImage: "/game.png",
            previewImage: "/game.png",
        },
        content: [
            "Bring your favorite Commander deck and join casual multiplayer games throughout the evening.",
            "This event is focused on social and relaxed gameplay rather than strict competition. Power-level conversations are encouraged before each pod starts.",
            "New players are welcome, and some loaner decks will be available for people who want to try the format for the first time.",
            "Trades are allowed in the social area outside active game tables.",
        ],
    },

    {
        id: "event-004",
        title: "Call of Cthulhu: Shadows of Bergen",
        description:
            "A horror investigation scenario inspired by coastal Norwegian folklore.",
        metadata: {
            createdAt: "2026-05-12T14:00:00Z",
            updatedAt: "2026-05-13T09:00:00Z",
            authorId: "author-001",
            type: "roleplaying-game",
            subtype: "Call of Cthulhu",
            durationHours: 3,
            maxPlayers: 6,
            audience: "adults",
            beginnerFriendly: true,
            englishFriendly: false,
            roomId: "room-7",
            floor: 7
        },
        slots: ["saturday-evening"],
        media: {
            coverImage: "/game.png",
            previewImage: "/game.png",
        },
        content: [
            "A fishing village outside Bergen has reported impossible sightings near the harbor during the night tide. Investigators are sent to uncover what is hiding beneath the cold waters.",
            "This scenario emphasizes tension, atmosphere, and investigation over combat. Players should expect unsettling discoveries and difficult moral decisions.",
            "No prior experience with Call of Cthulhu is required. Rules explanations will be provided during play.",
        ],
    },

    {
        id: "event-005",
        title: "Carcassonne Family Session",
        description:
            "Relaxed introduction to Carcassonne for families and younger players.",
        metadata: {
            createdAt: "2026-05-10T10:00:00Z",
            updatedAt: "2026-05-10T10:00:00Z",
            authorId: "author-004",
            type: "board-game",
            subtype: "Carcassonne",
            durationHours: 2,
            maxPlayers: 5,
            audience: "all",
            beginnerFriendly: true,
            englishFriendly: true,
            roomId: "room-1",
            floor: 6
        },
        slots: ["sunday-morning"],
        media: {
            coverImage: "/game.png",
            previewImage: "/game.png",
        },
        content: [
            "Learn the basics of Carcassonne in a relaxed and friendly environment suitable for all ages.",
            "The session will include short teaching rounds followed by full games once everyone understands the mechanics.",
            "Parents and children are encouraged to play together.",
        ],
    },

    {
        id: "event-006",
        title: "Cyberpunk RED: Neon Ashes",
        description:
            "High-intensity cyberpunk mission with hacking, combat, and corporate intrigue.",
        metadata: {
            createdAt: "2026-05-11T18:00:00Z",
            updatedAt: "2026-05-14T08:00:00Z",
            authorId: "author-005",
            type: "roleplaying-game",
            subtype: "Cyberpunk RED",
            durationHours: 5,
            maxPlayers: 5,
            audience: "adults",
            beginnerFriendly: false,
            englishFriendly: true,
            roomId: "room-3",
            floor: 6
        },
        slots: ["friday-night"],
        media: {
            coverImage: "/game.png",
            previewImage: "/game.png",
        },
        content: [
            "Night City never sleeps, and neither do the corporations hunting your crew. After a stolen data shard surfaces on the black market, a desperate fixer hires the team to retrieve it before the city erupts into violence.",
            "Players can expect a mix of tactical combat, hacking encounters, negotiation, and exploration of morally gray choices.",
            "This game assumes some familiarity with tabletop RPG systems, though experienced players will help newer participants understand the rules.",
            "Character sheets and dice will be provided if needed.",
        ],
    },

    {
        id: "event-007",
        title: "Uno Chaos Championship",
        description:
            "Fast-paced Uno tournament with custom house rules and elimination brackets.",
        metadata: {
            createdAt: "2026-05-17T16:00:00Z",
            updatedAt: "2026-05-18T08:30:00Z",
            authorId: "author-003",
            type: "card-game",
            subtype: "Uno",
            durationHours: 3,
            maxPlayers: 24,
            audience: "all",
            beginnerFriendly: true,
            englishFriendly: true,
            roomId: "room-1",
            floor: 0
        },
        slots: ["saturday-afternoon"],
        media: {
            coverImage: "/game.png",
            previewImage: "/game.png",
        },
        content: [
            "Classic Uno is already chaotic, but this tournament introduces rotating house rules every round.",
            "Expect sudden reversals, stacked penalties, and dramatic table reactions as players battle their way through elimination brackets.",
            "Prizes will be awarded to finalists and to the player voted most entertaining by the crowd.",
        ],
    },

    {
        id: "event-008",
        title: "Root Strategy Workshop",
        description:
            "Advanced Root tactics and faction coaching for intermediate players.",
        metadata: {
            createdAt: "2026-05-08T13:00:00Z",
            updatedAt: "2026-05-09T11:00:00Z",
            authorId: "author-002",
            type: "board-game",
            subtype: "Root",
            durationHours: 4,
            maxPlayers: 6,
            audience: "teens",
            beginnerFriendly: false,
            englishFriendly: true,
            roomId: "room-2",
            floor: 0
        },
        slots: ["sunday-afternoon"],
        media: {
            coverImage: "/game.png",
            previewImage: "/game.png",
        },
        content: [
            "This workshop focuses on advanced faction strategy, counterplay, and table politics in Root.",
            "Experienced players will demonstrate openings, scoring opportunities, and common tactical mistakes for each faction.",
            "Participants are encouraged to ask questions throughout the session and discuss previous games and experiences.",
        ],
    },

    {
        id: "event-009",
        title: "Kids Pokémon Card Meetup",
        description:
            "Friendly Pokémon card games and trading session for younger attendees.",
        metadata: {
            createdAt: "2026-05-06T08:00:00Z",
            updatedAt: "2026-05-06T08:00:00Z",
            authorId: "author-006",
            type: "card-game",
            subtype: "Pokémon TCG",
            durationHours: 2,
            maxPlayers: 16,
            audience: "all",
            beginnerFriendly: true,
            englishFriendly: false,
            roomId: "room-3",
            floor: 6
        },
        slots: ["sunday-morning"],
        media: {
            coverImage: "/game.png",
            previewImage: "/game.png",
        },
        content: [
            "A welcoming space for younger Pokémon fans to play games, learn rules, and trade cards safely.",
            "Volunteers will help explain gameplay basics and assist new players with deck setup and match flow.",
            "Parents are welcome to stay and participate during the event.",
        ],
    },

    {
        id: "event-010",
        title: "The Great Board Game Marathon",
        description:
            "An all-day social board game event with rotating tables and mixed genres.",
        metadata: {
            createdAt: "2026-05-01T07:00:00Z",
            updatedAt: "2026-05-15T19:00:00Z",
            authorId: "author-004",
            type: "board-game",
            subtype: "Mixed Games",
            durationHours: 10,
            maxPlayers: 40,
            audience: "all",
            beginnerFriendly: true,
            englishFriendly: true,
            roomId: "room-6",
            floor: 7
        },
        slots: ["saturday-full-day"],
        media: {
            coverImage: "/game.png",
            previewImage: "/game.png",
        },
        content: [
            "Join a full day of board gaming featuring classics, modern strategy games, party games, and cooperative experiences. Tables will rotate throughout the day to encourage participants to meet new people and try different genres.",
            "The marathon is designed to be flexible. Players can drop in for individual games or stay for the entire event. Staff members will help organize groups based on interest and experience level.",
            "Several featured games will be highlighted during the day, including quick teaching sessions and scheduled showcase rounds for larger titles.",
            "Food and drink breaks are planned between major sessions, and nearby social areas will remain open for discussion and casual play.",
            "This is intended to be one of the largest social events of the weekend and is ideal for both experienced hobby gamers and curious newcomers.",
        ],
    },
]