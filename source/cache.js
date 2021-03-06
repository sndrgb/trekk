const interval = 1000
let iteration = 0

export default compute => {
	let cached
	let next

	return () => {
		if (next !== iteration) {
			next = iteration
			cached = compute()
		}

		return cached
	}
}

export const clear = () => {
	iteration++
}

setInterval(() => {
	iteration++
}, interval)
