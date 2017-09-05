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
        userInfo: {
            method: 'GET',
            url: '/getUserInfoById/'
        },
        editInfo: {
            url: '/finishUserInfo/',
            method: 'PUT'
        },
        findPersonalBooks: {
            url: '/findPersonalBooks/',
            method: 'GET'
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
        },
        search: {
            method: 'GET',
            url: '/findBooksByKey/'
        },
        classifyById: {
            method: 'GET',
            url: '/getBooksByTypeid/'
        },
        bookCount: {
            method: 'GET',
            url: '/getBookCaseById/'
        },
        relevant: {
            method: 'GET',
            url: '/getRelativeBooks/'
        },
        getChatMessage: {
            method: 'GET',
            url: '/getChatMessage/'
        }


    },
    lendBook: {
        getLendBooks: {
            method: 'GET',
            url: '/getLendBooks/'
        },
        getBooksFromCar: {
            url: '/getBooksFromCar/',
            method: 'GET'
        },
        isInCar: {
            url: '/isCarTheBook/',
            method: 'GET'
        },
        insertToCar: {
            url: '/insertToCart/',
            method: 'POST'
        },
        deleteBooksFromCar: {
            url: '/deleteBooksFromCar/',
            method: 'DELETE'
        },
        reBorrow: {
            url: '/renewTheBook/',
            method: 'PUT'
        }
    },
    collectBook: {
        getCollectBook: {
            method: 'GET',
            url: '/getCollectBooks/'
        },
        isCollect: {
            method: 'POST',
            url: '/isCollectTheBook/'
        },
        insertOrDeleteCollect: {
            method: 'POST',
            url: '/insertOrDeleteCollect/'
        },
        deleteCollectBooks: {
            method: 'DELETE',
            url: '/deleteCollectBooks/'
        }

    },
    appointBook: {
        getAppointBook: {
            method: 'GET',
            url: '/getAppointBooks/'
        },
        isAppoint: {
            method: 'POST',
            url: '/isAppointTheBook/'
        },
        addSendBookMsg: {
            method: 'POST',
            url: '/addSendBookMsg/'
        },
        addAAppointment: {
            method: 'POST',
            url: '/addAAppointment/'
        },
        cancleAppointBooks: {
            url: '/cancleAppointBooks/',
            method: 'PUT'
        },
        cancelSendBookMsg:{
            url: '/cancelSendBookMsg/',
            method: 'DELETE'
        }
    },
    message: {
        getSendBooks: {
            method: 'GET',
            url: '/getSendBooks/'
        },
        getAllRecentOutDateBooks: {
            method: 'GET',
            url: '/getAllRecentOutDateBooks/'
        },
        getAllOutDateBooks: {
            method: 'GET',
            url: '/getAllOutDateBooks/'
        }
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
