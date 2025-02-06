import { Router, Request, Response } from 'express';
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProductById,
  updateProduct,
} from './product.rules';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  try {
    const products = getProduct();
    res.status(200).json(products);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error('Product id is required');
    }
    const product = getProductById(id);
    res.status(200).json(product);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', (req: Request, res: Response) => {
  try {
    const { id, name, price, category } = req.body;
    const product = addProduct({ id, name, price, category });
    res.status(200).json(product);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error('Product id is required');
    }
    const { name, price, category } = req.body;
    const product = updateProduct(id, { name, price, category });
    res.status(200).json(product);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error('Product id is required');
    }
    const product = deleteProduct(Number(id));
    res.status(200).json(product);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
