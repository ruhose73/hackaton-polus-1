//! SIGNIN (REQ)
/**
 * @swagger
 * components:
 *   schemas:
 *     SigninReq:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - phone
 *       properties:
 *          email:
 *              type: string
 *              description: User email
 *          password:
 *              type: string
 *              description: User password
 *          phone:
 *              type: string
 *              description: User phone
 *       example:
 *         email: mail@mail.ru
 *         password: qwerty1234
 *         phone: 89999998899
 */

//! SIGNIN AND LOGIN (RES)
/**
 * @swagger
 * components:
 *   schemas:
 *     SigninLoginRes:
 *       type: object
 *       required:
 *         - token
 *         - expire
 *       properties:
 *          token:
 *              type: string
 *              description: User bearer token
 *          expire:
 *              type: string
 *              description: time to token expire in milliseconds
 *       example:
 *         token: "token"
 *         expire: "1800"
 */
