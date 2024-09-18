import { Request, Response } from 'express';
import { BillingService } from '../services/billing.service';

export class BillingController {
  static async createBilling(req: Request, res: Response) {
    try {
      const billing = await BillingService.createBilling(req.body);
      res.status(201).json(billing);
    } catch (error) {
      res.status(500).json({ message: 'Error creating billing', error });
    }
  }

  static async getBilling(req: Request, res: Response) {
    try {
      const billing = await BillingService.getBillingById(parseInt(req.params.id));
      if (billing) {
        res.json(billing);
      } else {
        res.status(404).json({ message: 'Billing not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving billing', error });
    }
  }

  static async updateBilling(req: Request, res: Response) {
    try {
      const [updatedRows, [updatedBilling]] = await BillingService.updateBilling(parseInt(req.params.id), req.body);
      if (updatedRows > 0) {
        res.json(updatedBilling);
      } else {
        res.status(404).json({ message: 'Billing not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating billing', error });
    }
  }

  static async deleteBilling(req: Request, res: Response) {
    try {
      const deletedRows = await BillingService.deleteBilling(parseInt(req.params.id));
      if (deletedRows > 0) {
        res.json({ message: 'Billing deleted successfully' });
      } else {
        res.status(404).json({ message: 'Billing not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting billing', error });
    }
  }

  static async getAllBillings(req: Request, res: Response) {
    try {
      const billings = await BillingService.getAllBillings();
      res.json(billings);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving billings', error });
    }
  }

  static async getBillingsByPatient(req: Request, res: Response) {
    try {
      const billings = await BillingService.getBillingsByPatient(parseInt(req.params.patientId));
      res.json(billings);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving billings', error });
    }
  }
}