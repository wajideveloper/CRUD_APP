import userReducer, { addUser, updateUser, deleteUser } from "./UserReducer";
import { userList } from "./Data";

describe("userSlice", () => {
    it("should return the initial state", () => {
        expect(userReducer(undefined, {})).toEqual(userList);
    });

    it("should handle addUser", () => {
        const newUser = { id: 5, name: "New User", email: "newuser@example.com" };
        const expectedState = [...userList, newUser];
        
        const action = addUser(newUser);
        const state = userReducer(userList, action);

        expect(state).toEqual(expectedState);
    });

    it("should handle updateUser", () => {
        const updatedUser = { id: 1, name: "Arif", email: "wajid@gmail.com" };
        const expectedState = [
            { id: 1, name: "Arif", email: "wajid@gmail.com" },
            { id: 2, name: "Majid", email: "majid@gmail.com" },
            { id: 3, name: "ibrahim", email: "abc@gmail.com" },
            { id: 4, name: "john", email: "mygmail@gmail.com" }
        ];

        const action = updateUser(updatedUser);
        const state = userReducer(userList, action);

        // expect(state).toEqual(expectedState);
    });

    it("should handle deleteUser", () => {
        const userIdToDelete = { id: 1 };
        const expectedState = [
            { id: 2, name: "Majid", email: "majid@gmail.com" },
            { id: 3, name: "ibrahim", email: "abc@gmail.com" },
            { id: 4, name: "john", email: "mygmail@gmail.com" }
        ];

        const action = deleteUser(userIdToDelete);
        const state = userReducer(userList, action);

        expect(state).toEqual(expectedState);
    });
});