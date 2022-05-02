export const jsonplaceholder = 'https://jsonplaceholder.typicode.com/'

export const client = async (endPoint, {body, ...customConfig}) => {
    const headers = {
        'Content-Type': 'application/json',
    }

    const config = {
        method: body ? 'POST' : 'GET',
        ...customConfig,

        headers: {
            ...headers,
            ...customConfig.headers,
        }
    }

    if (body) config.body = JSON.stringify(body)

    try {
        const response = await fetch(endPoint, config)

        if (!response.ok) throw new Error('failed fetch')

        const data = await response.json()

        return data
    } catch (e) {
        return Promise.reject(e.message)
    }
}

// Дополнительно
client.get = function (endPoint, customConfig = {}) {
    return client(endPoint, customConfig)
}

client.post = function (endPoint, body, customConfig = {}) {
    return client(endPoint, {...customConfig, body})
}

client.delete = function (endPoint, customConfig = {}) {
    return client(endPoint, {...customConfig, method: 'DELETE'})
}

client.patch = function (endPoint, body, customConfig = {}) {
    return client(endPoint, {...customConfig, body, method: 'PATCH'})
}