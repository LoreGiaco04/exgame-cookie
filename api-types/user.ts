export type User = {

    _id: string;
    name: string;
    surname: string;
    
    password: string;
    created_at: string;
    updated_at: string;


    /*
    Può assumere i valori:
     - admin
     - teacher
     - student
     */
    role: "admin" | "teacher" | "student";

    image?: string;

    subjects?: string[];
    classes?: string[];
    student_class?: string;
}