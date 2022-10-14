const bcryptjs = require("bcryptjs");
const ApiStatus = require("../handlers/apiStatus")
const db = require('../config/database')
const AuthDTO = require("../dto/authDTO");
const TokenService = require("./tokenService");


class AuthService {

    async signin(email, password, phone) {
        try {
            const qwer = await db.query("SELECT * FROM users")
            console.log(qwer)
            const candidate = await db.query("SELECT id FROM users WHERE email = $1 OR phone = $2", [email, phone])
            console.log(candidate)
            if (candidate.rows.length > 0) {
                throw ApiStatus.badRequest("Пользователь с таким email или nickname уже существует");
            }
            const hashedPassword = await bcryptjs.hash(password, 5);
            const user = await db.query("INSERT INTO users (email, password, phone) VALUES ($1,$2,$3) RETURNING *", [email, hashedPassword, phone])
            const authDTO = new AuthDTO(user.rows[0]);
            const token = TokenService.generateToken({ ...authDTO });
            return token;
        } catch (e) {
            throw ApiStatus.internal(e.message);
        }
    }

    async login(email, password, phone) {
        try {
            const user = await db.query("SELECT * FROM users WHERE email = $1 OR phone = $2", [email, phone])
            const isPassEquals = await bcryptjs.compare(password, user.rows[0].password);
            if (!isPassEquals) {
                throw ApiStatus.badRequest("Неверные данные");
            }
            const authDTO = new AuthDTO(user.rows[0]);
            const token = TokenService.generateToken({ ...authDTO });
            return token;
        } catch (e) {
            throw ApiStatus.internal(e.message);
        }
    }

    async logout(accessToken) {
        try {
            const userData = TokenService.validateAccessToken(accessToken)
            if (!userData) {
                throw ApiStatus.UnauthorizedError();
            }
            return null;
        } catch (e) {
            throw ApiStatus.internal(e.message);
        }
    }

    async refresh(accessToken) {
        try {
            const userData = TokenService.validateAccessToken(accessToken)
            if (!userData) {
                throw ApiStatus.UnauthorizedError();
            }
            const user = await db.query("SELECT * FROM users WHERE email = $1", [userData.email])
            const authDTO = new AuthDTO(user.rows[0]);
            const token = TokenService.generateToken({ ...authDTO });
            return token;
        } catch (e) {
            throw ApiStatus.internal(e.message);
        }
    }
    
}

module.exports = new AuthService();