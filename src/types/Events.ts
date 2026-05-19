type GameType = "board-game" | "roleplaying-game" | "card-game"

type Audience = "adults" | "teens" | "all"

export interface Event {
    id: string
    title: string
    description: string
    metadata: {
        createdAt: string
        updatedAt: string
        authorId: string
        type: GameType
        subtype: string
        durationHours: number
        maxPlayers: number
        audience: Audience
        beginnerFriendly: boolean
        englishFriendly: boolean
        roomId: string
    }
    slots: string[]
    media: {
        coverImage: string
        previewImage: string
    }
    content: string[]
}