export type AuthenticatedRequest = {
    email: string
    password: string
}

export type RegisterRequest = AuthenticatedRequest & {
    confirm_password: string
    full_name: string
}