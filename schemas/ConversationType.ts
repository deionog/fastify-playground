import { type Static, Type } from '@sinclair/typebox'

export const Conversation = Type.Object({
    avatar: Type.String(),
    firstName: Type.String(),
    lastName: Type.String(),
    mostRecentMessage: Type.Object({
        content: Type.String(),
        timestamp: Type.Number(),
        userId: Type.Number(),
    }),
    totalMessages: Type.Number(),
    userId: Type.Number(),
})

export const ConversationList = Type.Array(Conversation)

export type ConversationType = Static<typeof Conversation>
