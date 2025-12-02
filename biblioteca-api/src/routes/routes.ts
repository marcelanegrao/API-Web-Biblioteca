import { Router } from "express";
import { LivroController } from "../controller/LivroController";

const router = Router();
const controller = new LivroController();

// mapeamento endpoints

// criar os livros 
router.post("/livros", (req, res) => controller.create(req, res));

// ler todos os livros
router.get("/livros", (req, res) => controller.getAll(req, res));

// Ler por ID
router.get("/livros/:id", (req, res) => controller.getOne(req, res));

// atualizar
router.put("/livros/:id", (req, res) => controller.update(req, res));

// excluir
router.delete("/livros/:id", (req, res) => controller.remove(req, res));

export default router;