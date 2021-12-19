type LessonType = {
    title: string
}
type ManType = {
    name: string,
    age: number,
    lessons: Array<{title: string}>
    address: { street: {title: string} }
}

let props: ManType
beforeEach(() => {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: "Nezavisimosti st."
            }
        }
    }
})

test('', () => {

    // const age = props.age;
    // const lessons = props.lessons;
    const {age, lessons} = props
    const {title} = props.address.street

    expect(age).toBe(32);
    expect(lessons.length).toBe(2)
    expect(title).toBe('Nezavisimosti st.')
})

export default value