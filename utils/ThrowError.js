module.exports = error => {
    let msg = {}

    /**
     * Error from model
     */
    if (error.errors) {
        error.errors.forEach(({ message, path }) => {
            msg[path] = message
        })
    } else
        msg.error = {
            message: error.message,
        }

    return msg
}
