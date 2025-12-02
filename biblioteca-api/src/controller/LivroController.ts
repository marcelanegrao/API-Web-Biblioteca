import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Livro } from "../entity/Livro";

export class LivroController {
    private livroRepository = AppDataSource.getRepository(Livro);

    async create(req: Request, res: Response) {
        const { titulo, autor, isbn, anoPublicacao, disponivel } = req.body;

        if (!titulo || !autor || !isbn || anoPublicacao === undefined || disponivel === undefined) {
            return res.status(400).json({ message: "Todos os campos (titulo, autor, isbn, anoPublicacao, disponivel) são obrigatórios." });
        }

        const existingLivro = await this.livroRepository.findOneBy({ isbn });
        if (existingLivro) {
            return res.status(409).json({ message: "ISBN já cadastrado no sistema." });
        }

        const livro = this.livroRepository.create({
            titulo, autor, isbn, anoPublicacao, disponivel
        });

        await this.livroRepository.save(livro);
        return res.status(201).json(livro);
    }

    async getAll(req: Request, res: Response) {
        const livros = await this.livroRepository.find();
        return res.json(livros);
    }

    async getOne(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        
        // lógica de Negócio
        if (isNaN(id)) {
            return res.status(400).json({ message: "O ID deve ser um número válido." });
        }

        const livro = await this.livroRepository.findOneBy({ id });

        if (!livro) {
            return res.status(404).json({ message: "Livro não encontrado." });
        }
        return res.json(livro);
    }

    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const updateData = req.body;

        const livro = await this.livroRepository.findOneBy({ id });

        if (!livro) {
            return res.status(404).json({ message: "Livro não encontrado." });
        }

        this.livroRepository.merge(livro, updateData);

        await this.livroRepository.save(livro);
        return res.json(livro);
    }

    async remove(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        
        const livroToRemove = await this.livroRepository.findOneBy({ id });

        if (!livroToRemove) {
            return res.status(404).json({ message: "Livro não encontrado." });
        }

        await this.livroRepository.remove(livroToRemove);
        return res.status(204).send();
    }
}