// ENV
const env = 'production' // 'development' or 'production'

// WXAPP VERSION
const version = 2.0

// development and production host
const hosts = {
    development: 'http://localhost:3020',
    production: 'https://www.learningwang.top/books/'
}

// apis
const api = {
    user: {
		/**
		 * login api
		 * need header:
		 * {
		 *   'x-wechat-code': code,
		 *   'x-wechat-encrypted': encryptedData,
		 *   'x-wechat-iv': iv
		 * }
		 */
        hootBooks: {
            method: 'GET',
            url: '/getHotBooks/'
        },
        login: {
            method: 'GET',
            url: '/weChatLogin/'
        },
        info: {
            method: 'GET',
            url: '/user/info'
        },
        blog: {
            method: 'GET',
            url: '/v2/user'
        }
    },
    common: {
        hootBooks: {
            method: 'GET',
            url: 'getHotBooks/'
        },
        recommend: {
            method: 'GET',
            url: '/findEveryDayBooks/'
        },
        classify: {
            method: 'GET',
            url: '/findBookTypeById/'
        }
    },
    blog: {
        list: {
            method: 'GET',
            url: '/v2/blogs'
        },
        detail: {
            method: 'GET',
            url: '/v2/blogs'
        },
        like: {
            method: 'POST',
            url: '/blog/like'
        },
        delete: {
            method: 'POST',
            url: '/blog/delete'
        },
        imageUpload: {
            method: 'POST',
            url: '/blog/image'
        },
        new: {
            method: 'POST',
            url: '/v2/blogs'
        },
        comment: {
            method: 'POST',
            url: '/v2/comments'
        },
        deleteComment: {
            method: 'DELETE',
            url: '/v2/comments'
        }
    },
    notifications: {
        count: {
            method: 'GET',
            url: '/v2/notifications'
        },
        messages: {
            method: 'GET',
            url: '/v2/notifications/messages'
        },
        read: {
            method: 'PUT',
            url: '/v2/notifications'
        }
    },
    ads: {
        method: 'GET',
        url: '/v2/ads'
    },
    configs: {
        method: 'GET',
        url: '/v2/configs'
    }
}

module.exports = {
    env,
    version,
    api: disposeUrl(api, hosts[env])
}

function disposeUrl(obj, prefix) {
    Object.keys(obj).forEach(v => {
        if (obj[v].url) {
            obj[v].url = prefix + obj[v].url
        } else {
            obj[v] = disposeUrl(obj[v], prefix)
        }
    })

    return obj
}
