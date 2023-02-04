import { describe, expect, test, } from 'vitest';
import { addUser, isUserExist, getUser } from '../users.repository';

describe.skip('are users exist', () => {
    test('should check if user exists by username, need to return true', async () => {
        const username = 'shmuel';
        expect(await isUserExist(username)).toBe(true);
    });
    test('should check if user exists by username, need to return false', async () => {
        const username = 'testFake1234!$@34sdfs$@#32$#@SFSGH^$%T';
        expect(await isUserExist(username)).toBe(false);
    });
    test('should check if user exists by email, need to return true', async () => {
        const mail = 'email.email@gmail.com';
        expect(await isUserExist(mail)).toBe(true);
    });
    test('should check if user exists by email, need to return false', async () => {
        const mail = 'testFake1234!$@34sdfs$@#32$#@SFSGH^$%T';
        expect(await isUserExist(mail)).toBe(false);
    });
});

describe.skip('adding users', () => {
    test.skip('should add user', async () => {
        const random = Math.random();
        const username = `test${random}`;
        const email = `mail.test${random}@test.com`;
        const password = 'testPassword';
        expect(await addUser({ username, email, password })).containSubset({ username, email, password });
    });
    test('should not add the user, already has this username', async () => {
        const username = 'shmuel';
        const email = 'emadsfsfdsfl@gmsjdkfhakjdajscom';
        const password = 'test';
        await expect(addUser({ username, email, password })).rejects.toThrow(/username/)
    });
    test('should not add the user, already has this mail', async () => {
        const username = 'majdfbaksduel';
        const email = 'email.email@gmail.com';
        const password = 'test';
        await expect(addUser({ username, email, password })).rejects.toThrow(/mail/)
    });
});

describe.skip('getting users', () => {
    test('get one user', async () => {
        const username = 'shmuel';
        const email = 'email.email@gmail.com';
        const password = 'testPassword';
        const user = {username, email, password};
        expect(await getUser(user)).containSubset(user);
    });
    test('should not give any user', async () => {
        const username = 'emadsfsfdsfl@gmsjdkfhakjdajscom';
        const email = 'emadsfsfdsfl@gmsjdkfhakjdajscom';
        const password = 'password-test';
        const user = {username, email, password};
        await expect(getUser(user)).rejects.toThrow(/exist/)
    });
    test('only one property is right, should not give any user', async () => {
        const username = 'shmuel';
        const email = 'emadsfsfdsfl@gmsjdkfhakjdajscom';
        const password = 'password-test';
        const user = {username, email, password};
        await expect(getUser(user)).rejects.toThrow(/exist/)
    });
});


