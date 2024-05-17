// // import { createSlice } from "@reduxjs/toolkit";
// import userSlice, { addUser, updateUser, deleteUser } from "./UserReducer";
// import { userList } from "./Data";

// // Mock data for testing
// const initialUsers = [
//     { id: 1, name: "wajid shah", email: "wajid1233@example.com" },
//     { id: 2, name: "rori palwan", email: "palwan@example.com" },
// ];

// describe("userSlice", () => {
//     it("should return the initial state", () => {
//         expect(userSlice(undefined, {})).toEqual(userList);
//     });

//     it("should handle addUser", () => {
//         const newUser = { id: 3, name: "New User", email: "newuser@example.com" };
//         const expectedState = [...initialUsers, newUser];
        
//         const action = addUser(newUser);
//         const state = userSlice(initialUsers, action);

//         expect(state).toEqual(expectedState);
//     });

//     it("should handle updateUser", () => {
//         const updatedUser = { id: 1, name: "Updated John Doe", email: "updatedjohn@example.com" };
//         const expectedState = [
//             { id: 1, name: "Updated John Doe", email: "updatedjohn@example.com" },
//             { id: 2, name: "Jane Doe", email: "jane@example.com" },
//         ];

//         const action = updateUser(updatedUser);
//         const state = userSlice(initialUsers, action);

//         expect(state).toEqual(expectedState);
//     });

//     it("should handle deleteUser", () => {
//         const userIdToDelete = { id: 1 };
//         const expectedState = [{ id: 2, name: "Jane Doe", email: "jane@example.com" }];

//         const action = deleteUser(userIdToDelete);
//         const state = userSlice(initialUsers, action);

//         expect(state).toEqual(expectedState);
//     });
// });