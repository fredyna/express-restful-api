import {prismaClient} from "../src/application/database.js";
import bcrypt from "bcrypt";

export const removeTestUser = async () => {
    await prismaClient.user.deleteMany({
        where: {
            username: 'test'
        }
    });
}

export const createTestUser = async () => {
    await prismaClient.user.create({
        data: {
            username: "test",
            password: await bcrypt.hash("secret", 10),
            name: "Test Name",
            token: "test"
        }
    })
}

export const getTestUser = async () => {
    return prismaClient.user.findUnique({
        where: {
            username: 'test'
        }
    });
}

export const removeAllTestContact = async () => {
    return prismaClient.contact.deleteMany({
        where: {
            username: 'test'
        }
    });
}

export const createTestContact = async () => {
   return prismaClient.contact.create({
       data: {
           username: "test",
           first_name: "Test",
           last_name: "Name",
           email: "test@test.com",
           phone: "0890000001"
       }
   })
}

export const getTestContact = async () => {
    return prismaClient.contact.findFirst({
       where: {
           username: 'test'
       }
    });
}