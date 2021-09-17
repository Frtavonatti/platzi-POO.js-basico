import { Comment } from "./comment.js";

class Student {
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

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: 'Student',
        })
        comment.publicar()
    }
}

class FreeStudent extends Student {
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

class BasicStudent extends Student {
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

class ExpertStudent extends Student {
    constructor(props) {
        super(props); 
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse)
    }
}

class TeacherStudent extends Student {
    constructor(props) {
        super(props); 
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse)
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: 'Teacher',
        })
        comment.publicar()
    }
}


export { Student, FreeStudent, BasicStudent, ExpertStudent, TeacherStudent };