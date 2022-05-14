class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);//передаем сообщение в родительский конструктор
        this.errors = errors;
        this.status = status;
    }

    static UnauthorizedError() {
        return new ApiError(401, 'Пользователь не авторизован')
    }

    static BadRequest(message, errors = []) {//ошибка на случай плохих данных отправленых на сервер
        return new ApiError(400, message, errors);
    }
}

export default ApiError;
