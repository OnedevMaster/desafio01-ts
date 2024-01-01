import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
  // No additional attributes for this account type

  // Override deposit method to add 10 more to the deposit amount
  deposit = (amount: number): void => {
    this.makeDeposit(amount + 10);
    console.log('Depósito acrescido de 10.');
  }
}




