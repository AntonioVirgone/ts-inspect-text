// src/routes.ts
import { Router, Request, Response, NextFunction } from "express";
import { IFindWordController } from "./controller/find/IFindWordController";
import { FindWordController } from "./controller/find/FindWordController";
import { ICreateController } from "./controller/create/ICreateController";
import { CreateController } from "./controller/create/CreateController";

const router = Router();
const findWordController: IFindWordController = new FindWordController();
const createController: ICreateController = new CreateController();
/**
 * @swagger
 * /api/v1/read/{fileName}/words:
 *   get:
 *     summary: Restituisce il numero totale di parole nel file, il numero di lettere nel file, il numero di spazi nel file e una lista di parole che si ripetono più di 10 volte
 *     parameters:
 *       - in: header
 *         name: x-service-token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token di autenticazione
 *       - in: path
 *         name: fileName
 *         required: true
 *         schema:
 *           type: string
 *         description: Nome del file
 *     responses:
 *       200:
 *         description: Successo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   totalWord:
 *                     type: integer
 *                   totalSpace:
 *                     type: integer
 *                   totalLetter:
 *                     type: integer
 *                   mostRepeatedWord:
 *                     type: array
 *                     items:
 *                       type: string
 *       401:
 *         description: Failure
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: integer
 *                  message:
 *                    type: string
 */
router.get(
  '/api/v1/read/:fileName/words',
  async (req: Request, res: Response, next: NextFunction) => {
    findWordController.find(req, res, next);
  }
);

/**
 * @swagger
 * /api/v1/read/words:
 *   get:
 *     summary: Legge da una pagina web il numero totale di parole nel file, il numero di lettere nel file, il numero di spazi nel file e una lista di parole che si ripetono più di 10 volte
 *     parameters:
 *       - in: header
 *         name: x-service-token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token di autenticazione
 *       - in: query
 *         name: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Path url
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   totalWord:
 *                     type: integer
 *                   totalSpace:
 *                     type: integer
 *                   totalLetter:
 *                     type: integer
 *                   mostRepeatedWord:
 *                     type: array
 *                     items:
 *                       type: string
 *       401:
 *         description: Failure
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: integer
 *                  message:
 *                    type: string
 */
router.get(
  '/api/v1/read/words',
  async (req: Request, res: Response, next: NextFunction) => {
    findWordController.findExternal(req, res, next);
  }
);

/**
 * @swagger
 * /api/v1/create/{fileName}:
 *   post:
 *     summary: Permette di creare un file con all'interno il contenuto passato tramite request body
 *     parameters:
 *       - in: header
 *         name: x-service-token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token di autenticazione
 *       - in: path
 *         name: fileName
 *         required: true
 *         schema:
 *           type: string
 *         description: Nome del file
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Success
 *       401:
 *         description: Failure
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: integer
 *                  message:
 *                    type: string
 */
router.post(
  '/api/v1/create/:fileName',
  async (req: Request, res: Response, next: NextFunction) => {
    createController.create(req, res, next);
  }
);

export default router;
