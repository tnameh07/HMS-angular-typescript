import Billing from '../models/billing.model';

export class BillingService {
  static async createBilling(billingData: any): Promise<Billing> {
    return Billing.create(billingData);
  }

  static async getBillingById(id: number): Promise<Billing | null> {
    return Billing.findByPk(id);
  }

  static async updateBilling(id: number, billingData: any): Promise<[number, Billing[]]> {
    return Billing.update(billingData, { where: { id }, returning: true });
  }

  static async deleteBilling(id: number): Promise<number> {
    return Billing.destroy({ where: { id } });
  }

  static async getAllBillings(): Promise<Billing[]> {
    return Billing.findAll();
  }

  static async getBillingsByPatient(patientId: number): Promise<Billing[]> {
    return Billing.findAll({ where: { patientId } });
  }
}