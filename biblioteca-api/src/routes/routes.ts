import { Router } from "express";
import { LivroController } from "../controller/LivroController";

const router = Router();
const controller = new LivroController();

// Mapeamento dos Endpoints

// Criar Livro (POST /api/livros)
router.post("/livros", (req, res) => controller.create(req, res));

// Ler Todos (GET /api/livros)
router.get("/livros", (req, res) => controller.getAll(req, res));

// Ler por ID (GET /api/livros/{id})
router.get("/livros/:id", (req, res) => controller.getOne(req, res));

// Atualizar (PUT /api/livros/{id})
router.put("/livros/:id", (req, res) => controller.update(req, res));

// Excluir (DELETE /api/livros/{id})
router.delete("/livros/:id", (req, res) => controller.remove(req, res));

export default router;