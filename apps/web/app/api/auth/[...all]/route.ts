import { auth, toNextJsHandler } from "@modules/authentication/server"

export const { POST, GET } = toNextJsHandler(auth);