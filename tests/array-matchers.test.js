test("arrayMatchers", () => {
    const names = ["Rakamin", "Academy"]
    expect(names).toContain("Rakamin")
    expect(names).toEqual(["Rakamin", "Academy"])

    // Array of Object
    const people = [{name: "User 1"}, {name: "User 2"}]
    expect(people).toContainEqual({name: "User 1"})
    expect(people).toEqual([{name: "User 1"}, {name: "User 2"}])
}) 