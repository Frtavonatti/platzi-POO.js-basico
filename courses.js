export class Course {
    constructor({
      name,
      classes = [],
      isFree = false,
      lang = 'Spanish'
    }) {
      this._name = name;
      this.classes = classes;
      this.isFree = isFree;
      this.lang = lang;    
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      if (newName === "Curso Malito de Programación Básica") {
        console.error("Web... no");
      } else {
        this._name = newName; 
      }
    }
}