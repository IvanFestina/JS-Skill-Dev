import {student} from "../02/02";
import {studentType} from "../02/02";

export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill(student: studentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}