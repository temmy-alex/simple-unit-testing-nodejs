test("stringMatchers", () => {
    const name = "Rakamin Academy"
    // == 
    // "2" == 2 -> ini yang dilakukan function toBE

    // "2" === 2 // hasilnya false -> ini yang dilakukan function toEqual
    expect(name).toBe("Rakamin Academy")
    expect(name).toEqual("Rakamin Academy")
    // Regex (Regular Expression)
    expect(name).toMatch(/Raka/) // mirip dengan query LIKE %amin%
})