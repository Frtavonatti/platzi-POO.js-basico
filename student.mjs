export class Student {
    constructor({
      name,
      email,
      username,
      twitter = undefined,
      instagram = undefined,
      facebook = undefined,
      approvedCourses = [],
      learningPaths = [],
    }) {
      this.name = name;
      this.email = email;
      this.username = username;
      this.socialMedia = {
        twitter,
        instagram,
        facebook,
      };
      this.approvedCourses = approvedCourses;
      this.learningPaths = learningPaths;
    }
}

class FreeStudent extends Student{
    constructor(props) {
        super(props); 
    }

    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn(`Lo sentimos ${this.name}, solo puedes tomar cursos gratis `)
        }
    }
}

class BasicStudent extends Student{
    constructor(props) {
        super(props); 
    }

    approveCourse(newCourse){
        if (newCourse.lang !== 'English') {
            this.approvedCourses.push(newCourse)
        }
        else {
            console.warn(`Lo sentimos ${this.name}, no puedes tomar cursos en Ingles`)
        }
    }
}

class ExpertStudent extends Student{
    constructor(props) {
        super(props); 
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse)
    }
}

const juan2 = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ],
});
  
const miguelito2 = new BasicStudent({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
});