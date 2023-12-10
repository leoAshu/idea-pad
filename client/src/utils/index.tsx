const formatDateToCustomString = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
    }
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", options).format(date)
}

const getInitials = (name: string) => {
    return name.split(" ")[0][0] + name.split(" ")[1][0]
}

export { formatDateToCustomString, getInitials }
