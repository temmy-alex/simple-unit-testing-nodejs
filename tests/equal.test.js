test("test toBe", () => {
    let firstName = "User"
    let greeting = `Hello ${firstName}`

    expect(greeting).toBe("Hello User")
})

test("test toEquals", () => {
    let person = {id: "user001"}
    Object.assign(person, {name: "User"})

    expect(person).toEqual({id: "user001", name: "User"})
})