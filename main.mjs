import { Course } from "./courses.js"
import { LearningPath } from "./learningPaths.js"
import { Student, FreeStudent, BasicStudent, ExpertStudent} from "./student.js"


function videoPlay(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se está reproduciendo desde la url " + urlSecreta);
}

function videoStop(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
}
  
export class PlatziClass {
    constructor({
      name,
      videoID,
    }) {
      this.name = name;
      this.videoID = videoID;
    }
  
    reproducir() {
      videoPlay(this.videoID);
    }
    pausar() {
      videoStop(this.videoID);
    }
}


// CURSOS

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
  isFree: true,
});

const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});

const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
  lang: 'English',
});

export { cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML }



// ESCUELAS

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [
    cursoProgBasica,
    cursoDefinitivoHTML,
    cursoPracticoHTML,
  ],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [
    cursoProgBasica,
    "Curso DataBusiness",
    "Curso Dataviz",
  ],
});

const escuelaVgs = new LearningPath({
  name: "Escuela de Vidweojuegos",
  courses: [
    cursoProgBasica,
    "Curso de Unity",
    "Curso de Unreal",
  ],
})



// ESTUDIANTES

const juan = new FreeStudent({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});

const miguelito = new BasicStudent({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});