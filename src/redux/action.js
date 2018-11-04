export const USER_LOGIN = 'USER_LOGIN';

/**
 * Login user
 * @param {*} user 
 */
export const logUserState = ( user ) => ({
    type: USER_LOGIN,
    payload: user
});