import {studentType} from "../02/02";
import {addSkill} from "./03";


let student: studentType;
beforeEach(() => {
    student = {
    name: 'Dimych',
    age: 32,
    isActive: false,
    address: {
        streetTitle: 'Surganova 2',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'React'
        }
    ]

}
})

test('new tech skill should be added to student', () => {
    addSkill(student, 'JS')
})