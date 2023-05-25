const loginRules = {
    username: [
        (v: string) => !!v || "Username is required",
    ],
    password: [
        (v: string) => !!v || "Password is required",
        (v: string) => v.length >= 2 || "Password must be greater than 8 characters", // TODO: Change to 8 characters (2 for testing)
    ],
}


export default loginRules;