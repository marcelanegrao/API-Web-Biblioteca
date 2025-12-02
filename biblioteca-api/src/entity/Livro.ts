import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Livro {
    @PrimaryGeneratedColumn()
    id: number; // [cite: 8]

    @Column()
    titulo: string; // [cite: 9]

    @Column()
    autor: string; // [cite: 10]

    @Column()
    isbn: string; // [cite: 11]

    @Column()
    anoPublicacao: number; // [cite: 12]

    @Column()
    disponivel: boolean; // [cite: 13]
}