class Tools {
    getRandomText(length) {
        return [...Array(length + 10)]
            .map((value) => (Math.random() * 1000000).toString(36))
            .join('').substring(0, length)
    }
}

export default new Tools();